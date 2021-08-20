# Image syntax

### This is a stub page!

> This feature is inherited from the [Marpit framework](https://marpit.marp.app/image-syntax).

## Comparison of image types

There are three ways to include images in your slide: as an inline image, as a background image and as an advanced background image. Each approach has a different set of features, which are shown in the table below:

| Features                                      | [Inline image][inline-image] | [Slide Background][slide-bg] | [Advanced Background][advanced-bg] |
|:---------------------------------------------:|:----------------------------:|:----------------------------:|:----------------------------------:|
| [Resizing by keywords][resizing]              | `auto` only                  | :heavy_check_mark:           | :heavy_check_mark:                 |
| [Resizing by percentage][resizing-percentage] | :x:                          | :heavy_check_mark:           | :heavy_check_mark:                 |
| [Resizing by length][resizing-length]         | :heavy_check_mark:           | :heavy_check_mark:           | :heavy_check_mark:                 |
| [Image filters][filters]                      | :heavy_check_mark:           | :x:                          | :heavy_check_mark:                 |
| [Multiple backgrounds][multiple]              | -                            | :x:                          | :heavy_check_mark:                 |
| [Split backgrounds][split]                    | -                            | :x:                          | :heavy_check_mark:                 |
| [Setting text color][textcolor]               | :heavy_check_mark:           | -                            | -                                  |
| [Setting background color][bgcolor]           | -                            | :heavy_check_mark:           | :heavy_check_mark:                 |

[resizing]: #resizing-an-inline-image
[resizing-percentage]: #resizing-a-background-image
[resizing-length]: #resizing-an-inline-image
[filters]: #image-filters
[textcolor]: #shorthand-for-setting-colors
[bgcolor]: #shorthand-for-setting-colors
[inline-image]: #inline-images
[slide-bg]: #slide-backgrounds
[advanced-bg]: #advanced-backgrounds
[multiple]: #multiple-backgrounds
[split]: #split-backgrounds
[constructor]: https://marpit-api.marp.app/marpit/


## Inline Images

To include an image in your slide, you can use the standard Markdown image syntax `![](image.jpg)` to add an inline image.

```markdown
![](image.jpg)
```

#### Resizing an inline image

You can resize an image by using the `width` and `height` keywords. These keywords work for inline images, [backgrounds][slide-bg] and [advanced backgrounds][advanced-bg].

```markdown
![width:200px](image.jpg) <!-- Setting width to 200px -->
![height:30cm](image.jpg) <!-- Setting height to 300px -->
![width:200px height:30cm](image.jpg) <!-- Setting both dimensions -->
```

The keywords `w` and `h` are equivalent to `width` and `height`, respectively, and may save you some typing.

```markdown
![w:32 h:32](image.jpg) <!-- Setting size to 32x32 px -->
```

Note that you can only use  _the `auto` keyword and the length units defined in CSS_ for inline images.

!> Units related to the size of the viewport (e.g. `vw`, `vh`, `vmin`, `vmax`) are disallowed to ensure that the rendered output slides are immutable.

#### Image filters

You can also apply [CSS filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) to an image by using keywords in the alternate text of an image. The format is`<filter-name>(:<param>(,<param>...))`.

You can apply filters to both inline images and [advanced backgrounds][advanced-bg].

| Markdown           | w/ arguments                                 |
| ------------------ | -------------------------------------------- |
| `![blur]()`        | `![blur:10px]()`                             |
| `![brightness]()`  | `![brightness:1.5]()`                        |
| `![contrast]()`    | `![contrast:200%]()`                         |
| `![drop-shadow]()` | `![drop-shadow:0,5px,10px,rgba(0,0,0,.4)]()` |
| `![grayscale]()`   | `![grayscale:1]()`                           |
| `![hue-rotate]()`  | `![hue-rotate:180deg]()`                     |
| `![invert]()`      | `![invert:100%]()`                           |
| `![opacity]()`     | `![opacity:.5]()`                            |
| `![saturate]()`    | `![saturate:2.0]()`                          |
| `![sepia]()`       | `![sepia:1.0]()`                             |

If you do not specify any arguments, Marp will use the default values for each filter (shown above). 

You can also apply multiple filters to the same image.

```markdown
![brightness:.8 sepia:50%](https://example.com/image.jpg)
```
## Slide backgrounds

Marp allows users to specify each slide's background through Markdown. To specify the background, use the standard inline image syntax and include the `bg` keyword in the alternate text.

```markdown
![bg](https://example.com/background.jpg)
```

If you specify two or more background images in a slide, Marp will use the last defined image. If you want to use multiple images as a background, you will need to use [advanced backgrounds][advanced-bg] and enable the [inline SVG slide](/inline-svg) option.

### Resizing a background image

You can resize your background image with keywords. The keywords are based on the syntax for [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) CSS option.

```markdown
![bg contain](https://example.com/background.jpg)
```

|   Keyword | Description                                     | Example                    |
| --------: | :---------------------------------------------- | :------------------------- |
|   `cover` | Scale image to fill the slide. _(Default)_      | `![bg cover](image.jpg)`   |
| `contain` | Scale image to fit the slide.                   | `![bg contain](image.jpg)` |
|     `fit` | Alias to `contain`, compatible with Deckset.    | `![bg fit](image.jpg)`     |
|    `auto` | Do not scale image, and use the original size.     | `![bg auto](image.jpg)`    |
|    _`x%`_ | Specify the scaling factor by percentage value. | `![bg 150%](image.jpg)`    |

You also can continue to use the [`width` (`w`) and `height` (`h`) keywords][resizing] to specify image size in absolute terms.

## Advanced backgrounds

!> 📐 Advanced backgrounds will work only with experimental [inline SVG slides](/inline-svg).

With advanced backgrounds, you can use [multiple backgrounds][multiple], [split backgrounds][split], and [filters for background images][filters] in your slides.

### Multiple backgrounds

<div class="example">

```markdown
![bg](https://fakeimg.pl/800x600/0288d1/fff/?text=A)
![bg](https://fakeimg.pl/800x600/02669d/fff/?text=B)
![bg](https://fakeimg.pl/800x600/67b8e3/fff/?text=C)
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/multiple-bg.png" alt="Multiple backgrounds" />](/assets/image-syntax/multiple-bg.png ':ignore')

</span>
</div>

These images will be stacked horizontally.

#### Direction keyword

To change the alignment direction from horizontal to vertical, use the `vertical` keyword.

<div class="example">

```markdown
![bg vertical](https://fakeimg.pl/800x600/0288d1/fff/?text=A)
![bg](https://fakeimg.pl/800x600/02669d/fff/?text=B)
![bg](https://fakeimg.pl/800x600/67b8e3/fff/?text=C)
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/multiple-bg-vertical.png" alt="Multiple backgrounds with vertical direction" />](/assets/image-syntax/multiple-bg-vertical.png ':ignore')

</span>
</div>

### Split backgrounds

To isolate the background image from slide context, you can use the `left` or `right` keyword with the `bg` keyword, and the background image will only be placed on the specified part of the slide. For example, if you use`bg left`, then the slide will place the background image on the left half of the slide and leave the right half of the slide for slide content.

<div class="example">

```markdown
![bg left](https://picsum.photos/720?image=29)

# Split backgrounds

The space for slide content will shrink to the right side.
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/split-background.jpg" alt="Split backgrounds" />](/assets/image-syntax/split-background.jpg ':ignore')

</span>
</div>

If you use multiple background images with `left` or `right`, the background images will share the space on the specified side.

<div class="example">

```markdown
![bg right](https://picsum.photos/720?image=3)
![bg](https://picsum.photos/720?image=20)

# Split + Multiple BGs

The space of a slide content will shrink to the left side.
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/split-multiple-bg.jpg" alt="Split + Multiple BGs" />](/assets/image-syntax/split-multiple-bg.jpg ':ignore')

</span>
</div>

This feature is similar to [Deckset's Split Slides](https://docs.decksetapp.com/English.lproj/Media/01-background-images.html#split-slides).

?> Marp uses the last defined keyword in a slide when both `left` and `right` keywords are used in the same slide.

#### Split background size

To specify how much space you want to reserve for your background images, you can specify the split size for background using percentages: e.g., `left:33%`.

<div class="example">

```markdown
![bg left:33%](https://picsum.photos/720?image=27)

# Split backgrounds with specified size
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/split-bg-with-size.jpg" alt="Split backgrounds with specified size" />](/assets/image-syntax/split-bg-with-size.jpg ':ignore')

</span>
</div>

## Shorthand for setting background color

You can also quickly specify a slide's background color through the Markdown image syntax by using a [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) instead of an image URL.

<!-- prettier-ignore-start -->

```markdown
# Hex color (White BG + Black text)

![bg](#fff)
![](#000)

---

# Named color (rebeccapurple BG + White text)

![bg](rebeccapurple)
![](white)

---

# RGB values (Orange BG + White text)

![bg](rgb(255,128,0))
![](rgb(255,255,255))
```

<!-- prettier-ignore-end -->

This is the same as using the [`color` and `backgroundColor` spot directive](/directives?id=local-directives-1).

!> According to the CommonMark spec, you should not include spaces without escaping if you want to use a color function like `rgb()`.




# Image syntax

### This is a stub page!

> This feature is inherited from [Marpit framework](https://marpit.marp.app/image-syntax).

Marpit has extended Markdown image syntax `![](image.jpg)` to be helpful creating beautiful slides.

|              Features               |    Inline image    | [Slide BG][slide-bg] | [Advanced BG][advanced-bg] |
| :---------------------------------: | :----------------: | :------------------: | :------------------------: |
|  [Resizing by keywords][resizing]   |    `auto` only     |  :heavy_check_mark:  |     :heavy_check_mark:     |
| [Resizing by percentage][resizing]  |        :x:         |  :heavy_check_mark:  |     :heavy_check_mark:     |
|   [Resizing by length][resizing]    | :heavy_check_mark: |  :heavy_check_mark:  |     :heavy_check_mark:     |
|      [Image filters][filters]       | :heavy_check_mark: |         :x:          |     :heavy_check_mark:     |
|  [Multiple backgrounds][multiple]   |         -          |         :x:          |     :heavy_check_mark:     |
|     [Split backgrounds][split]      |         -          |         :x:          |     :heavy_check_mark:     |
|   [Setting text color][textcolor]   | :heavy_check_mark: |          -           |             -              |
| [Setting background color][bgcolor] |         -          |  :heavy_check_mark:  |     :heavy_check_mark:     |

[resizing]: #resizing-image
[filters]: #image-filters
[textcolor]: #shorthand-for-setting-colors
[bgcolor]: #shorthand-for-setting-colors
[slide-bg]: #slide-backgrounds
[advanced-bg]: #advanced-backgrounds
[multiple]: #multiple-backgrounds
[split]: #split-backgrounds
[constructor]: https://marpit-api.marp.app/marpit/

Basically the extended features can turn enable by including corresponded keywords to the image's alternative text.

### Resizing image

You can resize image by using `width` and `height` keyword options.

```markdown
![width:200px](image.jpg) <!-- Setting width to 200px -->
![height:30cm](image.jpg) <!-- Setting height to 300px -->
![width:200px height:30cm](image.jpg) <!-- Setting both lengths -->
```

We also support the shorthand options `w` and `h`. Normally it's useful to use these.

```markdown
![w:32 h:32](image.jpg) <!-- Setting size to 32x32 px -->
```

Inline images _only allow `auto` keyword and the length units defined in CSS._

!> Several units related to the size of the viewport (e.g. `vw`, `vh`, `vmin`, `vmax`) cannot use to ensure immutable render result.

### Image filters

You can apply [CSS filters](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) to image through markdown image syntax. Include `<filter-name>(:<param>(,<param>...))` to the alternate text of image.

Filters can use in the inline image and [the advanced backgrounds][advanced-bg].

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

Marpit will use the default arguments shown in above when you omit arguments.

Naturally multiple filters can apply to a image.

```markdown
![brightness:.8 sepia:50%](https://example.com/image.jpg)
```

## Slide backgrounds

We provide a background image syntax to specify slide's background through Markdown. It only have to include `bg` keyword to the alternate text.

```markdown
![bg](https://example.com/background.jpg)
```

When you defined two or more background images in a slide, Marpit will show the last defined image only. If you want to show multiple images, try [the advanced backgrounds][advanced-bg] by enabling [inline SVG slide](/inline-svg).

### Background size

You can resize the background image by keywords. The keyword value basically follows [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size) style.

```markdown
![bg contain](https://example.com/background.jpg)
```

|   Keyword | Description                                     | Example                    |
| --------: | :---------------------------------------------- | :------------------------- |
|   `cover` | Scale image to fill the slide. _(Default)_      | `![bg cover](image.jpg)`   |
| `contain` | Scale image to fit the slide.                   | `![bg contain](image.jpg)` |
|     `fit` | Alias to `contain`, compatible with Deckset.    | `![bg fit](image.jpg)`     |
|    `auto` | Not scale image, and use the original size.     | `![bg auto](image.jpg)`    |
|    _`x%`_ | Specify the scaling factor by percentage value. | `![bg 150%](image.jpg)`    |

You also can continue to use [`width` (`w`) and `height` (`h`) option keywords][resizing] to specify size by length.

## Advanced backgrounds

!> 📐 It will work only in experimental [inline SVG slide](/inline-svg).

The advanced backgrounds support [multiple backgrounds][multiple], [split backgrounds][split], and [image filters for background][filters].

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

These images will arrange in a horizontal row.

#### Direction keyword

You may change alignment direction from horizontal to vertical, by using `vertical` direction keyword.

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

The `left` or `right` keyword with `bg` keyword make a space for the background to the specified side. It has a half of slide size, and the space of a slide content will shrink too.

<div class="example">

```markdown
![bg left](https://picsum.photos/720?image=29)

# Split backgrounds

The space of a slide content will shrink to the right side.
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/split-background.jpg" alt="Split backgrounds" />](/assets/image-syntax/split-background.jpg ':ignore')

</span>
</div>

Multiple backgrounds will work well in the specified background side.

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

?> Marpit uses a last defined keyword in a slide when `left` and `right` keyword is mixed in the same slide by using multiple backgrounds.

#### Split size

Since v1.1.0, Marpit can specify split size for background by percentage like `left:33%`.

<div class="example">

```markdown
![bg left:33%](https://picsum.photos/720?image=27)

# Split backgrounds with specified size
```

<span class="image">

[<img src="https://raw.githubusercontent.com/marp-team/marpit/main/docs/assets/image-syntax/split-bg-with-size.jpg" alt="Split backgrounds with specified size" />](/assets/image-syntax/split-bg-with-size.jpg ':ignore')

</span>
</div>

## Shorthand for setting colors

Through Markdown image syntax, Marpit allows the definition of [color value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) instead of the image URL.

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

It is same as defining [`color` and `backgroundColor` spot directive](/directives?id=local-directives-1).

!> By the spec of CommonMark, it should not allow including spaces without escape if you want using color function like `rgb()`.

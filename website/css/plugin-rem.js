// Based on Marpit PostCSS rem plugin
// https://github.com/marp-team/marpit/blob/main/src/postcss/root/rem.js

const rootFontSizeCustomProp = '--root-font-size'
const skipParsingMatcher = /("[^"]*"|'[^']*'|(?:attr|url|var)\([^)]*\))/g

module.exports = () => ({
  postcssPlugin: 'marp-rem',
  Once: (css) =>
    css.walkDecls((decl) => {
      if (decl.prop === rootFontSizeCustomProp) return

      decl.value = decl.value
        .split(skipParsingMatcher)
        .map((v, i) => {
          if (i % 2) return v

          return v.replace(
            /(-?\d*\.?\d+)rem\b/g,
            (_, num) => `calc(var(${rootFontSizeCustomProp}, 1rem) * ${num})`
          )
        })
        .join('')
    }),
})

module.exports.postcss = true

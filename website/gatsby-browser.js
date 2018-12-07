const { layoutFocusTarget } = require('./symbol')

exports.onRouteUpdate = () => {
  const focusTarget = window[layoutFocusTarget]
  if (focusTarget) focusTarget.focus()
}

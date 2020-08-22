import gitHubSanitize from 'hast-util-sanitize/lib/github.json'

export const sanitize = {
  ...gitHubSanitize,
  attributes: {
    ...gitHubSanitize.attributes,
    '*': [...gitHubSanitize.attributes['*'], 'data*'],
  },
  clobberPrefix: '',
}

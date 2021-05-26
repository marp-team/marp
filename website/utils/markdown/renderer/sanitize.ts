import { defaultSchema } from 'hast-util-sanitize'

export const sanitize = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    '*': [...(defaultSchema.attributes?.['*'] ?? []), 'data*'],
  },
  clobberPrefix: '',
  tagNames: [...(defaultSchema.tagNames ?? []), 'marp-slides'],
}

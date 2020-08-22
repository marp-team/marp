export const generateTitle = (breadcrumbs: string[] = []) =>
  [
    ...breadcrumbs,
    `Marp${
      breadcrumbs.length === 0 ? ': Markdown Presentation Ecosystem' : ''
    }`,
  ].join(' | ')

export const absoluteUrl = (path: string) =>
  new URL(path, process.env.NEXT_PUBLIC_HOST)

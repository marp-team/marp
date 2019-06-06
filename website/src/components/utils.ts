export function combineClass(from, ...classes: any[]) {
  return {
    ...from,
    className: [from.className, ...classes].filter(k => k).join(' '),
  }
}

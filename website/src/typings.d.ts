declare const filePath: string

declare module '*.png' {
  export default filePath
}

declare module '*.svg' {
  export default filePath
}

declare module '*.module.scss' {
  const cssModule: {
    [className: string]: string
  }
  export default cssModule
}

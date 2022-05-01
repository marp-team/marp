import { createContext, useContext, useEffect, useMemo, useState } from 'react'

interface FontFaceContextInterface {
  styles: readonly string[]
  setStyles: (styles: string[] | ((styles: string[]) => string[])) => void
}

const FontFaceContext = createContext<FontFaceContextInterface>({
  styles: [],
  setStyles: () => {
    throw new Error('Required wrapping by <FontFaceProvider>.')
  },
})

export const useFontFace = (fonts: string | string[]) => {
  const fnts = useMemo(() => ([] as string[]).concat(fonts), [fonts])
  const { setStyles } = useContext(FontFaceContext)

  useEffect(() => {
    setStyles((styles) => [...styles, ...fnts])

    return () => {
      const _fnts = [...fnts]

      setStyles((styles) =>
        styles.filter((existingStyle) => {
          const fntIdx = _fnts.indexOf(existingStyle)
          if (fntIdx >= 0) _fnts.splice(fntIdx, 1)

          return fntIdx !== -1
        })
      )
    }
  }, [fnts, setStyles])
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const FontFaceProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [styles, setStyles] = useState<string[]>([])

  return (
    <FontFaceContext.Provider value={{ styles, setStyles }}>
      {children}
    </FontFaceContext.Provider>
  )
}

export const FontFaceRenderer = () => {
  const { styles } = useContext(FontFaceContext)

  return (
    <>
      {[...new Set(styles)]
        .filter((style) => !!style)
        .map((style) => (
          <style data-type="marp-font-face" key={style}>
            {style}
          </style>
        ))}
    </>
  )
}

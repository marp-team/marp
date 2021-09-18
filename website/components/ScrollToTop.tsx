import { ArrowUpIcon } from '@primer/octicons-react'
import { useCallback } from 'react'

export const ScrollToTop = () => {
  const handleClick = useCallback<React.MouseEventHandler<HTMLElement>>((e) => {
    window.scrollTo({ top: 0 })
    e.currentTarget.blur()
  }, [])

  return (
    <div className="scroll-to-top">
      <button onClick={handleClick} title="Scroll to top">
        <ArrowUpIcon className="scroll-to-top-icon" />
        <span className="sr-only">Scroll to top</span>
      </button>
      <style jsx>{`
        .scroll-to-top {
          @apply fixed right-0 bottom-0 z-50 pointer-events-none;

          filter: drop-shadow(0 0px 7px rgba(0, 0, 0, 0.3))
            drop-shadow(0 0px 4px rgba(0, 0, 0, 0.15));
        }
        button {
          @apply appearance-none text-white w-20 h-20 bg-marp-light align-top pointer-events-auto;

          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
        button:hover {
          @apply bg-marp-brand;
        }
        button:focus {
          @apply outline-none;
        }
        button:focus,
        button:hover:active {
          @apply bg-marp-dark;
        }
        button :global(.scroll-to-top-icon) {
          height: auto;
          left: 52%;
          position: absolute;
          top: 52%;
          width: 35%;
        }
      `}</style>
    </div>
  )
}

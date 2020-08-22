import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'

export type UseDrawerOptions = {
  drawer?: HTMLElement | null
  duration?: number
  enabled?: boolean
}

export const useDrawer = ({
  drawer,
  duration = 300,
  enabled = true,
}: UseDrawerOptions = {}) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)
  const activeTimer = useRef<number>()

  const handleOpen = useCallback(() => {
    setOpen(true)
    setActive(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
    setActive(true)
  }, [])
  const toggle = useCallback(() => {
    open ? handleClose() : handleOpen()
  }, [open, handleOpen, handleClose])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleClose)
    return () => router.events.off('routeChangeComplete', handleClose)
  }, [handleClose, router.events])

  useEffect(() => {
    if (drawer && enabled && open) {
      disableBodyScroll(drawer)
      return () => enableBodyScroll(drawer)
    }
  }, [drawer, enabled, open])

  useEffect(() => {
    if (active && enabled) {
      if (activeTimer.current !== undefined)
        window.clearTimeout(activeTimer.current)

      activeTimer.current = window.setTimeout(() => setActive(false), duration)
    }
  }, [active, duration, enabled])

  return { active, handleClose, handleOpen, toggle, open: enabled && open }
}

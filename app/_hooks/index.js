import { useState, useEffect, useCallback } from 'react'

export function Mounter({ onMount, onUnMount }) {
  useEffect(() => {
    !!onMount && onMount()
    return onUnMount
  }, [])
  return null
}

export function Observer({ value, didUpdate }) {
  useEffect(() => {
    didUpdate(value)
  }, [value])
  return null
}

export function MatchMedia({ query }) {
  const [ match, setMatch ] = useState(false)
  const canMatch = typeof window === 'object' && typeof window.matchMedia === 'function'
  const queryMedia = useCallback(() => {
    const queryList = window.matchMedia(query)
    setMatch((queryList && queryList.matches) || false)
    return queryList
  }, [canMatch])

  useEffect(() => {
    if (!canMatch) return
    const queryList = queryMedia()
    if (queryList) queryList.addListener(queryMedia)
    return () => queryList && queryList.removeListener(queryMedia)
  }, [queryMedia, canMatch])

  return match
}

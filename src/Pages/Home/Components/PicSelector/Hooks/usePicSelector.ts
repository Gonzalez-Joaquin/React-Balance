import { useEffect, useState, useCallback } from 'react'
import { CharacterDTO } from '../../../../../@types'

const usePicSelector = (
  url: string = 'https://rickandmortyapi.com/api/character'
) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [all, setAll] = useState<Array<CharacterDTO>>([])
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchCharacters = useCallback(async () => {
    setLoading(true)
    setError(null)

    const controller = new AbortController()
    const signal = controller.signal

    try {
      const response = await fetch(`${url}/?page=${currentPage}`, { signal })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setAll(data.results)
      setTotalPages(data.info.pages)
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong')
      }
    } finally {
      setLoading(false)
    }

    return () => controller.abort()
  }, [url, currentPage])

  useEffect(() => {
    fetchCharacters()
  }, [fetchCharacters, currentPage])

  const incrementPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 42))
  }

  const decrementPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  return {
    all,
    loading,
    error,
    currentPage,
    totalPages,
    incrementPage,
    decrementPage,
  }
}

export default usePicSelector

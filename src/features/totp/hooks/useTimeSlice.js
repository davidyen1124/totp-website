import { useEffect, useState } from 'react'

export default function useTimeSlice() {
  const calc = () => Math.floor(Date.now() / 1000 / 30)
  const [slice, setSlice] = useState(calc())

  useEffect(() => {
    const id = setInterval(() => {
      const val = calc()
      setSlice((prev) => (prev === val ? prev : val))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return slice
}

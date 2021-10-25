import { useEffect, useRef } from 'react'

const useInterval = (callback: () => void, delay: number, args?: any[]) => {

  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const id = setInterval(() => savedCallback.current(), delay, args)
    return () => clearInterval(id)

  }, [delay])

}

export default useInterval

import { useEffect, useState } from 'react'
import {
  getDataFromLocalStorage,
  writeDataToLocalStorage,
} from './local-storage-helper'

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return getDataFromLocalStorage(key) ?? defaultValue
  })

  useEffect(() => {
    writeDataToLocalStorage(key, state)
  }, [key, state])

  return [state, setState]
}

import { useReducer, useEffect } from 'react'
import { TotpContext } from './TotpContext'
import reducer, { initialState, ACTIONS } from './totpReducer'
import makeRandomSecret from '../utils/makeRandomSecret'

const STORAGE_KEY = 'totp-demo-v2'

export function TotpProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
      const base = { ...init, ...saved }

      if (!base.secret) {
        base.secret = makeRandomSecret()
      }

      return base
    } catch {
      return init
    }
  })

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        issuer: state.issuer,
        account: state.account,
        secret: state.secret
      })
    )
  }, [state.issuer, state.account, state.secret])

  return (
    <TotpContext.Provider value={{ state, dispatch, ACTIONS }}>
      {children}
    </TotpContext.Provider>
  )
}

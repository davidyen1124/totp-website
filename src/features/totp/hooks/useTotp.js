import { useContext } from 'react'
import { TotpContext } from '../context/TotpContext'

export const useTotp = () => {
  const ctx = useContext(TotpContext)
  if (!ctx) throw new Error('useTotp must be used inside <TotpProvider>')
  return ctx
}

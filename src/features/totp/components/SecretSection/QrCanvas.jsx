import { useEffect, useRef } from 'react'
import { useTotp } from '../../hooks/useTotp'
import useTotpEngine from '../../hooks/useTotpEngine'

export default function QrCanvas() {
  const { state } = useTotp()
  const { makeQrCanvas } = useTotpEngine(state)
  const canvasRef = useRef(null)

  useEffect(() => {
    makeQrCanvas(canvasRef.current).catch(console.error)
  }, [state.issuer, state.account, state.secret, makeQrCanvas])

  return (
    <canvas
      ref={canvasRef}
      className='mx-auto h-52 w-52 rounded-lg border border-slate-600 shadow-lg'
    />
  )
}

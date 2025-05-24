import { useCallback } from 'react'
import { Secret, TOTP } from 'otpauth'
import QRCode from 'qrcode'

export default function useTotpEngine({ issuer, account, secret }) {
  const totp = useCallback(
    () =>
      new TOTP({
        issuer,
        label: account,
        secret: Secret.fromBase32(secret.replace(/\s+/g, '')),
        algorithm: 'SHA1',
        digits: 6,
        period: 30
      }),
    [issuer, account, secret]
  )

  const toUri = () => totp().toString()

  const generateAt = (timestamp = Date.now()) => totp().generate({ timestamp })

  const makeQrCanvas = async (canvas) => {
    if (!canvas) return
    await QRCode.toCanvas(canvas, toUri(), { margin: 1 })
  }

  return { toUri, generateAt, makeQrCanvas }
}
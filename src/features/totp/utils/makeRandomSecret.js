import { Secret } from 'otpauth'

export default function makeRandomSecret(size = 20) {
  return new Secret({ size }).base32
}

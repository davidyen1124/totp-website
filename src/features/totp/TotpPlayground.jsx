import { TotpProvider } from './context/TotpContext.jsx'
import SecretForm from './components/SecretSection/SecretForm'
import QrCanvas from './components/SecretSection/QrCanvas'
import CodeForm from './components/VerifySection/CodeForm'
import LogTable from './components/VerifySection/LogTable'

export default function TotpPlayground() {
  return (
    <TotpProvider>
      <div className='min-h-screen bg-slate-900 flex items-center justify-center p-6'>
        <div className='w-full max-w-5xl grid gap-6 md:grid-cols-2'>
          {/* Left Pane - Secret & QR */}
          <section className='terminal-card shadow-2xl rounded-xl p-6 flex flex-col gap-4'>
            <h2 className='text-xl matrix-text'>🔐 Secret & QR</h2>
            <SecretForm />
            <QrCanvas />
            <p className='text-xs text-green-300 font-mono text-center'>
              🛡️ Everything stays in your browser – nothing ever leaves your
              machine.
            </p>
          </section>

          {/* Right Pane - Verify Code */}
          <section className='terminal-card shadow-2xl rounded-xl p-6 flex flex-col gap-4'>
            <h2 className='text-xl matrix-text'>⚡ Verify a Code</h2>
            <CodeForm />
            <LogTable />
          </section>
        </div>
      </div>
    </TotpProvider>
  )
}

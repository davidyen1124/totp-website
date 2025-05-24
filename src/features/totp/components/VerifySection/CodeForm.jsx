import { useTotp } from '../../hooks/useTotp'
import useTotpEngine from '../../hooks/useTotpEngine'
import useTimeSlice from '../../hooks/useTimeSlice'

export default function CodeForm() {
  const { state, dispatch, ACTIONS } = useTotp()
  const { generateAt } = useTotpEngine(state)
  const slice = useTimeSlice()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!state.secret.trim()) return

    const inputCode = state.codeInput.replace(/\s+/g, '')
    const offsets = [-1, 0, 1]

    const results = offsets.map((offset) => {
      const timestamp = (slice + offset) * 30 * 1000
      const expectedCode = generateAt(timestamp)
      return {
        expectedCode,
        result: inputCode === expectedCode
      }
    })

    dispatch({
      type: ACTIONS.ADD_LOG_ENTRY,
      payload: {
        time: new Date().toLocaleTimeString(),
        code: inputCode || '—',
        results
      }
    })

    dispatch({ type: ACTIONS.SET_CODE_INPUT, payload: '' })
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        type='text'
        value={state.codeInput}
        onChange={(e) =>
          dispatch({ type: ACTIONS.SET_CODE_INPUT, payload: e.target.value })
        }
        inputMode='numeric'
        maxLength='8'
        placeholder='123456'
        className='hacker-input grow px-4 py-2 rounded text-lg tracking-widest focus:outline-none'
        autoComplete='one-time-code'
      />
      <button
        type='submit'
        className='hacker-btn px-4 py-2 rounded hover:shadow-lg focus:outline-none disabled:opacity-50'
        disabled={state.codeInput.length === 0}
      >
        Verify
      </button>
    </form>
  )
}

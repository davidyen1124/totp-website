import { useTotp } from '../../hooks/useTotp'
import makeRandomSecret from '../../utils/makeRandomSecret'

export default function SecretForm() {
  const { state, dispatch, ACTIONS } = useTotp()

  const handleGenerate = () =>
    dispatch({
      type: ACTIONS.GENERATE_SECRET,
      payload: makeRandomSecret()
    })

  return (
    <>
      <label className='block'>
        <span className='text-sm font-medium text-green-400 font-mono'>
          [ ISSUER ]
        </span>
        <input
          type='text'
          value={state.issuer}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_ISSUER, payload: e.target.value })
          }
          className='hacker-input mt-1 w-full px-3 py-2 rounded focus:outline-none'
          placeholder='My Demo Service'
        />
      </label>

      <label className='block'>
        <span className='text-sm font-medium text-green-400 font-mono'>
          [ ACCOUNT ]
        </span>
        <input
          type='text'
          value={state.account}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_ACCOUNT, payload: e.target.value })
          }
          className='hacker-input mt-1 w-full px-3 py-2 rounded focus:outline-none'
          placeholder='alice@example.com'
        />
      </label>

      <label className='block'>
        <span className='text-sm font-medium text-green-400 font-mono'>
          [ SECRET (BASE-32) ]
        </span>
        <input
          type='text'
          value={state.secret}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_SECRET, payload: e.target.value })
          }
          className='hacker-input mt-1 w-full px-3 py-2 rounded font-mono focus:outline-none'
          spellCheck='false'
          autoCorrect='off'
          autoComplete='off'
        />
      </label>

      <button
        onClick={handleGenerate}
        className='hacker-btn mt-2 w-full h-10 rounded hover:shadow-lg focus:outline-none'
      >
        Generate&nbsp;Secret
      </button>
    </>
  )
}

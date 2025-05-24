export const ACTIONS = {
  SET_ISSUER: 'set-issuer',
  SET_ACCOUNT: 'set-account',
  SET_SECRET: 'set-secret',
  GENERATE_SECRET: 'generate-secret',
  SET_CODE_INPUT: 'set-code-input',
  ADD_LOG_ENTRY: 'add-log-entry'
}

export const initialState = {
  issuer: 'Demo Service',
  account: 'alice@example.com',
  secret: '', // Base-32
  codeInput: '',
  log: [] // [{ time, code, results }]
}

export default function totpReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ISSUER:
      return { ...state, issuer: action.payload }
    case ACTIONS.SET_ACCOUNT:
      return { ...state, account: action.payload }
    case ACTIONS.SET_SECRET:
      return { ...state, secret: action.payload }
    case ACTIONS.GENERATE_SECRET:
      return { ...state, secret: action.payload }
    case ACTIONS.SET_CODE_INPUT:
      return { ...state, codeInput: action.payload }
    case ACTIONS.ADD_LOG_ENTRY:
      return { ...state, log: [action.payload, ...state.log] }
    default:
      return state
  }
}

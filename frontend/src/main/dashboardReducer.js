const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

//reducers sempre são funções simples que evoluem o state
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return {...state, summary: action.payload}
    default:
      return state
  }
}
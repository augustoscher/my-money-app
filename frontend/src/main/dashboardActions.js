import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

//actionCreator cria um objeto que é uma ação. Deve ser tipado para ser mapeado no reducer
export const getSummary = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/billingCycles/summary`)
      .then(resp => {
        dispatch({ type: 'BILLING_SUMMARY_FETCHED', payload: resp.data })
      })
  }
}

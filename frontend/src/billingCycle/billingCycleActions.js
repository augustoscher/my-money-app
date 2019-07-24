import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export const getList = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/billingCycles`)
      .then(resp => {
        dispatch({ type: 'BILLING_CYCLES_FETCHED', payload: resp.data })
      })
  }
}

export function create(values) {
  axios.post(`${BASE_URL}/billingCycles`, values);
  return {
    type: 'TEMP'
  }
}
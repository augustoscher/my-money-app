import axios from 'axios'
import { toastr } from 'react-redux-toastr'

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
  axios.post(`${BASE_URL}/billingCycles`, values)
    .then(resp => {
      toastr.success('Sucesso', 'Operação realizada com sucesso.');
    })
    .catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Error', error))
    })
  return {
    type: 'TEMP'
  }
}
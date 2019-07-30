import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

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
  //usa o redux multi para retornar uma function que recebe dispatch
  return dispatch => {
    axios.post(`${BASE_URL}/billingCycles`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        //redux multi permite chamar dispatch passando um array
        dispatch([
          resetForm('billingCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ]);
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Error', error))
      })
  }
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}
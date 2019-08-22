import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}]}

export const getList = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/billingCycles`)
      .then(resp => {
        dispatch({ type: 'BILLING_CYCLES_FETCHED', payload: resp.data })
      })
  }
}

export const create = (values) => sumbit(values, 'post');
export const update = (values) => sumbit(values, 'put');
export const remove = (values) => {
  return [
    sumbit(values, 'delete'),
    getList()
  ]
}

const sumbit = (values, method) => {
  //usa o redux multi para retornar uma function que recebe dispatch
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        //redux multi permite chamar dispatch passando um array
        dispatch(init());
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Error', error))
      })
  }
}

export const showUpdate = (billingCycle) => {
  return showTab(billingCycle, 'tabUpdate');
}

export const showDelete = (billingCycle) => {
  return showTab(billingCycle, 'tabDelete');
}

const showTab = (billingCycle, tab) => {
  return [
    showTabs(tab),
    selectTab(tab),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}
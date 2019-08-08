import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemtList from './itemList';
import Summary from './summary';

class BillingCycleForm extends React.Component {

  calculateSummary() {
    const sum = (t,v) => t + v;
    return {
      //pega o array de credits, transforma em um novo array de inteiros, e reduz para um unico valor usando a funcao de soma
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {
    //fica disponível em props pois esta sendo decorado com reduxForm()
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field 
            name='name'
            component={labelAndInput}
            label='Nome'
            cols='12 4'
            placeholder='Informe o nome'
            readOnly={readOnly} />
          <Field
            name='month'
            component={labelAndInput}
            label='Mês'
            cols='12 4'
            placeholder='Informe o mês'
            type='number'
            readOnly={readOnly} />
          <Field
            name='year'
            component={labelAndInput}
            label='Ano'
            cols='12 4'
            placeholder='Informe o ano'
            type='number'
            readOnly={readOnly} />
          <Summary 
            credit={sumOfCredits} 
            debt={sumOfDebts} />
          <ItemtList 
            cols='12 6'
            list={credits} 
            readOnly={readOnly}
            field='credits' 
            legend='Créditos' />
          <ItemtList 
            cols='12 6'
            list={debts} 
            readOnly={readOnly}
            field='debts' 
            legend='Débitos'
            showStatus={true} />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
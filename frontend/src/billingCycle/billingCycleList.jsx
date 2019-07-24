import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from './billingCycleActions';

class BillingCycleList extends React.Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  billingCycle: state.billingCycle
});
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)

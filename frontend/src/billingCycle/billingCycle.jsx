import React from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends React.Component {

  render() {
    return (
      <div>
        <ContentHeader title='Billing Cycle' small='Cadastro'/>
        <Content>
          Billing Cycle
        </Content>
      </div>
    )
  }
}

export default BillingCycle
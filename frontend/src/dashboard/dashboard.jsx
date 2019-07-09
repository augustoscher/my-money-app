import React from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
  }  
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox cols='12 4' color='green' icon='bank'
              value='R$ 10,00' text='Total de Créditos' />
            <ValueBox cols='12 4' color='red' icon='credit-card'
              value='R$ 10,00' text='Total de Débitos' />
            <ValueBox cols='12 4' color='blue' icon='money'
              value='R$ 0,00' text='Valor Consolidado' />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard
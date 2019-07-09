import React from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'

class Dashboard extends React.Component {
  constructor(props){
    super(props)
  }  
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard
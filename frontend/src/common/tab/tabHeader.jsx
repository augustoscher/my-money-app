import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'
import { selectTab } from './tabActions'

class TabHeader extends React.Component {

  render() {
    //this.props.tab.selected = compara o atributo selected (string) do state do redux
    //this.props.target = vem passado por parâmetro para o componente
    const selected = this.props.tab.selected === this.props.target
    const visible = this.props.tab.visible[this.props.target]
    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a href='javascript:;'
            data-toggle='tab'
            onClick={() => this.props.selectTab(this.props.target)}
            data-target={this.props.target} >
              <i className={`fa fa-${this.props.icon}`} /> {this.props.label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({
  tab: state.tab //referencia o nome do atributo do reducer (tabReducer)
})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)
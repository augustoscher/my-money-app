import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends React.Component {

  render() {
    const selected = this.props.tab.selected === this.props.id
    return (
      <div id={this.props.id} className={`tab-pane ${selected ? 'active' : '' }`}>
        {this.props.children}
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  tab: state.tab
})
// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps)(TabContent)
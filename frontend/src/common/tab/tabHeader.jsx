import React from 'react'

export default class TabHeader extends React.Component {

  render() {
    return (
      <li>
        <a href 
          data-toggle='tab'
          data-target={this.props.target} >
            <i className={`fa fa-${this.props.icon}`} /> {this.props.label}
         </a>
      </li>
    )
  }
}
import React from 'react'

import './InfoBox.scss'

const InfoBox = React.createClass({
  displayName: 'InfoBox',

  getDefaultProps() {
    return {
      title: '',
      active: false
    }
  },

  render() {
    const title = (this.props.title) ? (<h2>{this.props.title}</h2>) : ''
    const infobox = (
      <div className="infobox">
        <div className="infobox-content">
          <span className="infobox-close glyphicon glyphicon-remove" onClick={this.props.close}></span>
          {title}
          {this.props.children}
        </div>
      </div>
    )
    return (this.props.active) ? infobox : null
  }
})

export default InfoBox

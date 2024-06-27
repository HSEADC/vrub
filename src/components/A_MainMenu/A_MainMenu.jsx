// import './A_MainMenu.scss'
import React from 'react'
import classNames from 'classnames'

export default class A_MainMenu extends React.Component {
  render() {
    const { text, current, url, type } = this.props
    const classes = classNames({
      A_MainMenu: true,
      current: current,
      ['${type}']: true
    })

    return (
      <div className={classes} href={url}>
        {text}
      </div>
    )
  }
}

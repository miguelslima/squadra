import React from 'react'

import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div style={{display: 'flex', flexDirection: "row"}}>
      <img style={{width: 120, height: 40}} src={logo} alt="Logo Dragon Ball"/>
      <p>Header</p>
    </div>
  )
}

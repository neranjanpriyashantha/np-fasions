import React from 'react'
import Navigationbr from '../common/Navigationbr'
import Footer from '../common/Footer'

export default function CommonLayout(props) {
  return (
    <div>
      <Navigationbr />
      <div style={{ padding: '0 8%' }}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

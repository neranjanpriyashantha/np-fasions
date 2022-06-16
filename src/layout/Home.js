//Navigationbr.js
//Body.js
//Footer.js

import React from 'react'
import CommonLayout from './common/CommonLayout'
import Footer from './common/Footer'
import Navigationbr from './common/Navigationbr'
import Body from './home/Body'


export default function Home() {
  return (
    <div>
      <CommonLayout> 
      <Body />
      </CommonLayout>


    </div>
  )
}

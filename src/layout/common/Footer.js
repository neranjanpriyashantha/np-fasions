import React from 'react'
import Button from '@mui/material/Button';
import FullScreenDialog from '../../components/Home/FullScreenDialog';

export default function Footer() {
  return (
    <div style={{
      backgroundColor: 'teal',
      width: '100%',
      position: 'fixed',
      bottom: '0px',
      zIndex:'10',
      textAlign:'center'
    }}>

      <span style={{
        color: 'white',
        marginTop:'20px'
      }}>
        &copy; copyright neranjan 
      </span>
      <div style={{float:'right',margin:'5px'}}> <FullScreenDialog  /></div>
    </div>
  )
}






import React, { useEffect } from 'react'
import "./WelcomPage.css"
const WelcomePage = () => {
//   useEffect(()=>{
//     const showAlert=()=>{
// alert('Payment Done Successfully ✔️ 😊')
//     }
//     showAlert()
    
//   },[])
  return (
    <div className='wel'>
    <h1 className='welcome'>Congratulations Your booking done successfully<span className="success-emoji">✔️</span>😊</h1> 
    </div>
  )
}

export default WelcomePage
import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Receive Exclusive Offers On Your E-mail</h1>
      <p>Suscribe our newsletter to stay updated</p>
      <div>
<input type="email" placeholder='Your E-mail id' />
<button>Suscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

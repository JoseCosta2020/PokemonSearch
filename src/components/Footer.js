import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import AppStore from '../AppStore.PNG'
import GooglePlay from '../GooglePlay.PNG'
import './Footer.css';

const Footer = () => {
  return (
    <div style={{color:'white'}}  className='footer'>
        <h1>Footer</h1>
        <div className='container_ul'>
            <div className='center-div'>
                <img src={AppStore} alt='PlaceHolder'/>
                <img src={GooglePlay} alt='PlaceHolder'/>
            </div>
            <div className='center-div2'>
                <p>Terms</p>
                <p>License</p>
                <p>English</p>
            </div>
            <ul>
                <li>
                    <a className='icon-link' style={{color:'white'}} href='https://x.com/josemorgado'> <FaTwitter/></a>
                </li>
                <li>
                    <a className='icon-link' style={{color:'white'}} href='https://www.instagram.com/zepedrocosta00'> <FaFacebook/></a>
                </li>
                <li>
                    <a className='icon-link' style={{color:'white'}} href='https://www.instagram.com/zepedrocosta00/'> <FaInstagram/> </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import './nav.css'
import {useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {TiContacts} from 'react-icons/ti'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBookAlt /></a>
      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><AiOutlineFundProjectionScreen /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><TiContacts /></a>
    </nav>
  )
}

export default Nav
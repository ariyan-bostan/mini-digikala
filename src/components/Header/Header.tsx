import React, { useEffect, useState } from 'react'
import styleLayout from "../Styles/Layout.module.css"
import style from "../Styles/Header/header.module.css"
import NavList1 from './NavList1'
import Search from './Search'
import User from './User'
import Location from './Location'

const Header = () => {
    
    
  return (
     <div className={[styleLayout.header].join(" ")}>
        <NavList1 />
        <div className='d-flex flex-row gap-3 mx-2'>
            <Search />
            <User />
        </div>
        <Location />
    </div>
  )
}

export default Header
import React from 'react'
import style from "../Styles/Header/header.module.css"
import { NavLink } from 'react-router'

const Logo = () => {
  return (
    <>
    {innerWidth > 850 && (
            <NavLink to={"/"} className={[style.boxLogo].join(" ")}>
              <img
                className="w-100 h-100 "
                src="https://www.digikala.com/brand/full-horizontal.svg"
                alt=""
              />
            </NavLink>
          )}
    </>
  )
}

export default Logo
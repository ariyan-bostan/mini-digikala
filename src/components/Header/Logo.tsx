import React from 'react'
import style from "../Styles/Header/header.module.css"

const Logo = () => {
  return (
    <>
    {innerWidth > 850 && (
            <div className={[style.boxLogo].join(" ")}>
              <img
                className="w-100 h-100 "
                src="https://www.digikala.com/brand/full-horizontal.svg"
                alt=""
              />
            </div>
          )}
    </>
  )
}

export default Logo
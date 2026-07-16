import { type ReactNode } from 'react'
import style from "./styles/layout.module.css";

interface Props{
    children:ReactNode
}
const Layout = ({children}:Props) => {
  return (
    <div className={[style.layout].join(" ")}>
        {children}
    </div>
  )
}

export default Layout
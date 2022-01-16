import React from "react"
import s from './Header.module.css'
import Link from './Link/Link'

const Header = () => {
    return (
        <div className={s.header}>
            <Link content='ToDo' /> 
            <Link content='Text' />
        </div>
    )
}

export default Header
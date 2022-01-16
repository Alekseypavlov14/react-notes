import React from "react"
import s from './Link.module.css'

const Link = (props) => {
    return (
        <div>
            <a 
                href='#root' 
                className={s.link}
                rel='noopener noreferer'
            >
                {props.content}
            </a>
        </div>
    )
}

export default Link
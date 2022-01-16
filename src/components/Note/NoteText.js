import React from "react"
import s from './NoteText.module.css'

const NoteText = (props) => {
    return (
        <div className={s.text}>
            {props.text}
        </div>
    )
}

export default NoteText
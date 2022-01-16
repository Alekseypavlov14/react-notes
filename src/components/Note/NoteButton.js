import React, { useState } from "react"
import s from './NoteButton.module.css'

const NoteButton = () => {
    const [status, setStatus] = useState(false)

    return (
        <div>
            <label 
                htmlFor='#button' 
                className={status ? s.VisualButtonActive : s.VisualButtonPassive}
                onClick={ (e) => {
                    setStatus(!status)
                    if (!status) {
                        e.target.parentElement.parentElement.remove()
                    }
                } }
            />
            <a id='button'></a>
        </div>
    )
}

export default NoteButton
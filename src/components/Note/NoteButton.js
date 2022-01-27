import React from "react"
import s from './NoteButton.module.css'

const NoteButton = (props) => {
    return (
        <div>
            <label 
                htmlFor='#button' 
                className={s.VisualButtonPassive}
                onClick={ (e) => {
                    props.note.done = true
                    props.updateNotes()
                } }
            />
            <a id='button'></a>
        </div>
    )
}

export default NoteButton
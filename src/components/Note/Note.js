import React from 'react'
import NoteButton from './NoteButton'
import NoteText from './NoteText'
import s from './Note.module.css'

const Note = (props) => {
    return (
        <div className={s.Note}>
            <NoteButton updateNotes={props.updateNotes} note={props.note} />
            <NoteText text={props.text}/>
        </div>
    )
}

export default Note
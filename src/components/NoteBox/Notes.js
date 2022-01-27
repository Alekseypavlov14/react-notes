import React, { useState } from "react"
import s from './Notes.module.css'
import Note from './../Note/Note'

const Notes = (props) => {
    return (
        <div className={s.Notes}>
            {props.notes.map((note, index) => !note.done && (
                <Note 
                    text={note.text} 
                    key={index.toString()} 
                    updateNotes={props.updateNotes}
                    note={note}
                />
            ))}
        </div>
    )
}

export default Notes
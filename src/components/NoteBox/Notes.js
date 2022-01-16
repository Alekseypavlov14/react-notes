import React, { useState } from "react"
import s from './Notes.module.css'
import Note from './../Note/Note'

const Notes = (props) => {
    return (
        <div className={s.Notes}>
            {props.notes.map((note, index) => <Note text={note} key={index.toString()} />)}
        </div>
    )
}

export default Notes
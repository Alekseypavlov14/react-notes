import React from 'react'
import s from './NoteAdd.module.css'

const NoteAdd = (props) => {
    return (
        <div className={s.NoteAdd}>
            <input 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        props.onEnter()
                        e.target.value = ''
                        props.updateInputValue()
                    }
                }}
                onChange={props.onChange} 
                className={s.Field} 
                type='text'
                placeholder='add ToDo...'
            />
        </div>
    )
}

export default NoteAdd
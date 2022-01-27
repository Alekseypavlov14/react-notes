import './App.css';
import Header from './components/Header/Header';
import Notes from './components/NoteBox/Notes';
import NoteAdd from './components/NoteAdd/NoteAdd'
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([])
  const [noteText, setNoteText] = useState('')

  useEffect(() => {
    const todos = localStorage.getItem('todos')
    setNotes(JSON.parse(todos) || [])
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App">
      <Header />

      <NoteAdd 
        updateInputValue={() => {setNoteText('')}}
        onEnter={() => {
          noteText.length !== 0 && setNotes(notes.concat({text: noteText, done: false}))
        }} 
        onChange={(e) => {
          setNoteText(e.target.value)
        }}
      />

      <Notes 
        notes={notes} 
        updateNotes={() => { setNotes(notes => {
          return notes.filter(note => note.done === false)
        })}}
      />
    </div>
  );
}

export default App;

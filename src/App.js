import './App.css';
import Header from './components/Header/Header';
import Notes from './components/NoteBox/Notes';
import NoteAdd from './components/NoteAdd/NoteAdd'
import { useState } from 'react';

function App() {
  const [children, setChildren] = useState([])
  const [noteText, setNoteText] = useState('')

  return (
    <div className="App">
      <Header />
      <NoteAdd 
        onEnter={() => {
          noteText.length !== 0 && setChildren(children.concat(noteText))
        }} 
        onChange={(e) => {
          setNoteText(e.target.value)
        }}
      />
      <Notes notes={children} />
    </div>
  );
}

export default App;

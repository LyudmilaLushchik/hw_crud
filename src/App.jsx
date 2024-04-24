import { useEffect, useState } from 'react';
import './App.css';
import NoteAdd from './components/NoteAdd';
import NoteList from './components/NoteList';
import NoteUpdate from './components/NotesUpdate';

function App() {
  const [notes, setNotes]= useState([]);

  async function fetchNotes() {
    let promise = fetch('http://localhost:7070/notes');
    promise.then( res => res.json())
      .then( json => setNotes(json))
      .catch( err => {
        console.warn(err);
        alert('Ошибка получения данных с сервера');
      });
  }

  useEffect( () => {
    fetchNotes();
  },  []);

  async function removeNote(id) { 
    await fetch(`http://localhost:7070/notes/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      });

    fetchNotes();
  }

  const updateNotes = () => {
    fetchNotes();
  };

  async function addNote(note) {
    if (!note) {
        return;
    }

    const newNote = {
      id: 0,
      content: note
    }

    await fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(newNote)
    });

    fetchNotes();
  }
  return (
    <>
      <NoteUpdate updateNotes={updateNotes}/>
  
      <NoteList notes={notes} removeItem={removeNote}/>
  
      <NoteAdd addNote={addNote}/>
    </>
  );
}

export default App;

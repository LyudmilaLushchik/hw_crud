/* eslint-disable react/prop-types */
import NoteItem from './NoteItem';


export default function NoteList(props) {
  const { notes, removeItem } = props;

  return (
    <div className='notes'>
        {notes.map( (note, index) => <NoteItem key={index} note={note} removeItem={removeItem}/>)}
    </div>
  )
}


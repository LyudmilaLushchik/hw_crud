/* eslint-disable react/prop-types */
export default function NoteItem (props) {
  const {note, removeItem} = props;

  return (
    <div className='note-item'>
      <span>{note.content}</span>
      <button className='delete'
        onClick={ () => {removeItem(note.id)}}>
          x
      </button>
    </div>
  )
}

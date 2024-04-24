/* eslint-disable react/prop-types */
export default function NotesUpdate(props) {
  const { updateNotes } = props;
  return (
    <div>
        <label className='el'>Notes</label>
        <button className='el' onClick={ () => {updateNotes();}}>Refresh</button>
    </div>   
  )
}

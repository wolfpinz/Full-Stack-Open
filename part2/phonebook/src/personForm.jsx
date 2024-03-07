const PersonForm = ({
  addPerson,
  newName,
  onNameInputChange,
  newNumber,
  onNumberInputChange
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={onNameInputChange} /></div>
      <div>phone: <input value={newNumber} onChange={onNumberInputChange} /></div>
      <div>
        <button type="submit" >add</button>
      </div>
    </form>
  )
}

export default PersonForm

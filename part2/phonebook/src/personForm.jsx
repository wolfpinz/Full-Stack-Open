const PersonForm = ({
  addPerson,
  newName,
  handleNameInputChange,
  newPhoneNumber,
  handlePhoneNumberInputChange
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={newName} onChange={handleNameInputChange} /></div>
      <div>phone: <input value={newPhoneNumber} onChange={handlePhoneNumberInputChange} /></div>
      <div>
        <button type="submit" >add</button>
      </div>
    </form>
  )
}

export default PersonForm

<<<<<<< HEAD
const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  )
}
export default Person
=======
const Person = ({ name }) => {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
>>>>>>> 22b8c352317b1341fd718586d8f3e0a8798fbde2

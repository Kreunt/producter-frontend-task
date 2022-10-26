const Form = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter new task: </label>
      <input type="text" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};
export default Form;

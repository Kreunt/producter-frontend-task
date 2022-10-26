const Form = ({ input, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter new task..."
        type="text"
        onChange={handleChange}
        value={input}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;

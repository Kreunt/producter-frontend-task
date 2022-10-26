const list = ["a", "b", "c"];

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default List;

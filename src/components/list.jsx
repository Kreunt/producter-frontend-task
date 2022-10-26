import ListRow from "./list-row.jsx";

const List = ({ list, setList }) => (
  <ul>
    {list.map((item) => (
      <ListRow key={item.id} item={item} setList={setList} />
    ))}
  </ul>
);

export default List;

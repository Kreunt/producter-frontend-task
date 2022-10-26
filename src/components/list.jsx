import ListRow from "./list-row.jsx";

const List = ({ list, setList }) => (
  <ul>
    {list.length > 0 ? (
      list.map((item) => (
        <ListRow key={item.id} item={item} setList={setList} />
      ))
    ) : (
      <p>No items</p>
    )}
    <button
      onClick={() => {
        setList((prevList) => {
          return prevList.filter((item) => {
            return !item.completed;
          });
        });
      }}
    >
      Clear Completed
    </button>
  </ul>
);

export default List;

import ListRow from "./list-row.jsx";
import "../css/list.css";

const List = ({ list, setList }) => {
  const handleClear = () => {
    setList((prevList) => {
      return prevList.filter((item) => {
        return !item.completed;
      });
    });
  };

  return (
    <ul className="table">
      {list.length > 0 ? (
        list.map((item) => (
          <ListRow key={item.id} item={item} setList={setList} />
        ))
      ) : (
        <p>No items</p>
      )}
      <button className="clear-button" onClick={handleClear}>
        Clear Completed
      </button>
    </ul>
  );
};

export default List;

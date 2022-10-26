import "../css/list-row.css";

const ListRow = ({ item, setList }) => {
  const handleDone = () => {
    setList((prevList) => {
      return prevList.map((listItem) => {
        if (listItem.id === item.id) {
          return {
            ...listItem,
            completed: !listItem.completed,
          };
        }
        return listItem;
      });
    });
  };

  return (
    <li className="list-row" key={item.id}>
      <p className={item.completed ? "done-text" : "text"}>{item.text}</p>
      <button onClick={handleDone}>Done</button>
    </li>
  );
};
export default ListRow;

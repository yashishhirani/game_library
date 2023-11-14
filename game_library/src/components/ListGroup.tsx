import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Miami", "Chicago", "Seattle"];
  const [selecedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>There are no items!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selecedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

function ListGroup() {
  let items = ["New York", "San Francisco", "Miami", "Chicago", "Seattle"];
  items = [];

  const getMessage=() => {
    return items.length === 0 ? <p>There are no items!</p> : null;;
  }

  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

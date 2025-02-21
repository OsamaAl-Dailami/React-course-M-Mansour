function ListGroup() {
  let items = ["An item", "A second item", "A third item", "A fourth item"];
    items =[];
  return (
    <>
      <h1 className="mx-auto p-2">this is List Group</h1>

      {items.length === 0 && "no found items"}
      <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>

    </>
  );
}

export default ListGroup;

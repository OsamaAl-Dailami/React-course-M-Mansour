function ListGroup() {
  const items = ['An item', 'A second item', 'A third item', 'A fourth item'];
  return (
    <>
      <h1 className="mx-auto p-2">this is List Group</h1>

      <ul className="list-group">
        {items.map(item=><li className="list-group-item" >{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;

import { MouseEvent } from "react";

function ListGroup() {
  let items = ["An item", "A second item", "A third item", "A fourth item"];
    // items =[];

  const handelEvent = (event:MouseEvent) =>{
    console.log(event);
  }

  return (
    <>
      <h1 className="mx-auto p-2">this is List Group</h1>

      {items.length === 0 && "no found items"}
      <ul className="list-group">
          {items.map((item, index) => (
            <li onClick={handelEvent} key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>

    </>
  );
}


export default ListGroup;

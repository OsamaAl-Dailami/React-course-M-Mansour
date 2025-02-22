import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = ["An item", "A second item", "A third item", "A fourth item"];


  const [selectedIndex, setSelectedIndex] = useState(0);


  return (
    <>
      <h1 className="mx-auto p-2">this is List Group</h1>

      {items.length === 0 && "no found items"}
      <ul className="list-group">
          {items.map((item, index) => (
            <li  onClick={()=>setSelectedIndex(index)} key={index} className={selectedIndex === index ?"list-group-item active" : "list-group-item" } >
              {item}
            </li>
          ))}
        </ul>

    </>
  );
}


export default ListGroup;

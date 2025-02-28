import { useState } from "react";
import style from "./ListGroup.module.css";
import appStyle from "../../App.module.css";

interface ListGroupProps{
  heading: string,
  items: string[],
  OnselectItem: (item: string)=>void
}

function ListGroup({heading, items, OnselectItem} : ListGroupProps) {
  



  const [selectedIndex, setSelectedIndex] = useState(0);
  

  return (
    <>
      <h1 className="mx-auto p-2">{heading}</h1>

      {items.length === 0 && "no found items"}
      <ul className={[style.listGroup,appStyle.listGroup].join(" ")}>
          {items.map((items, index) => (
            <li  onClick={()=> {setSelectedIndex(index); OnselectItem(items);} } key={index} className={selectedIndex === index ?"list-group-item active" : "list-group-item" } >
              {items}
            </li>
          ))}
        </ul>

    </>
  );
}


export default ListGroup;

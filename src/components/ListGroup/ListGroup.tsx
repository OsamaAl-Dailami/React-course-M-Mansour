import { useState } from "react";
// import style from "./ListGroup.module.css";
// import appStyle from "../../App.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemPrpos{
  active:boolean;  
}

const ListItem = styled.li<ListItemPrpos>`
  padding: 5px 0;
  background-color: ${Props=>Props.active?'blue':'none'};
`;

interface ListGroupProps {
  heading: string;
  items: string[];
  OnselectItem: (item: string) => void;
}

function ListGroup({ heading, items, OnselectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1 className="mx-auto p-2">{heading}</h1>

      {items.length === 0 && "no found items"}
      <List>
        {items.map((items, index) => (
          <ListItem
            active={index===selectedIndex}
            key={index}

            onClick={() => {
              setSelectedIndex(index);
              OnselectItem(items);
            }}
          >
            {items}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;


import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";


function App() {
  const items = [
    "An item os",
    "A second item",
    "A third item",
    "A fourth item",
  ];

  const handel = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup  heading="OS List" items={items} OnselectItem={handel} />

        
      </div>
      <Button  onClick={()=>""}>This is my button1</Button>
    </>
  );
}

export default App;

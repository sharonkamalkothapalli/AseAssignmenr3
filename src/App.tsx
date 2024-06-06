import ListGroup from "./components/ListGroup";
// import { Fragment } from "react/jsx-runtime";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  const hadnleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={hadnleSelectItem}
      />
    </div>
  );
}

export default App;

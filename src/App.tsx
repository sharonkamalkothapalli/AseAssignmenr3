// import ListGroup from "./components/ListGroup";
// // import { Fragment } from "react/jsx-runtime";

// import Alert from "./components/Alert";

// function App() {
//   let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

//   const hadnleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={"Cities"}
//         onSelectItem={hadnleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       {/* <Alert children="Hello World" /> */}
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button></Button>
    </div>
  );
};

export default App;

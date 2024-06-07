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

import React, { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
};

export default App;

import ListGroup from "./components/ListGroup";

let name: string = "Aditya";
name = "";

function App() {
  let content;
  if (name) content = <h1>Hello! My name is {name}</h1>;
  else content = <h1>Hello there!</h1>;
  return (
    <div>
      {content}
      <ListGroup />
    </div>
  );
}

export default App;

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ChangingButton from "./components/Button";

function App() {
  let alertprops = {
    content: (
      <>
        Amber alert <h1>Serious</h1>
      </>
    ),
  };

  let cities = {
    items: ["Mumbai", "New York", "London", "Paris"],
    heading: "Cities",
  };

  return (
    <>
      <ListGroup items={cities.items} heading={cities.heading} />
      <Alert>{alertprops.content}</Alert>
      <ChangingButton />
    </>
  );
}

export default App;

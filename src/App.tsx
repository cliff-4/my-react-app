import ListGroup from "./components/ListGroup";

let name: string = "Aditya";
name = "";

function App() {
  let content;

  const onSelectItemHandler = (item: string) => {
    console.log(item);
  };

  let defaults = {
    items: ["First Item", "Bazinga", "Fourth Item"],
    heading: "Default Items",
  };

  let cities = {
    items: ["Mumbai", "New York", "London", "Paris"],
    heading: "Cities",
  };

  if (name) content = <h1>Hello! My name is {name}</h1>;
  else content = <h1>Hello there!</h1>;
  return (
    <div>
      {content}
      <ListGroup
        items={defaults.items}
        heading={defaults.heading}
        onSelectItem={onSelectItemHandler}
      />
      <ListGroup
        items={cities.items}
        heading={cities.heading}
        onSelectItem={onSelectItemHandler}
      />
    </div>
  );
}

export default App;

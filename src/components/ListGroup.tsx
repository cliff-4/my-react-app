let items: string[] = [
  "First Item",
  "Second Item",
  "Third Item",
  "Bazinga",
  "Fourth Item",
];

function ListGroup() {
  return (
    <>
      <ul className="list-group"></ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <p>end of discussion.</p>
    </>
  );
}

export default ListGroup;

import BookItem from "../BookItem/BookItem";

const items = [
  { name: "Vasya", author: "Petro" },
  { name: "Vasya1", author: "Petro1" },
  { name: "Vasya2", author: "Petro2" },
  { name: "Vasya3", author: "Petro3" },
  { name: "Vasya4", author: "Petro4" },
];

const Container = () => {
  return (
    <div>
      {items.map((book) => {
        return <BookItem name={book.name} author={book.author} />;
      })}
    </div>
  );
};

export default Container;

import css from "./BookItem.module.css";

const BookItem = (props) => {
  const { name, author } = props;

  return (
    <div className={css["bookItem"]}>
      <p>Title: {name}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BookItem;

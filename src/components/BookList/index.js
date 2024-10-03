import BookCard from "../BookCard";
import { BooksList, EmptyView, EmptyHead, EmptyDesc } from "./styledComponents";

const BookList = (props) => {
  const { books } = props;

  const renderBooksList = () => (
    <BooksList>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </BooksList>
  );

  const renderEmptyView = () => (
    <EmptyView>
      <EmptyHead>Empty</EmptyHead>
      <EmptyDesc>Save Books to display here</EmptyDesc>
    </EmptyView>
  );

  return <>{books.length > 0 ? renderBooksList() : renderEmptyView()}</>;
};

export default BookList;

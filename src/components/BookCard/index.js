import { BookCardTemplate, BookLink } from "./styledComponents";

const BookCard = (props) => {
  const { book } = props;
  const { id, title, author, description } = book;
  return (
    <BookLink to={`/books/${id}`}>
      <BookCardTemplate>
        <div>
          <h2>{title}</h2>
          <p>Author. {author}</p>
          <p>{description}</p>
        </div>
      </BookCardTemplate>
    </BookLink>
  );
};

export default BookCard;

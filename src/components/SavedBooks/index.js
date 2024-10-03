import BookCard from "../BookCard";
import Header from "../Header";
import BookList from "../BookList";
import BooksContext from "../../contexts/BooksContext";

import { BgContainer } from "./styledComponents";

const SavedBooks = () => (
  <BgContainer>
    <Header />
    <BooksContext.Consumer>
      {(value) => {
        const { booksSaved } = value;
        return <BookList books={booksSaved} />;
      }}
    </BooksContext.Consumer>
  </BgContainer>
);

export default SavedBooks;

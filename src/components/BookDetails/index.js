import { FaStar } from "react-icons/fa";
import BooksContext from "../../contexts/BooksContext";
import Header from "../Header";

import {
  BgContainer,
  BookDetailsCont,
  TitleAuthSec,
  DescriptionSec,
  HR,
  SaveButton,
  Title,
  Author,
  Params,
  BookDescription,
  Param,
  Ratings,
} from "./styledComponents";

const BookDetails = (props) => {
  return (
    <BgContainer>
      <Header />
      <BooksContext.Consumer>
        {(value) => {
          const { books, booksSaved, saveBook, deleteBook } = value;
          const { match } = props;
          const { params } = match;
          const { id } = params;
          const reqBooks = books.filter((book) => book.id === parseInt(id));
          const { title, author, genre, rating, description } = reqBooks[0];
          const saveStatus = booksSaved.includes(reqBooks[0]);
          const onSaveBook = () => {
            if (saveStatus) {
              deleteBook(reqBooks[0]);
            } else {
              saveBook(reqBooks[0]);
            }
          };
          return (
            <BookDetailsCont>
              <TitleAuthSec>
                <Title>{title}</Title>
                <Author>by {author}</Author>
              </TitleAuthSec>
              <HR />
              <DescriptionSec>
                <Params>
                  <Param>Genre : {genre}</Param>
                  <Ratings>
                    <FaStar size={30} color="#ffffff" />
                    <Param>{rating}</Param>
                  </Ratings>
                </Params>
                <BookDescription>{description}</BookDescription>
              </DescriptionSec>
              <SaveButton onClick={onSaveBook}>
                {saveStatus === true ? "Saved" : "Save"}
              </SaveButton>
            </BookDetailsCont>
          );
        }}
      </BooksContext.Consumer>
    </BgContainer>
  );
};

export default BookDetails;

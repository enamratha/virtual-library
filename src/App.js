import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import BookDetails from "./components/BookDetails";
import SavedBooks from "./components/SavedBooks";
import NotFound from "./components/NotFound";
import BooksContext from "./contexts/BooksContext";

const initialBooksList = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    rating: 4.7,
    description:
      "A novel set in the Jazz Age that explores themes of wealth, love, and theAmerican Dream.",
    publication_year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    description:
      "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publication_year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    description:
      "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    publication_year: 1949,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.9,
    description:
      "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
    publication_year: 1813,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    description:
      "A story about a young boy’s journey through the challenges of adolescence.",
    publication_year: 1951,
  },
];

class App extends Component {
  state = {
    savedBooks: [],
  };

  saveBook = (book) => {
    this.setState((prevState) => ({
      savedBooks: [...prevState.savedBooks, book],
    }));
  };

  deleteBook = (book) => {
    const { savedBooks } = this.state;
    const newBooksArray = savedBooks.filter(
      (savedBook) => savedBook.id !== book.id
    );
    this.setState({ savedBooks: newBooksArray });
  };

  render() {
    const { savedBooks } = this.state;
    return (
      <BooksContext.Provider
        value={{
          books: initialBooksList,
          booksSaved: savedBooks,
          saveBook: this.saveBook,
          deleteBook: this.deleteBook,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books/:id" component={BookDetails} />
          <Route exact path="/saved-books" component={SavedBooks} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </BooksContext.Provider>
    );
  }
}

export default App;

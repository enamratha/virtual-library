import { Component } from "react";

import BookList from "../BookList";
import Header from "../Header";

import {
  BgContainer,
  SearchInput,
  SearchContainer,
  SearchBtn,
  InputContainer,
  Select,
} from "./styledComponents";
import { IoSearch } from "react-icons/io5";

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

class Home extends Component {
  state = {
    books: initialBooksList,
    search: "",
    genre: "all",
  };

  selectGenre = (event) => {
    this.setState({ genre: event.target.value });
  };

  onChangeSearchInput = (event) => {
    this.setState({ search: event.target.value });
    this.onSearch();
  };

  onSearch = () => {
    const { search } = this.state;
    if (search !== "") {
      const filtered = initialBooksList.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      this.setState({ books: filtered });
    } else {
      this.setState({ books: initialBooksList });
    }
  };

  submitSearch = (event) => {
    event.preventDefault();
    this.onSearch();
  };

  renderBooks = () => {
    const { books, genre } = this.state;
    let filtered = [];

    if (genre === "all") {
      filtered = books;
    } else {
      filtered = books.filter((book) => {
        console.log(book.genre);
        return book.genre === genre;
      });
    }
    return <BookList books={filtered} />;
  };

  renderSearch = () => (
    <SearchContainer onSubmit={this.submitSearch}>
      <SearchInput
        onChange={this.onChangeSearchInput}
        type="search"
        placeholder="search here"
      />
      <SearchBtn type="submit">
        <IoSearch color="#ffffff" />
      </SearchBtn>
    </SearchContainer>
  );

  renderGenreSelect = () => {
    let options = ["all", "Fiction", "Classic", "Romance", "Dystopian"];
    return (
      <Select onChange={this.selectGenre}>
        {options.map((each) => (
          <option key={options.indexOf(each)}>{each}</option>
        ))}
      </Select>
    );
  };

  render() {
    return (
      <BgContainer>
        <Header />
        <InputContainer>
          {this.renderSearch()}
          {this.renderGenreSelect()}
        </InputContainer>
        {this.renderBooks()}
      </BgContainer>
    );
  }
}

export default Home;

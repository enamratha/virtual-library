import styled from "styled-components";

export const BgContainer = styled.div`
  background-image: url("https://img.freepik.com/premium-photo/abstract-black-watercolor-background-black-watercolor-texture-abstract-watercolor-hand-painted-background-old-digital-paper-vintage-textured-grunge-background_533856-2375.jpg?ga=GA1.1.48591340.1727965003&semt=ais_hybrid");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
export const SearchInput = styled.input`
  background-color: transparent;
  color: #ffffff;
  padding: 3px;
  border: 0;
  outline: none;
  width: 95%;
`;
export const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  border: 1px solid #ffffff;
  padding: 3px;
  border-radius: 3px;
  width: 40vw;
`;
export const SearchBtn = styled.button`
  background-color: transparent;
  border: 0;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Select = styled.select`
  background-color: transparent;
  border: 1px solid #ffffff;
  padding: 3px;
  border-radius: 3px;
  color: #ffffff;
  margin-top: 10px;
  margin-left: 10px;
  outline: none;
`;

import { useState, useRef } from "react";
import { LabelEl as SearchLabel } from "../../Atoms/_Label/LabelEl";
import { SearchBox, SearchInput, SearchBtn, SearchImg } from "./SearchBarStyle";
import search from "../../../assets/icons/search.png";

const SearchBar = () => {
  const searchRef = useRef(null);
  const [text, setText] = useState("");

  return (
    <SearchBox>
      <SearchLabel htmlFor="search_input"></SearchLabel>
      <SearchInput
        id="search_input"
        ref={searchRef}
        type="text"
        placeholder="상품을 검색해보세요!"
        onChange={(e) => setText(e.target.value)}
      />

      <SearchBtn>
        <SearchImg src={search} alt="검색" />
      </SearchBtn>
    </SearchBox>
  );
};

export default SearchBar;

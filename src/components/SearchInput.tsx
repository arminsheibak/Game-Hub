import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";


const SearchInput = () => {
  const setSearchText = useGameQueryStore( s => s.setSearchText )

  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (searchRef.current) setSearchText(searchRef.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={searchRef} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

import { Icon, Input, InputWrapper } from "./inputSearchStyled";

interface SearchInputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
function SearchInput({ searchValue, setSearchValue }: SearchInputProps) {
  return (
    <InputWrapper>
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="25px"
          width="25px"
        >
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#fff"
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          ></path>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="1.5"
            stroke="#fff"
            d="M22 22L20 20"
          ></path>
        </svg>
      </Icon>
      <Input
        placeholder="Buscar por título"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </InputWrapper>
  );
}

export default SearchInput;

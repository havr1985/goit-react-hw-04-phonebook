import { SearchInput, InputContainer } from "./SearchFilter.styled";

export const SearchFilter = ({ filter:{filter}, onChangeFilter }) => {
    return (
        <InputContainer>
        <SearchInput type="text"
            value={filter}
            onChange={evt => onChangeFilter(filter = evt.target.value)}
                placeholder="Search by name" />
        </InputContainer>
    )

}
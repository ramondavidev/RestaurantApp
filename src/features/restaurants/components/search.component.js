import { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        mode="view"
        elevation="5"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;

import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';

import { RestaurantList } from '../../restaurants/components/restaurant-list.styles';
import RestaurantInfoCard from '../../restaurants/components/restaurant-info-card.component';

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Restaurant', {
                restaurant: item,
              })
            }
          >
            <RestaurantInfoCard restaurant={item} key={item.name} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

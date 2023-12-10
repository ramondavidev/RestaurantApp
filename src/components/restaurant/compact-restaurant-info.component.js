import React from 'react';
import styled from 'styled-components/native';

import { Text } from '../typography/text.component';
import { Card } from 'react-native-paper';

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
  margin-right: 8px;
`;

const Image = styled(Card.Cover)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

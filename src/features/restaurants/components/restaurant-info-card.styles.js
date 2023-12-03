import { Card, Text } from 'react-native-paper';
import styled from 'styled-components';

export const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space.md};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.sm};
  background-color: white;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space.md};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 8px;
`;

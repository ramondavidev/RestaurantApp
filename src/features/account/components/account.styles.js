import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import { Text } from '../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space.md};
  margin-top: ${(props) => props.theme.space.sm};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  margin-top: ${(props) => props.marginTop};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Title = styled(Text)`
  font-size: 30px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space.sm};
  margin-bottom: ${(props) => props.theme.space.sm};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 40px;
  padding: ${(props) => props.theme.space.sm};
`;

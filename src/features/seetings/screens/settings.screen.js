import React, { useContext } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

import { List, Avatar } from 'react-native-paper';

import { SafeArea } from '../../../components/utility/safe-area.component';

import { Text } from '../../../components/typography/text.component';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.sm};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 15px;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Avatar.Icon
            size={80}
            icon="human"
            backgroundColor="#2182BD"
            style={{ marginTop: '15px' }}
          />
        </TouchableOpacity>
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

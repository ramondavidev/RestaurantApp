import { useContext } from 'react';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { SafeArea } from '../../components/utility/safe-area.component';
import { Text, Button } from 'react-native';

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

export default Settings;

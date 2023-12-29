import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SettingsScreen } from '../../features/seetings/screens/settings.screen';
import { FavouritesScreen } from '../../features/seetings/screens/favourites.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};

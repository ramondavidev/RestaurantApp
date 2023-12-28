import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurants/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="screen"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        options={{ headerShown: false }}
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

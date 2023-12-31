import LottieView from 'lottie-react-native';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../assets/watermelon.json')}
        />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate('Register')}
          marginTop="10px"
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

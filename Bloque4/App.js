import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation';
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}


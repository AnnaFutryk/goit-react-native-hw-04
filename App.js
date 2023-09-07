import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Button, StyleSheet, View } from "react-native";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { CreatePostsScreen } from "./src/Screens/CreatePostsScreen";
import { SvgBack, SvgLogOut } from "./src/images/Svg";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator style={styles.container} initialRouteName="Login">
        {/* <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
        /> */}
        {/* <MainStack.Screen name="Post" component={PostsScreen} /> */}
        <MainStack.Screen
          name="Створити публікацію"
          component={CreatePostsScreen}
          style={styles.container}
          options={{
            headerTitleStyle: {
              fontSize: 17,
              lineHeight: 22,
              textAlign: "center",
              fontFamily: "Roboto-Medium",
              paddingBottom: 11,
              paddingTop: 11,
            },
            headerStyle: {
              borderBottomColor: "rgba(0, 0, 0, 0.3)",
              borderBottomWidth: 1,
              height: 88,
            },
            headerLeft: () => <SvgBack style={styles.svgBack} />,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 32,
  },
  svgBack: {
    position: "absolute",
    top: 10,
    height: 24,
    width: 24,
    left: 16,
  },
});

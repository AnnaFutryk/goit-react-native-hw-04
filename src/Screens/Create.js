import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Create = () => {
  const handlePress = () => {
    console.log("Клик по TouchableOpacity");
    // Дополнительный код, который вы хотите выполнить при клике
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.wrapper}>
      <TouchableOpacity style={styles.btn} onPress={handlePress}>
        <Text>hello</Text>
      </TouchableOpacity>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, position: "relative", bottom: 10 },
  btn: {
    position: "absolute",
    top: 60,
    width: 150,
    height: 50,
    backgroundColor: "tomato", // Исправлено свойство color на backgroundColor
  },
});

import { Text, View } from "react-native";
import { Redirect } from "expo-router";

// useEffect to check is the user has already loged in, if not open login else open tabs.

export default function Index() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Edit app/index.tsx to edit this screen.</Text>
    // </View>

    <Redirect href="/login" />
  );
}

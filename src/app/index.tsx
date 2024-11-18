import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color:'blue'}}>Profile</Link>
    </View>
  );
}

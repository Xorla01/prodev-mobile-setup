import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text>Entry Screen - Awesome</Text>
      </View>

      <View>
          <Text style={styles.largeText}>TypeScript is great if you practice more</Text>
          <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
          <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90caf9",
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 30,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 30,
    color: "#2196f3",
    fontWeight: "500",
    textAlign: "center",
  },
});

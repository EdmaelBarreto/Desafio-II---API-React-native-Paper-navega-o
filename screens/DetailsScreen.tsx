import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: Props) {
  const { name, image } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text variant="headlineMedium" style={styles.name}>
          {name}
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: {
    padding: 20,
    alignItems: "center",
  },
  image: { width: 180, height: 180, marginBottom: 20 },
  name: { textTransform: "capitalize" },
});

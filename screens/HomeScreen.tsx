import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

type Pokemon = {
  name: string;
  url: string;
};

export default function HomeScreen({ navigation }: Props) {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const json = await response.json();
      setData(json.results);
    } catch {
      console.log("Erro ao carregar dados");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const getPokemonImage = (url: string) => {
    const id = url.split("/")[url.split("/").length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            const image = getPokemonImage(item.url);

            return (
              <Card
                style={styles.card}
                onPress={() =>
                  navigation.navigate("Details", { name: item.name, image })
                }
              >
                <View style={styles.row}>
                  <Image source={{ uri: image }} style={styles.image} />
                  <Text variant="titleMedium" style={styles.name}>
                    {item.name}
                  </Text>
                </View>
              </Card>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginVertical: 6,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  name: {
    textTransform: "capitalize",
  },
});

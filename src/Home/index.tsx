import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { IProduct } from "../store/features/addSlice";
import ItemList from "../components/ItemList/index";
import { useNavigation } from "@react-navigation/native";

export const dataPriceProducts = [
  {
    id: "1",
    name: "Coca-cola",
    price: 19.9,
    quatity:1
  },
  {
    id: "2",
    name: "Chocolate",
    price: 6.5,
    quatity:1
  },
  {
    id: "3",
    name: "Queijo",
    price: 15,
    quatity:1
  },
  {
    id: "4",
    name: "Batata frita",
    price: 23.9,
    quatity:1
  },
  {
    id: "5",
    name: "Guarana lata",
    price: 6.0,
    quatity:1
  },
]

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>(dataPriceProducts);

  const navigation = useNavigation()

  useEffect(()=>{console.log('mudou')},[products])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de produtos</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart' as never)}>
          <Icon name="shopping-cart" size={32} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{ marginTop: 16 }}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemList data={item}/>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 24,
  },
});

export default Home;

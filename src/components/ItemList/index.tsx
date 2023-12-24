import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IProduct, increment } from "../../store/features/addSlice";
import { useDispatch } from "react-redux";

interface IPropsItemList {
  data: IProduct;
}

const ItemList: React.FC<IPropsItemList> = ({ data }) => {

  const dispacth = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleProduct}>{data.name}</Text>
        <Text>R$ {data.price}</Text>
      </View>
      <TouchableOpacity onPress={()=>dispacth(increment(data))} style={styles.button}>
        <Text  >+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#e4e4e4",
    padding: 6,
    marginBottom: 10,
  },
  titleProduct: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#14b6f8",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});
export default ItemList;

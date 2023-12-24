import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import ItemListCart from '../components/itemListCart';
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Card = () => {
  const products = useSelector((state: RootState)=>state.addReducer)

  const [valueProducts, setValueProducts] = useState(0)

  useEffect(() => {
    function somaValueStore() {
      let totalValue = 0;
      products.forEach((item) => {
        totalValue += item.price;
      });
      setValueProducts(totalValue);
    }

    somaValueStore();
  }, [products]); 

console.log(products)
    return <SafeAreaView>
      <FlatList 
      data={products}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <ItemListCart data={item} />} />
      <Text style={{marginLeft:10, color:'black', fontWeight:'bold', fontSize:18}}>Total: R$ {valueProducts !== 0 ? valueProducts.toFixed(2) : '00.00'} </Text>
    </SafeAreaView>
}


export default Card
import React, { useState } from "react";
import { Text, View } from "react-native";
import { IProduct, decrement, increment} from "../../store/features/addSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";


interface itemListProps {
    data: IProduct
}

const ItemListCart:React.FC<itemListProps> = ({data}) => {

    const dispatch = useDispatch()

    return (
        <View style={{borderWidth:1, borderColor: '#e1e1e1', padding:12, marginHorizontal: 12, marginVertical:12}}>
            <View>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>{data.name}</Text>
                <Text style={{color:'black'}}>R$ {data.price.toFixed(2)}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', width:'30%', marginTop:5}}>
                <TouchableOpacity onPress={()=>{dispatch(decrement(data));}} style={{paddingHorizontal:8, paddingVertical:4, backgroundColor: '#14b6f8', marginRight:4}}><Text style={{color:'white', fontWeight: 'bold'}}>-</Text></TouchableOpacity>
                    <Text>{data.quatity}</Text>
                <TouchableOpacity onPress={()=>{dispatch(increment(data));}} style={{paddingHorizontal:8, paddingVertical:4, backgroundColor: '#14b6f8', marginLeft:4}}><Text style={{color:'white', fontWeight: 'bold'}}>+</Text></TouchableOpacity>
            </View>
            
        </View>
    )
}

export default ItemListCart;
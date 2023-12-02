import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons"; 
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../store/productSlice";

const ProductsScreen = ({navigation}) => {
  // const navigation = useNavigation();

  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
          onPress={() => {
            //update selected product
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')
          } }
          
          style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default ProductsScreen;

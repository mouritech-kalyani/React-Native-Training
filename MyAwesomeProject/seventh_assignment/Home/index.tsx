import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {productDetails} from '../ProductDetails/product';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  currentWishlist,
  selectWishlistInfo,
} from '../redux/slice/wishlistslice';
import {
  useWishlistDispatch,
  useWishlistSelector,
} from '../redux/hooks/wishlisthooks';

const HomeSeven = ({navigation}) => {
  const [productData, setProductData] = useState(productDetails);
  const wishlistInfo = useWishlistSelector(selectWishlistInfo);
  const [selectedItem, setSelectedItem] = useState([]);

  const dispatch = useWishlistDispatch();
  dispatch(currentWishlist({wishlistInfo: selectedItem}));
  console.log(selectedItem);
  console.log('wishlist info issssssss ', wishlistInfo);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {wishlistInfo?.length <= 0 ? (
            null
          ) : <Button
          title="Go to Wishlist"
          onPress={() => {
            navigation.navigate('Wishlist');
          }}
        />}
          <FlatList
            numColumns={2}
            data={productData}
            renderItem={({item}) => (
              <View style={style.grids}>
                <View style={style.card}>
                  <Image source={{uri: item.image}} style={{height: 200}} />
                  <View style={style.review}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      ₹ {item.price}
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      <Icon name="star" color="orange" size={20} />{' '}
                      {item.rating.rate}
                    </Text>
                  </View>
                  <Text>{item.title}</Text>
                  <Pressable
                    onPress={() => {
                      var id = item.id;
                      var title = item.title;
                      var rating = item.rating.rate;
                      var price = item.price;
                      var img = item.image;

                      console.log('clickedddd', id, title, rating, price, img);
                      const newData = productDetails.filter(
                        items => items.id !== id,
                      );
                      setProductData(newData);
                      const updatedData = {
                        title: title,
                        id: id,
                        rating: rating,
                        price: price,
                        image: img,
                      };
                      // selectedItem.map((a)=>{
                      //   selectedItem.push({"title":a.title});
                      //   selectedItem.push({"id":a.id});
                      //   selectedItem.push({"image":a.img});
                      //   selectedItem.push({"rating":a.rating});
                      //   selectedItem.push({"price":a.price});

                      // })
                      setSelectedItem([...selectedItem, updatedData]);
                    }}>
                    <View style={style.addToCart}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#F08080',
                          fontSize: 15,
                        }}>
                        <Icon name="heart" size={20} color="#DC143C" /> Add to
                        Wishlist
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeSeven;

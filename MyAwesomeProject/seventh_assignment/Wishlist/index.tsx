import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, Image, ScrollView, Pressable} from 'react-native';
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

const Wishlist = () => {
  const wishlistInfo = useWishlistSelector(selectWishlistInfo);
  console.log('wishlist info on wish ', wishlistInfo);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatList
            numColumns={2}
            data={wishlistInfo}
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

export default Wishlist;

import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import { useAppDispatch,useAppSelector } from '../../../seventh_assignment/redux/hooks';
import {callAllProduct, selectAllProductsInfo} from './slice';

const AllProducts = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {isLoading, allProductResponse, allProductResponseError} =
    useAppSelector(selectAllProductsInfo);
  console.log('all dataa ====', allProductResponse?.productList);
  useEffect(() => {
    dispatch(callAllProduct());
  }, [dispatch]);
  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={{marginTop: 200}}>
          <ActivityIndicator size="large" />
        </View>
      ) : allProductResponse !== undefined ? (
        <ScrollView>
          <View>
            <FlatList
              numColumns={2}
              data={allProductResponse?.productList}
              renderItem={({item}) => (
                <View style={style.grids}>
                  <View style={style.card}>
                    <Pressable
                      onPress={() => {
                        console.log('clicked', item.id);
                        navigation.navigate('Product', {id: item.id});
                      }}>
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
                    </Pressable>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>Error ! Please Try again</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AllProducts;

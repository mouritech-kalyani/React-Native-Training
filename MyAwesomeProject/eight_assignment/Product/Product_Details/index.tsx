import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import {callProduct, selectProductsInfo} from './slice';
import { useAppDispatch,useAppSelector } from '../../../seventh_assignment/redux/hooks';

const Productdetail = ({route, navigation}) => {
  const offset = useRef(new Animated.Value(0)).current;
  const dispatch = useAppDispatch();
  const {isLoading, productResponse, productResponseError} =
    useAppSelector(selectProductsInfo);

  useEffect(() => {
    const {id} = route.params;
    dispatch(callProduct({id: id}));
    console.log('on one product ====', productResponse?.productData);
    console.log('imgg', productResponse?.productData.image);
  }, [dispatch]);
  return (
    <SafeAreaView>
      {isLoading ? (
        <View style={{marginTop: 200}}>
          <ActivityIndicator size="large" />
        </View>
      ) : productResponse !== undefined ? (
        <>
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
            }}
          />
          <ScrollView
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: offset}}}],
              {useNativeDriver: false},
            )}>
            <View>
              <View style={style.card}>
                <View>
                  <Image
                    source={{uri: productResponse?.productData.image}}
                    style={{height: 400}}
                  />
                </View>
                <View>
                  <View style={style.review}>
                    <Text style={style.price}>
                      ₹ {productResponse?.productData.price}
                    </Text>
                    <Text style={style.rating}>
                      <Icon name="star" color="orange" size={20} />{' '}
                      {productResponse?.productData.rating.rate}
                    </Text>
                  </View>
                  <Text style={style.title}>
                    {productResponse?.productData.title}
                  </Text>
                  <Text style={style.description}>
                    {productResponse?.productData.description}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <View>
          <Text>Error ! Please Try again</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Productdetail;

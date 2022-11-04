import React from 'react';
import {
  View,
  SafeAreaView,
  ImageSourcePropType,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { StyleSheet } from 'react-native';
import { useAppSelector } from '../redux/hooks';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/1.jpg'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/2.jpg'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/3.jpg'),
  },
];

const width = Dimensions.get('window').width;

export const SlideScreen = () => {
  const {
    theme: { colors },
    currentTheme,
  } = useAppSelector(state => state.theme);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image source={item.img} style={{ width: 350, height: 400 }} />
        <Text style={{ ...styles.tile, color: colors.primary }}>
          {item.title}
        </Text>
        <Text style={{ ...styles.subtitle, color: colors.text }}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <Carousel
        width={width}
        autoPlay={false}
        data={items}
        scrollAnimationDuration={5000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({ item }) => renderItem(item)}
        pagingEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tile: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
});

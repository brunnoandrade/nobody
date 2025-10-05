import React from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

import { data } from './data';

const Slider = () => {
  const posterHeight = (Dimensions.get('window').height * 70) / 100;

  return (
    <Swiper
      autoplay
      loop
      renderPagination={(index, total) => (
        <View
          style={{
            position: 'absolute',
            left: 24,
            right: 24,
            bottom: 30,
          }}
        >
          <Text
            className="text-white font-bold text-3xl leading-10"
            numberOfLines={3}
          >
            {data[index]?.text}
          </Text>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            {Array.from({ length: total }).map((_, i) => (
              <View
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  marginRight: 6,
                  backgroundColor:
                    i === index ? '#8B5CF6' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </View>
        </View>
      )}
    >
      {data.map(({ img }, idx) => (
        <View key={idx}>
          <ImageBackground
            source={{ uri: img }}
            style={{ width: '100%', height: posterHeight }}
          >
            <LinearGradient
              colors={[
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.0)',
                '#181A22',
              ]}
              locations={[0, 0, 0, 0.9]}
              style={{ flex: 1 }}
            />
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};

export default Slider;

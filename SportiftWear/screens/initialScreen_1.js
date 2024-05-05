import { StyleSheet, View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default InitialScreen_1 = () => {
  return (
    <View style={styles.default}>
      <Image
        style={styles.InitialScreen_1}
        source={require('../assets/Initial2.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InitialScreen_1: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  default: {
    flex: 1,
  },
});

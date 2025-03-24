import React from 'react';
import { View, Text, Image, ScrollView, TextInput, SafeAreaView } from 'react-native';

const FirstPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to React Native</Text>

        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Image 
            source={require('../assets/images/7.jpg')}  
            style={{ width: 200, height: 200 }}
          />
        </View>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
            paddingHorizontal: 10,
          }}
          defaultValue='Type Here'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;

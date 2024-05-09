import React, { useState } from 'react';
import { Alert, Button, Image, Text, TextInput, View, ToastAndroid,} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const checkPalindrome = () => {
    const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
      
      ToastAndroid.show('This is a Palindrome!', ToastAndroid.SHORT);
      Alert.alert('Palindrome!', 'This is a palindrome.', [{ text: 'OK' }]);
    } else {
      ToastAndroid.show('This is Not a Palindrome.', ToastAndroid.SHORT);
      Alert.alert('Not a Palindrome!', 'This is not a palindrome.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CEK TEXT PALINDROME</Text>
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.421c4923d6b087d51dcd987399c3313f?rik=ODcPl5AePWUlZw&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2016%2f08%2f24%2fcolorful-background-hd-1024x576.jpg&ehk=obrJXwJZtssT9yy1lBrfp%2fgO7kjYVwln0oeLPPUFRlc%3d&risl=&pid=ImgRaw&r=0'
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Palindrome Validate</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="Masukin Teks"
        value={text}
        onChangeText={setText}
      />
      <Button title="Validate" onPress={checkPalindrome} />
    </View>
  );
}
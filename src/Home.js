import React, { useState } from "react";

import { NativeBaseProvider, Text, Box, Input, Stack, Button, VStack } from "native-base";
import firestore  from '@react-native-firebase/firestore'
export default function Home() {
  const [formData, setFormData] = useState({ League: "", Home: "", Away: "", Score: "", Odd: "" });
  const handleSubmit=()=>{
    firestore()
      .collection('Matches')
      .add({
      formData
      })
      .then(() => {
      console.log('added')
    })
  }
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Stack space={4}>
          <Input mx="3" size={22} placeholder="League" w="80%"
            onChangeText={text => setFormData({...formData, League : text})}
          />
          <Input mx="3" size={22} placeholder="Home Team" w="80%"
             onChangeText={text => setFormData({...formData, Home : text})}
          />
            <Input mx="3" size={22} placeholder="Away Team" w="80%"
            onChangeText={text => setFormData({...formData, Away : text})}  
          />
          <Input mx="3" size={22} placeholder="Score" w="80%"
            onChangeText={text => setFormData({...formData, Score : text})}
          />
          <Input mx="3" size={22} placeholder="Total Odd" w="80%"
            onChangeText={text => setFormData({...formData, Odd : text})}
          />

          <Button                
            size="lg"
            onPress={handleSubmit}
          >Save</Button>
        </Stack>
      </Box>
    </NativeBaseProvider>
  );
}

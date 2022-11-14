import { Box, FlatList, NativeBaseProvider, Text } from 'native-base'
import React, { useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { ActivityIndicator } from 'react-native';
export default function Matches() {
    const [users, setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    
    
        useEffect(() => {
            firestore()
                .collection('Matches')
                .where('Odd', '>=',1 )
                .limit(4)
                .get()
                .then(games => {
                console.log(games)
            })
        }, []);
    
        //useEffect(() => {
        //    todoRef.onSnapshot(
        //        querySnapshot => {
        //            const users = []
        //            querySnapshot.forEach((doc) => {
        //                const { home,away} = doc.data()
        //                users.push({
        //                    id: doc.id,home,away
        //                })
        //            })
        //            setUsers(users);
        //       }
        //   )
        //},[])
  
  return (
      <NativeBaseProvider>
          {/*<Text>
              

          {isLoading ?
             <ActivityIndicator size={22} /> 
             :
              <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                  <Box>
                          <Text>{item.home}</Text>
                      </Box>
                  )}
                  />
                }
                </Text>*/}
     </NativeBaseProvider>
  )
}

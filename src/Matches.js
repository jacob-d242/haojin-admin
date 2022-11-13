import { NativeBaseProvider, Text } from 'native-base'
import React from 'react'

export default function Matches() {
  return (
      <NativeBaseProvider>
          <Text>
              Matches
          </Text>
     </NativeBaseProvider>
  )
}

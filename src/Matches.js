import { NativeBaseProvider, Text } from 'native-base'
import React, { useState} from 'react'

export default function Matches() {
    const [matches,setMatches] = useState()
  return (
      <NativeBaseProvider>
          <Text>
              Matches
          </Text>
     </NativeBaseProvider>
  )
}

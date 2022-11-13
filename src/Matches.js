import { NativeBaseProvider, Text } from 'native-base'
import React, { useSatate} from 'react'

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

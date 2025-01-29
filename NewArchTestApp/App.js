import { registerRootComponent } from 'expo';
import React from 'react';
import { NativeBaseProvider, Box, Input } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Input 
          placeholder="Enter text here" 
          w="75%" 
          bg="gray.200" 
          p={2} 
          borderRadius="md"
        />
      </Box>
    </NativeBaseProvider>
  );
}

registerRootComponent(App);

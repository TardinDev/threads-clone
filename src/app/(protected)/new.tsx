import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function New() {

  const [text, setText] = useState('');

  return (
    <SafeAreaView edges={['bottom']} className=' flex-1 p-4'>
      <KeyboardAvoidingView 
         className='flex-1' 
         behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
         keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}>
      <Text className='text-white text-lg font-bold'>userName</Text>

      <TextInput
         value={text}
         onChangeText={setText}
         placeholder='what is on your mind ? '
         placeholderTextColor={'#888'}
         className='text-white text-lg'
         multiline
         numberOfLines={4}/>


         <View className='mt-auto'>
          <Pressable onPress={() => console.log('Post:')} 
                     className='bg-white p-3 px-6 self-end rounded-full mt-4'>
             <Text className='text-black font-bold'>Post</Text>
          </Pressable>
         </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
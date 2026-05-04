import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0B]">
      <View className="flex-1 justify-center items-center p-8">
        <BlurView intensity={40} className="w-full p-8 rounded-2xl bg-white/10 border border-white/20">
          <Text className="text-white text-2xl text-center mb-4">Welcome to Crest</Text>
          <Text className="text-white/80 text-center mb-8">
            A private, non-judgmental harm reduction sanctuary.
          </Text>
          <TouchableOpacity
            className="bg-[#35D07F] p-4 rounded-lg"
            onPress={() => router.replace('/')}
          >
            <Text className="text-white text-center text-lg">Get Started</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </SafeAreaView>
  );
}
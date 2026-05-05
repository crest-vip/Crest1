import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubstanceLoggingComponent } from '../src/features/logging/SubstanceLoggingComponent';
import { useCrisis } from '../src/features/crisis/CrisisProvider';

export default function HomeScreen() {
  const { triggerCrisis } = useCrisis();
  const [tapCount, setTapCount] = useState(0);

  const handleBackgroundPress = () => {
    setTapCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        triggerCrisis();
        return 0;
      }
      setTimeout(() => setTapCount(0), 2000); // Reset after 2s
      return newCount;
    });
  };

  return (
    <TouchableOpacity
      className="flex-1 bg-obsidian"
      activeOpacity={1}
      onPress={handleBackgroundPress}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center items-center p-6">
          <Text className="text-white text-2xl font-bold mb-6 text-center">Welcome to Crest App</Text>
          <SubstanceLoggingComponent />
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
}
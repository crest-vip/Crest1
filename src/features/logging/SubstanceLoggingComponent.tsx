import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { useShieldedLog } from './useShieldedLog';

export const SubstanceLoggingComponent: React.FC = () => {
  const [substance, setSubstance] = useState('');
  const [dosage, setDosage] = useState('');
  const { saveLog, loading } = useShieldedLog();
  const [hash, setHash] = useState('');

  useEffect(() => {
    const generateHash = async () => {
      if (substance && dosage) {
        const timestamp = new Date().toISOString();
        const data = `${substance}${dosage}${timestamp}`;
        const hashValue = await import('expo-crypto').then(Crypto =>
          Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, data)
        );
        setHash(hashValue);
      } else {
        setHash('');
      }
    };
    generateHash();
  }, [substance, dosage]);

  const handleSave = async () => {
    if (!substance || !dosage) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    const timestamp = new Date().toISOString();
    await saveLog({ substance, dosage, timestamp });
    Alert.alert('Success', 'Log saved securely');
    setSubstance('');
    setDosage('');
  };

  return (
    <BlurView intensity={80} tint="dark" className="p-6 m-4 rounded-2xl border border-liquid-glass shadow-lg shadow-safe-glow/20">
      <Text className="text-white text-xl font-semibold mb-6 text-center">Log Substance</Text>
      <TextInput
        className="bg-liquid-glass text-white p-4 rounded-xl mb-4 border border-white/20 placeholder:text-white/60"
        placeholder="Substance"
        placeholderTextColor="#ffffff60"
        value={substance}
        onChangeText={setSubstance}
      />
      <TextInput
        className="bg-liquid-glass text-white p-4 rounded-xl mb-4 border border-white/20 placeholder:text-white/60"
        placeholder="Dosage"
        placeholderTextColor="#ffffff60"
        value={dosage}
        onChangeText={setDosage}
      />
      {hash && (
        <Text className="text-safe-glow text-sm mb-4 text-center">Receipt of Truth: {hash.slice(0, 16)}...</Text>
      )}
      <TouchableOpacity
        className="bg-safe-glow p-4 rounded-xl shadow-lg shadow-safe-glow/50 active:scale-95"
        onPress={handleSave}
        disabled={loading}
      >
        <Text className="text-white text-center font-bold text-lg">{loading ? 'Saving...' : 'Save Log'}</Text>
      </TouchableOpacity>
    </BlurView>
  );
};
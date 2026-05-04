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
    <BlurView intensity={40} className="p-4 m-4 rounded-lg bg-white/10">
      <Text className="text-white text-lg mb-4">Log Substance</Text>
      <TextInput
        className="bg-white/20 text-white p-2 rounded mb-2"
        placeholder="Substance"
        placeholderTextColor="#ccc"
        value={substance}
        onChangeText={setSubstance}
      />
      <TextInput
        className="bg-white/20 text-white p-2 rounded mb-2"
        placeholder="Dosage"
        placeholderTextColor="#ccc"
        value={dosage}
        onChangeText={setDosage}
      />
      {hash && (
        <Text className="text-green-400 text-sm mb-2">Receipt of Truth: {hash.slice(0, 16)}...</Text>
      )}
      <TouchableOpacity
        className="bg-[#35D07F] p-3 rounded"
        onPress={handleSave}
        disabled={loading}
      >
        <Text className="text-white text-center">{loading ? 'Saving...' : 'Save Log'}</Text>
      </TouchableOpacity>
    </BlurView>
  );
};
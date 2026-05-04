import { useState } from 'react';
import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';
// import { useSQLiteContext } from 'expo-sqlite';

interface LogEntry {
  substance: string;
  dosage: string;
  timestamp: string;
}

export const useShieldedLog = () => {
  // const db = useSQLiteContext();
  const [loading, setLoading] = useState(false);

  const saveLog = async (entry: LogEntry) => {
    setLoading(true);
    try {
      const salt = await SecureStore.getItemAsync('salt') || await generateSalt();
      const data = `${entry.substance}${entry.dosage}${entry.timestamp}${salt}`;
      const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, data);

      // TODO: Save to SQLite
      console.log('Receipt of Truth:', hash);
      console.log('Obfuscated substance:', obfuscate(entry.substance));
      console.log('Obfuscated dosage:', obfuscate(entry.dosage));
      console.log('Timestamp:', entry.timestamp);
    } catch (error) {
      console.error('Failed to save log:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSalt = async () => {
    const salt = await Crypto.getRandomBytesAsync(16);
    const saltString = salt.reduce((acc, byte) => acc + byte.toString(16).padStart(2, '0'), '');
    await SecureStore.setItemAsync('salt', saltString);
    return saltString;
  };

  const obfuscate = (str: string) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

  return { saveLog, loading };
};
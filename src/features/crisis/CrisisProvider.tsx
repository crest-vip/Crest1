import React, { createContext, useContext } from 'react';
import * as SMS from 'expo-sms';
// import * as Location from 'expo-location';

interface CrisisContextType {
  triggerCrisis: () => Promise<void>;
}

const CrisisContext = createContext<CrisisContextType | undefined>(undefined);

export const CrisisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const triggerCrisis = async () => {
    try {
      // const { status } = await Location.requestForegroundPermissionsAsync();
      // if (status !== 'granted') return;

      // const location = await Location.getCurrentPositionAsync({});
      const message = `Crisis alert from Crest App. Location: unknown`; // ${location.coords.latitude}, ${location.coords.longitude}`;

      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        await SMS.sendSMSAsync(['+1234567890'], message); // Replace with local sponsor number
      }
    } catch (error) {
      console.error('Crisis trigger failed:', error);
    }
  };

  return (
    <CrisisContext.Provider value={{ triggerCrisis }}>
      {children}
    </CrisisContext.Provider>
  );
};

export const useCrisis = () => {
  const context = useContext(CrisisContext);
  if (!context) throw new Error('useCrisis must be used within CrisisProvider');
  return context;
};
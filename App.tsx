import { StatusBar } from 'expo-status-bar';
import { SQLiteProvider } from 'expo-sqlite';
import { ThemeProvider } from './src/shared/ui/ThemeProvider';
import { AuthProvider } from './src/entities/auth/AuthProvider';
import { CrisisProvider } from './src/features/crisis/CrisisProvider';
import { Slot } from 'expo-router';

export default function App() {
  return (
    <SQLiteProvider databaseName="crest.db">
      <ThemeProvider>
        <AuthProvider>
          <CrisisProvider>
            <Slot />
            <StatusBar style="auto" />
          </CrisisProvider>
        </AuthProvider>
      </ThemeProvider>
    </SQLiteProvider>
  );
}
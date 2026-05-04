import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/shared/ui/ThemeProvider';
import { AuthProvider } from './src/entities/auth/AuthProvider';
import { CrisisProvider } from './src/features/crisis/CrisisProvider';
import { Slot } from 'expo-router';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CrisisProvider>
          <Slot />
          <StatusBar style="auto" />
        </CrisisProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
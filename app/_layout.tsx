import { Stack } from "expo-router";
import { CrisisProvider } from "../src/features/crisis/CrisisProvider";
import "../global.css";

export default function RootLayout() {
  return (
    <CrisisProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </CrisisProvider>
  );
}

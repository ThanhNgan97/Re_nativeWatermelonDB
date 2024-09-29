import { Redirect, Slot } from 'expo-router';
import AuthProvider, { useAuth } from '../providers.tsx/AnthProvider';

const RootLayout = () => {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
};

export default RootLayout;
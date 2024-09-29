import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../providers.tsx/AnthProvider';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href={'/'} />;
  }

  return <Stack />;
};

export default AuthLayout;
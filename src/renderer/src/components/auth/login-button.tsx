import { Button } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton(): JSX.Element | null {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || isAuthenticated) {
    return null;
  }

  return (
    <Button onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
}

export default LoginButton;

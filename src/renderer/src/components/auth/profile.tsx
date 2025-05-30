import { Avatar, Box, Text } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile(): JSX.Element | null {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated || !user) {
    return null;
  }

  return (
    <Box display="flex" alignItems="center" gap={2} color="white">
      <Avatar src={user.picture} name={user.name} size="sm" />
      <Text>{user.name}</Text>
    </Box>
  );
}

export default Profile;

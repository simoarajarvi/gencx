import { HStack, Text, Button } from "@chakra-ui/react";

const NavBar = () => {
 
  return( 
  <HStack justifyContent={'space-between'} padding={'10px'}>
  <Text fontSize='3xl'>GenCX Dev</Text>
  <Button colorScheme='gray' variant='ghost'>
    Configuration
  </Button>
  </HStack>
  );
}

export default NavBar;
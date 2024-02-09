import { HStack, Text, Button } from "@chakra-ui/react";


const NavBar = () => {


 
  return( 
  <HStack justifyContent={'space-between'}>
  <Text fontSize='3xl'>GenCX Dev Utils</Text>
    
  <Button colorScheme='gray' variant='ghost' >
    Configuration
  </Button>
  
  </HStack>
  );
}

export default NavBar;
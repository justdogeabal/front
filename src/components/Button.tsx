import { Button as ChakraButton } from '@chakra-ui/react';

const Button = ({ children }: { children: string }) => (
  <ChakraButton>{children}</ChakraButton>
);

export default Button;

import { ReactNode } from 'react';
import { HeaderText } from './styles';

interface HeadingTextProps {
  children: ReactNode;
}

const HeadingText = ({ children }: HeadingTextProps) => {
  return <HeaderText>{children}</HeaderText>;
};

export default HeadingText;

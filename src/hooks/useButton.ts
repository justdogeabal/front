import { useState } from 'react';

const useButton = () => {

  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const handlePress = () => {
    setIsPressed(true);
  };

  const handleRelease = () => {
    setIsPressed(false);
  };


  const handleMouseEnter = () => {
    setIsHovered(true);
  };


  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const buttonProps = {
    onMouseDown: handlePress,
    onMouseUp: handleRelease,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };


  return {
    isPressed,
    isHovered,
    buttonProps,
  };
};

export default useButton;

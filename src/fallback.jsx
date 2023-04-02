import React from 'react';
import { styled } from '@mui/material/styles';

const FallbackContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const Spinner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  color: 'white',
  backgroundColor: 'purple',
  borderRadius: '50%',
  width: 100,
  height: 100,
  animation: 'spin 1s ease-in-out infinite',
  animationName: '$spin',
  [theme.breakpoints.up('md')]: {
    width: 200,
    height: 200,
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
      width: 100,
      height: 100,
    },
    '50%': {
      transform: 'rotate(180deg)',
      width: 200,
      height: 200,
    },
    '100%': {
      transform: 'rotate(360deg)',
      width: 100,
      height: 100,
    },
  },
}));

const LetterJ = styled('span')(({ theme }) => ({
  animation: 'colorChange 2s ease-in-out infinite',
  animationName: '$colorChange',
  fontSize: 50,
  fontWeight: 'bold',
  [theme.breakpoints.up('md')]: {
    fontSize: 100,
  },
  '@keyframes colorChange': {
    '0%': {
      color: 'white',
    },
    '25%': {
      color: 'red',
    },
    '50%': {
      color: 'yellow',
    },
    '75%': {
      color: 'blue',
    },
    '100%': {
      color: 'white',
    },
  },
}));

const FallbackPage = () => (
  <FallbackContainer>
    <Spinner>
      <LetterJ>J</LetterJ>
    </Spinner>
  </FallbackContainer>
);

export default FallbackPage;

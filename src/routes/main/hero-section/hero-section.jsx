//routes/main/hero-section/hero-section.jsx
import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { EmojiEmotions } from '@mui/icons-material';
import { Bounce } from 'react-reveal';

const HeroSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 64px)',
  backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    height: 'calc(100vh - 56px)',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
    marginBottom: '2rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1rem',
  textAlign: 'center',
  marginBottom: '1rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

const Hero = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  return (
    <HeroSection flex={5}>
      <Container maxWidth="md">
        <Bounce>
          <Title variant="h1">
            Welcome to JatBlog <EmojiEmotions sx={{ fontSize: isMobile ? '2rem' : '3rem', ml: isMobile ? '0.5rem' : '1rem' }} />
          </Title>
        </Bounce>
        <Bounce>
          <Subtitle variant="h2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices elit sit amet lacinia consequat.
          </Subtitle>
        </Bounce>
        <ButtonWrapper>
          <Bounce>
            <Button variant="contained" size="large" color="primary">
              Get Started
            </Button>
          </Bounce>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;

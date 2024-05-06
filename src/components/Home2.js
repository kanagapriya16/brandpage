import React from 'react';
import logo from "../assets/logo.png";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const RootContainer = styled('div')({
  background: 'linear-gradient(180deg, rgba(88,45,128,1) 0%, rgba(29,202,221,1) 60%, rgba(27,206,223,1) 100%)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '2rem',
});

const LogoImage = styled('img')({
  maxWidth: '300px',
  marginBottom: '2rem',
  '@media (min-width: 768px)': {
    marginBottom: '3rem',
  },
});

const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  '@media (min-width: 600px)': {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const ButtonStyled = styled(Button)({
  backgroundColor: '#00d4ff',
  color: 'black',
  padding: '1rem 2rem',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#00a3c9',
  },
});

const IconStyled = styled('i')({
  marginRight: '1rem',
  fontSize: '1.5rem',
});

const Home2 = () => {
  return (
    <RootContainer>
      <div className="text-center">
        <LogoImage src={logo} alt="Logo" />
        <Typography variant="h4" gutterBottom>COMING SOON</Typography>
        <Typography variant="subtitle1" gutterBottom>Get in touch</Typography>
        <ButtonContainer>
          <ButtonStyled startIcon={<IconStyled className="fas fa-phone text-white"></IconStyled>} href="tel:+1 408-931-4532">
            Phone
          </ButtonStyled>
          <ButtonStyled startIcon={<IconStyled className="fab fa-instagram text-white"></IconStyled>} href="https://instagram.com">
            Instagram
          </ButtonStyled>
          <ButtonStyled startIcon={<IconStyled className="fas fa-envelope text-white"></IconStyled>} href="mailto:ksboard@karaisol.com">
            Email
          </ButtonStyled>
        </ButtonContainer>
      </div>
    </RootContainer>
  );
};

export default Home2;

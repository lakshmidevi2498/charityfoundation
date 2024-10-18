import React from 'react'
import Controls from '../commons/controls'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import theme from '../Utilities/Theme';

const AnimatedButton = () => {
  const navigate = useNavigate()
  const ButtonWrapper = styled('div')({
    position: 'relative',
  });

  const StyledButton = styled(Button)(({ theme }) => ({
    display: 'block',
    fontSize: '15px',
    lineHeight: '10px',
    fontWeight: 200,
    textTransform: 'inherit',
    padding: '15px',
    backgroundColor: '#ffc700',
    color: 'black',
    borderRadius: '50px',
    border: '0',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    '&:hover .button-bg': {
      filter: 'blur(10px)',
      transition: 'filter .4s ease-in',
    },
  }));

  const ButtonBg = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    background: 'linear-gradient(90deg, #219D80 68.23%, #FFFFFF 100%)',
    backgroundSize: '600% 600%',
    borderRadius: '50px',
    animation: 'AnimateBorder 4s ease infinite',
    zIndex: 0,
    transform: 'translate(-2px, -2px)',
  });

  const GlobalStyles = () => {
    return (
      <style>{`
            @keyframes AnimateBorder {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
    );
  };

  const handleDonatePage = () => {
    navigate('/supportus/donate')
  }
  return (
    <>
      <Controls.Grid container justifyContent='center' onClick={handleDonatePage}>
        <ButtonWrapper>
          <ButtonBg className="button-bg" />
          <StyledButton sx={{ color: theme.palette.one.main }}>Donate Now</StyledButton>
        </ButtonWrapper>
        <GlobalStyles />
      </Controls.Grid>
    </>
  )
}

export default AnimatedButton
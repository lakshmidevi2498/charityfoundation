import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';

const AboutUsComponentsOne = () => {
  return (
    <>
      <Controls.Grid container justifyContent="center" sx={{ position: 'relative' }}>
        <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
         
          <Controls.Box
            sx={{
              position: 'relative',
              height: { xs: '540px', sm: '560px' },  
              width: '100%',
            }}
          >
            
            <Controls.Box
              src="./assests/images/unsplash_6ner152Cc6c.png"
              component="img"
              width="100%"
              height="100%"  
              sx={{ objectFit: 'cover' }}
            />

            
            <Controls.Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#00000066',
                zIndex: 1,
              }}
            />

            
            <Controls.Grid
              container
              item
              xs={11}
              sm={10}
              lg={9}
              xl={10}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: theme.palette.one.main,
                fontWeight: 700,
                fontFamily: 'Lato',
                zIndex: 2,
              }}
            >
              <Controls.Typography
                variant="caption4"
                sx={{
                  fontSize: { xs: '30px', sm: '48px' ,md:"48px",xl:"75px"},
                  lineHeight: { xs: '30px', sm: '50px', md: '76.8px' },
                }}
              >
              The best way to find yourself is to lose yourself in the{' '}
                <Controls.Box
                  component="span"
                  sx={{ color: theme.palette.one.yellow }}
                >
                  &nbsp;service of others.
                </Controls.Box>
              </Controls.Typography>
            </Controls.Grid>
          </Controls.Box>
        </Controls.Grid>
      </Controls.Grid>
    </>
  );
};

export default AboutUsComponentsOne;

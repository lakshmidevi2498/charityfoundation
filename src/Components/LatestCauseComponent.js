import React ,{useRef}from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import SwiperComponent from './SwiperComponent';

const LatestCauseComponent = () => {
  const swiperRef = useRef(null);

    const images = [
        {text:"Homeless",name:"Childern We Wotk ",image:"./assests/images/unsplash_ZQDWu8RgjDE.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"85",progressbar:"85",raised:"8500",goal:"10000"},
        {text:"Education",name:"Help For Education",image:"./assests/images/unsplash_83tkHLPgg2Q.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"90",progressbar:"90",raised:"9000",goal:"2000"},
        {text:"Food",name:"Help For Food",image:"./assests/images/unsplash_tqwOJAvUih4.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"75",progressbar:"75",raised:"1,500",goal:"1500"},
        {text:"Homeless",name:"Childern We Wotk ",image:"./assests/images/unsplash_41fytYZ_-mM.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"85",progressbar:"85",raised:"1,0000",goal:"1000"},
        {text:"Education",name:"Help For Education",image:"./assests/images/unsplash_iYtYZ5H-9ws.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"90",progressbar:"90",raised:"8500",goal:"2000"},
        {text:"Food",name:"Help For Food",image:"./assests/images/unsplash_83tkHLPgg2Q.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"75",progressbar:"75",raised:"1500",goal:"1500"},
        {text:"Education",name:"Help For Education",image:"./assests/images/unsplash_41fytYZ_-mM.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"90",progressbar:"90",raised:"9000",goal:"5000"},
        {text:"Food",name:"Help For Food ",image:"./assests/images/unsplash_tqwOJAvUih4.png",descp:"Lorem ipsum dolor sit amet, consetes elitr, sed diam nonumy....",percent:"75",progressbar:"75",raised:"8500",goal:"2000"},

    ]

  return (
    <>
      <Controls.Grid container justifyContent='center' my={3} sx={{ boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)', position: 'relative', overflow: 'hidden' }}>
        <Controls.Grid item xs={10} lg={9} xl={10}>
          <Controls.Grid item xs={12} sx={{ textAlign: "left", zIndex: 1 }}>
            <Controls.Grid item xs={12} sm={6}>
              <Controls.Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Controls.Typography variant='caption1' sx={{   fontSize: { xs: "0.8rem", sm: "1.2rem" } }}>
                  Latest Causes
                </Controls.Typography>
                <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px", marginLeft: '8px' }} />
              </Controls.Box>
              <Controls.Typography variant='caption1' sx={{   fontSize: "1.5rem", fontWeight: 700, color: '#252A34', marginTop: "10px" }}>
                Find The Popular Cause
                <br />And <Controls.Box component='span' sx={{ color: theme.palette.one.yellow }}>Donate Them</Controls.Box>
              </Controls.Typography>
            </Controls.Grid>

            <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
              
              <Controls.Grid
                sx={{
                  cursor: 'pointer',
                  backgroundColor: "#D9F5EE",
                  position: 'absolute',
                  top: {xs:'180px',sm:"-25px",},
                  left: {xs:'0px',sm:"540px",md:"760px",lg:"1050px",xl:"2040px",},    
                  zIndex: 100,
                  borderRadius: '50%',
                  padding: '5px',
                  display: "flex",
                }}
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Controls.ChevronLeft />
              </Controls.Grid>

               
              <Controls.Grid
                sx={{
                  cursor: 'pointer',
                  backgroundColor: "#D9F5EE",
                  position: 'absolute',
                  top: {xs:'180px',sm:"-25px"},   
                  right: {xs:'0px',sm:"20px"},  
                  zIndex: 100,
                  borderRadius: '50%',
                  padding: '5px',
                  display: "flex", 
                }}
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Controls.ChevronRight />
              </Controls.Grid>
            </Controls.Grid>

            
            <Controls.Grid item xs={12}>
              <SwiperComponent images={images} swiperRef={swiperRef} />
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>

    </>
  );
};

export default LatestCauseComponent;

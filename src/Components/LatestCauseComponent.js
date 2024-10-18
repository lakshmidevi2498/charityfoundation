import React ,{useRef}from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import SwiperComponent from './SwiperComponent';

const LatestCauseComponent = () => {
  const swiperRef = useRef(null);

    const images = [
        {text:"Support Child Education",name:"Help For Child Education",image:"./assests/images/unsplash_ZQDWu8RgjDE.png",descp:"Charity empowers children in India through quality education and community engagement.",percent:"85",progressbar:"85",raised:"8500",goal:"10000"},
        {text:"Homeless",name:"Giving Shelter so Many People",image:"./assests/images/unsplash_83tkHLPgg2Q.png",descp:"Charities provide shelter to the homeless,offering safety, dignity, & an opportunity to rebuild their lives.",percent:"90",progressbar:"90",raised:"9000",goal:"2000"},
        {text:"Food",name:"Habitual the Nutritional Food Diet for Kids",image:"./assests/images/unsplash_tqwOJAvUih4.png",descp:"These programs provide meals to children at schools & shelters to promote health & break the hunger cycle.",percent:"75",progressbar:"75",raised:"1,500",goal:"1500"},
        {text:"Disaster Relief",name:"Send help to those who fight the disaster ",image:"./assests/images/unsplash_41fytYZ_-mM.png",descp:"Disaster relief provides immediate and long-term aid, including food, water, shelter, and medical care, to those affected by natural disasters.",percent:"85",progressbar:"85",raised:"1,0000",goal:"1000"},
        {text:"Prevent child trafficking",name:"Stop trafficking & Educate them",image:"./assests/images/unsplash_iYtYZ5H-9ws.png",descp:"Prevent child trafficking by raising awareness, educating vulnerable communities, and supporting protective services for at-risk children.",percent:"90",progressbar:"90",raised:"8500",goal:"2000"},
        {text:"Health care",name:"Creating health camps in slum areas",image:"./assests/images/unsplash_83tkHLPgg2Q.png",descp:"provides essential medical care and health education to underserved communities, improving their well-being.",percent:"75",progressbar:"75",raised:"1500",goal:"1500"},
        {text:"Stop child labour",name:" Prevent child labour works",image:"./assests/images/unsplash_41fytYZ_-mM.png",descp:"Prevent child labour by enforcing strict laws, providing education, and supporting vulnerable families with sustainable livelihood opportunities.",percent:"90",progressbar:"90",raised:"9000",goal:"5000"},
        {text:"Clean Water",name:"Provide clear water facilities to the slum area people  ",image:"./assests/images/unsplash_tqwOJAvUih4.png",descp:"Charities play a crucial role in ensuring that people living in slum areas have access to clean water.",percent:"75",progressbar:"75",raised:"8500",goal:"2000"},

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

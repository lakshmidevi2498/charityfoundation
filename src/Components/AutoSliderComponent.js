 
import React ,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import { Pagination, Autoplay } from 'swiper/modules';    
import { useRef } from 'react'; 
import Controls from '../commons/controls';
import theme from '../Utilities/Theme'

const images = [
  {
    img: "./assests/images/Rectangle 2981 (1).png", name: "Elyasha Joyous", desig: "Associate Manager", icons: [
      <Controls.WhatsAppIcon key="whatsapp" />,
      <Controls.FacebookOutlinedIcon key="facebook" />,
      <Controls.InstagramIcon key="instagram" />,
      <Controls.PinterestIcon key="pinterest" />
    ],
  },
  {
    img: "./assests/images/Rectangle 2981.png", name: "Elyasha Joyous", desig: "Associate Manager", icons: [
      <Controls.WhatsAppIcon key="whatsapp" />,
      <Controls.FacebookOutlinedIcon key="facebook" />,
      <Controls.InstagramIcon key="instagram" />,
      <Controls.PinterestIcon key="pinterest" />
    ],
  },
  {
    img: "./assests/images/Rectangle 2983 (1).png", name: "Elyasha Joyous", desig: "Associate Manager", icons: [
      <Controls.WhatsAppIcon key="whatsapp" />,
      <Controls.FacebookOutlinedIcon key="facebook" />,
      <Controls.InstagramIcon key="instagram" />,
      <Controls.PinterestIcon key="pinterest" />
    ],
  },
  {
    img: "./assests/images/Rectangle 2983.png", name: "Elyasha Joyous", desig: "Associate Manager", icons: [
      <Controls.WhatsAppIcon key="whatsapp" />,
      <Controls.FacebookOutlinedIcon key="facebook" />,
      <Controls.InstagramIcon key="instagram" />,
      <Controls.PinterestIcon key="pinterest" />
    ],
  },
  {
    img: "./assests/images/Rectangle 2981 (1).png", name: "Elyasha Joyous", desig: "Associate Manager", icons: [
      <Controls.WhatsAppIcon key="whatsapp" />,
      <Controls.FacebookOutlinedIcon key="facebook" />,
      <Controls.InstagramIcon key="instagram" />,
      <Controls.PinterestIcon key="pinterest" />
    ],
  },
  {
    img: "./assests/images/Rectangle 2981.png", name: "Elyasha Joyous", desig: "Associate Manager", icons: [
      <Controls.WhatsAppIcon key="whatsapp" />,
      <Controls.FacebookOutlinedIcon key="facebook" />,
      <Controls.InstagramIcon key="instagram" />,
      <Controls.PinterestIcon key="pinterest" />
    ],
  },
  

];

const AutoSlider = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <Controls.Grid container justifyContent='center' >
        <Controls.Grid item xs={11} md={10} sx={{ justifyContent: "center", textAlign: "center", }} my={3}>
          <Controls.Grid item >
            <Controls.Typography sx={{ color: "#F2C21A", fontSize: { xs:"22px",sm:"24px",md: "32px",lg:"38px" }, fontWeight: 700, fontFamily: "lato" }}>Our volunteers are our everyday heroes in the truest sense
            </Controls.Typography>
          </Controls.Grid>
          <Controls.Grid item >
            <Controls.Typography sx={{ fontSize: { xs: "14px",sm: "16px" ,lg:"20px"}, fontFamily: "poppins", }}>Volunteering at Foundation is a transformational learning experience that will enable you to make a difference where it’s needed the most.</Controls.Typography>
          </Controls.Grid>


          <Controls.Grid container justifyContent='center' sx={{ position: 'relative', paddingTop:"30px" }} my={1}>  
        <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
          <Swiper
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}  
            autoplay={{
              delay: 500,  
              disableOnInteraction: false,  
            }} 
            modules={[Pagination, Autoplay]}  
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              1440: { slidesPerView: 5 },
              1024: { slidesPerView: 4 },
              764: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              320: { slidesPerView: 1 },
            }}
          >
            {images.map((item, index) => (
                 <SwiperSlide key={index}>
              <Controls.Grid key={index} sx={{ display: 'flex', justifyContent: 'center', }}>
                <Controls.Card
                  sx={{
                    backgroundColor: theme.palette.one.green,
                    borderRadius: "15px",
                    border: "4px solid #107A66",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: "auto",
                    textAlign: "center",
                    width: {xs:"250px",sm:"220px"},
                    color: theme.palette.one.main, 
                  }}
                >
                  <Controls.CardMedia
                    component="img"
                    src={item.img}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "20px",
                      border: "2px solid #107A66", 
                      alignItems: 'center', display: "block", 
                      textAlign: "center"
                    }}
                  />
                  <Controls.CardContent sx={{ textAlign: "center" }}>
                    <Controls.Typography sx={{ fontWeight: "bold" }}>{item.name}</Controls.Typography>
                    <Controls.Typography variant="" sx={{ fontSize: "12px", }}>{item.desig}</Controls.Typography>
                    <Controls.Grid item sx={{ display: "flex", justifyContent: "center" }} mt={1}>{item.icons}</Controls.Grid>
                  </Controls.CardContent>
                </Controls.Card>
              </Controls.Grid>
              </SwiperSlide>
            ))}
             <div className="custom-swiper-pagination" style={{marginTop:"30px",}}></div> 
            </Swiper>
            </Controls.Grid>
            </Controls.Grid>

        </Controls.Grid>
      </Controls.Grid>
    </>
  );
};

export default AutoSlider;

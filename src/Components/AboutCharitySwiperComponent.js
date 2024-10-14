import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';  
import { useRef } from 'react';
import Controls from '../commons/controls';  
import theme from '../Utilities/Theme'; 

const images = [
    "./assests/images/unsplash_AEaTUnvneik.png",
    "./assests/images/unsplash_7MD4DR9jbP0.png",
    "./assests/images/unsplash_8ldqRkOk5oo.png",
    "./assests/images/unsplash_f8ld5zt3a3k.png",
    "./assests/images/unsplash_iYtYZ5H-9ws.png",
    "./assests/images/unsplash_jEEYZsaxbH4.png", 
];

const MySwiper = () => {
    const swiperRef = useRef(null);
  
    return (
      <Controls.Grid container justifyContent='center' sx={{ position: 'relative', paddingLeft: {xs:"0px",md:'50px'} }}>  
        <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true,
              el:".custom-swiper-pagination"
             }}  
            modules={[Pagination]}  
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              1440: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              764: { slidesPerView: 2 },
              576: { slidesPerView: 1 },
              320: { slidesPerView: 1 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Controls.Card sx={{ display: 'flex' }}>
                  <Controls.CardMedia
                    component='img'
                    src={img}
                    width="100%"
                    height="350px"
                    sx={{ borderRadius: '10px',  }}
                  />
                </Controls.Card>
              </SwiperSlide>
            ))}

            
          </Swiper>
          <div className="custom-swiper-pagination "></div> 
  
          <Controls.Grid
            sx={{
              backgroundColor: {xs:"#D9F5EE",md:"transparent"},
              cursor: 'pointer',
              color: theme.palette.one.green,
              position: 'absolute',
              top: {xs:'50%',md:"40%"},  
              left: {xs:"0%",md:'-40px'},  
              zIndex: 100,
              borderRadius: '50%',
              padding: '2px',
              transform: 'translateY(-50%)',
              border: "2px solid green",
              display:"flex"
            }}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Controls.ChevronLeft />
          </Controls.Grid>
  
          <Controls.Grid
            sx={{
              backgroundColor: {xs:"#D9F5EE",md:"transparent"},
              cursor: 'pointer',
              color: theme.palette.one.green,
              position: 'absolute',
              top: {xs:'50%',md:"50%"},  
              right: {xs:'0px',md:'101%'},  
              zIndex: 100,
              borderRadius: '50%',
              padding: '2px',
              transform: 'translateY(-50%)',
              border: "2px solid green",
              display:"flex"
            }}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Controls.ChevronRight />
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    );
};

export default MySwiper;

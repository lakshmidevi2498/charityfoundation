import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef } from 'react';
import Controls from '../commons/controls';  
import theme from '../Utilities/Theme'; 

const images = [
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
    "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/502/788/datas/original.jpg",
];

const MySwiper = () => {
    const swiperRef = useRef(null);
  
    return (
      <Controls.Grid container justifyContent='center' sx={{ position: 'relative', paddingLeft: '50px' }}>  
        <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
          <Swiper
            spaceBetween={10}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',  
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              1440: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              764: { slidesPerView: 1 },
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
                    height="330px"
                    sx={{ borderRadius: '10px' }}
                  />
                </Controls.Card>
              </SwiperSlide>
            ))}
            {/* Custom Pagination */}
            <div className="swiper-pagination"></div>
          </Swiper>
  
          <Controls.Grid
            style={{
              cursor: 'pointer',
              color: theme.palette.one.green,
              position: 'absolute',
              top: '45%',  
              left: '-40px',  
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
            style={{
              cursor: 'pointer',
              color: theme.palette.one.green,
              position: 'absolute',
              top: '60%',  
              left: '-40px',  
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

import React, { useRef } from 'react';
import Controls from '../commons/controls';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import theme from '../Utilities/Theme';

const SwiperComponent = ({ images }) => {
    const swiperRef = useRef(null);

    return (
        <>
            <Controls.Grid container justifyContent='center' sx={{ overflow: 'hidden', position: 'relative',paddingY:"40px" }} >
    <Controls.Grid item xs={12}>
        <Swiper
            spaceBetween={20}   
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
                1440: { slidesPerView: 4 },
                1024: { slidesPerView: 3 },
                764: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                320: { slidesPerView: 1 },
            }}
        >
            {images.map((item, index) => (
                <SwiperSlide key={index} style={{ width: '100%', }} >
                    <Controls.Card sx={{boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.2)' ,border:"1px solid lightgray",borderRadius:"2px"}} >
                        <Controls.CardMedia
                            component='img'
                            src={item.image}
                            width="100%"
                            height="330px"
                            sx={{  objectFit: 'cover' }}
                        />
                        <Controls.CardContent>
                            <Controls.Typography variant='h6' sx={{ color: theme.palette.one.green, fontWeight: "bold", fontFamily: theme.palette.caption2, textAlign: "left" }}>{item.text}</Controls.Typography>
                            <Controls.Typography variant='h6' sx={{ fontWeight: "bold", fontFamily: theme.palette.caption2 }}>{item.name}</Controls.Typography>
                            <Controls.Typography sx={{ fontSize: "14px" }}>{item.descp}</Controls.Typography>
                            <Controls.Grid item sx={{ justifyContent: "space-between", display: 'flex' }}>
                                <Controls.Typography variant='h6' sx={{ fontFamily: theme.palette.caption2, fontSize: "16px" }}>Donate</Controls.Typography>
                                <Controls.Typography variant='caption2'mt={1} >{item.percent}%</Controls.Typography>
                            </Controls.Grid>
                            <Controls.LinearProgress
                                variant="determinate"
                                value={item.percent}
                                sx={{ 
                                    height: '5px', 
                                    marginTop: '5px',
                                    backgroundColor: theme.palette.one.lightGreen,   
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: theme.palette.one.green,
                                    }
                                }}
                            />
                            <Controls.Grid item sx={{ justifyContent: "space-between", display: 'flex' }}>
                                <Controls.Typography variant='h6' sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>${item.raised}</Controls.Typography>
                                <Controls.Typography mt={1} sx={{ fontFamily: "Montserrat", fontSize: "16px" }}>${item.goal}</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Button variant='outlined' sx={{ color: theme.palette.one.green, border: "2px solid #107A66" }}>Donate now</Controls.Button>
                        </Controls.CardContent>
                    </Controls.Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </Controls.Grid>

     
    <Controls.Grid
        style={{
            cursor: 'pointer',
            backgroundColor: "#D9F5EE",
            position: 'absolute',
            top: '3%',
            left: '1020px',
            zIndex: 100,
            borderRadius: '50%',
            padding: '5px',
            transform: 'translateY(-50%)', 
            display: "flex",

        }}
        onClick={() => swiperRef.current?.slidePrev()}
    >
        <Controls.ChevronLeft />
    </Controls.Grid>

    <Controls.Grid
        style={{
            cursor: 'pointer',
            backgroundColor: "#D9F5EE",
            position: 'absolute',
            top: '3%',
            right: '40px',
            zIndex: 100,
            borderRadius: '50%',
            padding: '5px',
            transform: 'translateY(-50%)', 
            display: "flex"
        }}
        onClick={() => swiperRef.current?.slideNext()}
    >
        <Controls.ChevronRight />
    </Controls.Grid>
</Controls.Grid>

        </>
    );
};

export default SwiperComponent;

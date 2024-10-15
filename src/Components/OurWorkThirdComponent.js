import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useRef } from 'react';

const OurWorkThirdComponent = () => {
    const swiperRef = useRef(null);
    const content = [
        "./assests/images/Rectangle 2989.png", "./assests/images/Rectangle 2990.png", "./assests/images/Rectangle 2989 (1).png", "./assests/images/Rectangle 2990 (1).png",
    ]
    return (
        <>
            <Controls.Grid container justifyContent='center' mt={4}>
                <Controls.Grid item xs={12} sx={{ backgroundColor: "rgba(242, 194, 26, 0.16)",paddingY:'30px' }}>
                    <Controls.Grid item xs={12} sm={10}  sx={{ justifyContent: "center", alignItems: "center", margin: "auto", textAlign: "center" }} padding='10px'>
                        <Controls.Grid item sx={{ display: "block" }} mb={1}>
                            <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"18px",md:"20px",xl:"26px"}, fontWeight: "medium" }}>The measure of a life is not its duration, but its donation.</Controls.Typography><br />
                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: {xs:"20px",sm:"20px",md:"26px",lg:"32px",xl:"36px"}, color: theme.palette.one.green,paddingX:{xs:"2px",sm:0} }}>The smallest act of kindness is worth more than the grandest intention.</Controls.Typography>
                        </Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid item xs={11} sx={{ justifyContent: "center",alignItems:"center",margin:"auto" , }} >
                        <Swiper
                             pagination={{
                                clickable: true,
                                el: ".swiper-measure-pagination",  
                                renderBullet: (index, className) => {
                                    return `<span class="${className}" style="width: 20px; height: 4px; background-color: #107A66; display: inline-block; margin: 0 2px; border-radius: 2px;"></span>`;
                                },
                            }}
                              breakpoints={{
                                1440: { 
                                  slidesPerView: 2, 
                                  spaceBetween: 90,  
                                },
                                1024: { 
                                  slidesPerView: 2, 
                                  spaceBetween: 10,   
                                },
                                768: { 
                                  slidesPerView: 1, 
                                  spaceBetween: 20,   
                                },
                                576: { 
                                  slidesPerView: 1, 
                                  spaceBetween: 10,  
                                },
                                320: { 
                                  slidesPerView: 1, 
                                  spaceBetween: 10,   
                                },
                              }}
                            modules={[Pagination]}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            
                        >
                           
                            {content.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Controls.Grid item justifyContent="center" alignItems="center" sx={{ height: "100%",display:{xs:"block",sm:"flex"} }} gap={1} >
                                        <Controls.Grid item xs={12} sm={5} md={6}lg={5} xl={4}>
                                            <Controls.Box component="img" src={item} width='100%' height='100%' sx={{ width: {xs:'100%', }, height: "300px",padding:{xs:"15px",} }} />
                                        </Controls.Grid>
                                        <Controls.Grid xs={12} sm={7}md={6}lg={7} xl={7}sx={{ display: "block",margin:"auto",paddingX:{xs:"10px",sm:0} }}>
                                            <Controls.Grid item> <Controls.Typography variant='caption1' sx={{ fontWeight: "medium", fontSize: {xs:"18px",sm:"21px",md:"17px",lg:"19px",xl:"26px"} }}>The simplest into they acts of kindness are by far more powerful than a thousand heads bowing in prayer.The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer far more powerful than a thousand heads bowing in prayer.</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item><Controls.Typography variant='caption1' sx={{ color: theme.palette.one.green, fontWeight: "bold", fontSize: {xs:"20px",sm:"23px",md:"20px",lg:"24px",xl:"28px"} }}>Fredrick Fringleston</Controls.Typography>
                                            </Controls.Grid>
                                            <Controls.Grid item><Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: {xs:"20px",sm:"23px",md:"16px",lg:"20px",xl:"@24px   "},marginBottom:{xs:"10px",sm:0} }}>United States of America</Controls.Typography>
                                            </Controls.Grid>
                                        </Controls.Grid>
                                    </Controls.Grid>
                                </SwiperSlide>
                            ))} 
                            
                        </Swiper>
                        <Controls.Grid item sx={{textAlign: "center",mt:{xs:2,sm:0}}}>
                        <div style={{  }}>
                        <div className="swiper-measure-pagination" style={{  display:"flex",justifyContent:"center",  }}></div>
                        </div>
                        </Controls.Grid>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default OurWorkThirdComponent
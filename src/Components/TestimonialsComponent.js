import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

const TestimonialsComponent = () => {
    const swiperRef = useRef(null);

    const content = [
        {img:'./assests/images/Layer 2@4x (1) 1.png',text:"Volunteering with Charity has been one of the most rewarding experiences of my life. Seeing the direct impact of our efforts on the lives of those we serve is incredibly fulfilling. I am proud to be part of an organization that prioritizes compassion and community"},
        {img: './assests/images/Layer 2@4x (1) 1 (1).png',text:"My experience as a volunteer with Charity has been nothing short of amazing. The organization is well-organized, and I always feel supported in my role. It’s rewarding to be part of something that brings hope and help to so many"},
        {img: './assests/images/Layer 2@4x (1) 2 (1).png',text:"Being part of Charity has not only allowed me to give back but has also taught me the importance of community and compassion. Every event we host and every person we help reinforces why I joined this organization. I’m proud to be part of a team that truly makes a difference."}
    ]
    return (
        <Controls.Grid container justifyContent='center' my={7} height="480px" sx={{ display: "flex", alignItems: "center", position: 'relative', width: '100%',  overflow: "visible", backgroundColor: "#FAFAFA", justifyContent: "center", zIndex:1 }} mt={5}>
            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                modules={[Pagination]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                breakpoints={{
                    1440: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    764: { slidesPerView: 1 },
                    576: { slidesPerView: 1 },
                    320: { slidesPerView: 1 },
                }}
            >
                {content.map((item, index) => (
                    <SwiperSlide key={index}>

                        <Controls.Grid item sx={{ justifyContent: "center", height: "auto", alignItems: "center", position: "relative  " , overflowY:'visible',zIndex:2, }} xs={12} mt={{ xs: 1, md: 4 }}>
                            <Controls.Grid item justifyContent='center' alignItems='center' margin="auto" sx={{ paddingY: { xs: "5px", sm: '40px' } }}>
                                <Controls.Grid
                                    item
                                    sx={{
                                        display: { xs: "block", sm: "flex" },
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: { xs: "20px", sm: 0 }
                                    }}
                                    pY={5}
                                    gap={2}
                                >

                                    <Controls.Grid item xs={12} sm={6} sx={{ order: { xs: 1, sm: 3 }, }}>
                                        <Controls.Typography variant='caption4' sx={{ color: theme.palette.one.green, fontSize: { xs: "14px", sm: "20px" ,xl:"26px"}, fontWeight: "bold" }}>Testimonials</Controls.Typography>
                                        <Controls.Typography variant='caption4' sx={{ fontSize: { xs: "22px", sm: "25px",md:"30px",xl:"32px" }, fontWeight: "bold", display: { xs: "none", sm: "block" } }}>What People Say about
                                            <Controls.Box component='span' sx={{ color: theme.palette.one.green, }}> Our Organization</Controls.Box>
                                        </Controls.Typography>
                                        <Controls.Typography variant='caption4' sx={{ fontSize: {xs:"14px",xl:"18px"}, display: { xs: "block", sm: "block" } }}>
                                           {item.text}
                                           </Controls.Typography>
                                        <Controls.Grid item sx={{ display: "flex", alignItems: "center" }} gap={2} my={2}>

                                            <Controls.Grid item sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant="caption4" sx={{ fontSize: {xs:"20px",xl:"26px"}, fontWeight: "bold" }}>
                                                        Kay Henderson
                                                    </Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant="caption4" sx={{ fontSize: {xs:"14px",xl:"18px"} }}>
                                                        Businessman - Entrepreneur
                                                    </Controls.Typography>
                                                </Controls.Grid>
                                            </Controls.Grid>


                                            <Controls.Grid
                                                item
                                                sx={{
                                                    display: { xs: "none", md: "block" },
                                                    flex: 0,
                                                    order: { xs: 1, md: 2 },
                                                    textAlign: "right"
                                                }}
                                            >
                                                <Controls.Box
                                                    src="./assests/images/Group 7.png"
                                                    component="img"
                                                    sx={{
                                                        width: "80px",
                                                        height: "50px",
                                                        margin: "auto",
                                                    }}
                                                />
                                            </Controls.Grid>
                                        </Controls.Grid>

                                    </Controls.Grid>

                                    <Controls.Grid item xs={12} sm={6} md={4} sx={{ position: "relative", overflowY:'visible',order: { xs: 1, sm: 2 }, }} mt={{ xs: 9, sm: 0 }}>
                                        <Controls.Grid
                                            item
                                            sx={{
                                                backgroundColor: "#F2C21A",
                                                height: { xs: "225px", sm: "320px",xl:"400px" },
                                                width: { xs: "250px", sm: "320px",xl:"400px" },
                                                alignItems: "center",
                                                margin: "auto",
                                                justifyContent: "center",
                                                borderTopRightRadius: "100px",
                                                borderTopLeftRadius: "100px",

                                            }}
                                        >
                                            <Controls.Box
                                                component='img'
                                                src={item.img}
                                                alt='image'
                                                sx={{
                                                    position: "absolute",
                                                    zIndex:6,
                                                    // overflow: "visible",
                                                    top: { xs: "-25%", sm: "-15%", md: "-60px" },
                                                    left: { xs: "50.5%", sm: "50%", md: "50%" },
                                                    transform: "translateX(-50%)",
                                                    width: { xs: "210px", sm: '260px',md:"270px",xl:"340px" },
                                                    height: { xs: "280px", sm: '370px', md: "380px",xl:"420px" },
                                                    zIndex: 1,
                                                    borderTopLeftRadius: "10px",
                                                    borderBottomRightRadius: "10px", 
                                                    borderTopRightRadius: {xs:"100px",sm:"130px"},
                                                    borderBottomLeftRadius: {xs:"100px",sm:"130px"},
                                                }}
                                            />
                                           
                                        </Controls.Grid>
                                        {/* <Controls.Typography variant='caption4' sx={{ fontSize: {xs:"14px",xl:"18px"}, display: { xs: "none", sm: "block" } }}>
                                           {item.text}
                                           </Controls.Typography> */}
                                        
                                    </Controls.Grid>

                                    <Controls.Grid item md={1} sx={{
                                        order: { xs: 3, md: 1 },
                                        display: { xs: 'none', md: 'block' },
                                        justifyContent: 'end',
                                        textAlign: "left",
                                        position: "relative",

                                    }}
                                    >
                                        <Controls.Box
                                            src='./assests/images/Group 8.png'
                                            component='img'
                                            sx={{
                                                position: "absolute",
                                                left: 0,
                                                bottom: 0,
                                                width: "auto",
                                                height: "auto",
                                                display: { xs: 'none', md: 'block' }
                                            }}
                                        />
                                    </Controls.Grid>

                                    <Controls.Grid item md={1} sx={{
                                        order: { xs: 4, md: 4 },
                                        display: { xs: 'none', md: 'block' },
                                        justifyContent: 'end',
                                        textAlign: "right",
                                        position: "relative",

                                    }}
                                    >
                                        <Controls.Box
                                            src='./assests/images/Group 8.png'
                                            component='img'
                                            sx={{
                                                position: "absolute",
                                                right: 0,
                                                bottom: 0,
                                                width: "auto",
                                                height: "auto",
                                            }}
                                        />
                                    </Controls.Grid>

                                </Controls.Grid>
                            </Controls.Grid>
                        </Controls.Grid>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='custom-pagination' style={{ marginBottom: { xs: "0px", md: "40px" }, marginTop: { xs: "10px", md: "0px" } }} ></div>

        </Controls.Grid>
    );
}

export default TestimonialsComponent;

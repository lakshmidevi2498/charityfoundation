import React, { useRef } from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const AboutUsComponentFive = () => {
    const content = [
        { img: "./assests/images/Ellipse 357.png", name: "Cameron Williamson", desig: "founder", descp: "Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark,  demoiselle whalefish snoek icefish velvet-belly sharkzebra lionfish mud cat pelican eel California halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket  danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata Minnow snoek icefish velvet-belly shark." },
        { img: "./assests/images/Ellipse 357 (1).png", name: "Cameron Williamson", desig: "founder", descp: "Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, demoiselle whalefish snoek icefish velvet-belly sharkzebra lionfish mud cat pelican eelCalifornia halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket  danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata Minnow snoek icefish velvet-belly shark." },
        { img: "./assests/images/Ellipse 357 (2).png", name: "Cameron Williamson", desig: "founder", descp: "Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, demoiselle whalefish snoek icefish velvet-belly shark zebra lionfish mud cat pelican eel California halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket  danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata Minnow snoek icefish velvet-belly shark." },
    ];

    const swiperRef = useRef(null);

    return (
        <Controls.Grid container justifyContent='center'>
            <Controls.Grid item xs={12} sx={{ justifyContent: "center", backgroundColor: "#252A34D9", position: "relative", py: 3 }}>
                <Swiper
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="width: 30px; height: 4px; background-color: white; display: inline-block; margin: 0 2px; border-radius: 2px; borderRadius:2px solid red"></span>`;
                        },
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
                            <Controls.Grid item xs={9} sx={{ justifyContent: "center", margin: "auto", textAlign: "center" }}>
                                <Controls.Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} gap={1}>
                                    <Controls.Divider sx={{ backgroundColor: theme.palette.one.main, width: { xs: "50px", }, }} />
                                    <Controls.Typography variant='caption2' sx={{ color: theme.palette.one.main,fontSize:{xs:"14px",xl:"25px"} }}>Our Testimonials</Controls.Typography>
                                    <Controls.Divider sx={{ backgroundColor: theme.palette.one.main, width: { xs: "50px", }, }} />
                                </Controls.Grid>
                                <Controls.Grid item>
                                    <Controls.Typography variant='caption2' sx={{ color: "#F2C21A", fontSize: {xs:"25px",sm:"30px"}, fontWeight: "bold" }}>What People Say</Controls.Typography>
                                </Controls.Grid>
                                <Controls.Box my={2} component='img' src={item.img} width="150px" height="150px" sx={{ borderRadius: '10px' }} />
                                <Controls.Grid item>
                                    <Controls.Typography variant='caption2' sx={{ color: "#F2C21A",fontSize:{xs:"13px",xl:"22px"} }}>{item.name}</Controls.Typography>
                                </Controls.Grid>
                                <Controls.Grid item>
                                    <Controls.Typography variant='caption2' sx={{ color: theme.palette.one.main,fontSize:{xs:"13px",xl:"18px"}  }} my={2}>{item.desig}</Controls.Typography>
                                </Controls.Grid>
                                <Controls.Grid item sx={{ position: 'relative' }}>

                                    <Controls.Box
                                        component='img'
                                        src='./assests/images/Group.png'
                                        alt="quote"
                                        width='200px'
                                        height='200px'
                                        sx={{
                                            position: "absolute",
                                            top: { sm: 20, lg: 6, xl: 9 },
                                            left: { sm: 260, md: 360, lg: 520, xl: 540 },
                                            width: '50px',
                                            height: '50px',
                                            zIndex: 1,
                                            justifyContent: "center",
                                            margin: "auto",
                                            display: { xs: "none", sm: "block" },
                                            // border:{xs:"none"}
                                        }}
                                    />

                                    <Controls.Grid item mb={5}>
                                        <Controls.Typography variant='caption2'
                                            sx={{
                                                color: theme.palette.one.main,
                                                textAlign: "center",
                                                fontSize: { xs: "12px", md: "14px",xl:"18px" },
                                                position: "relative",
                                                zIndex: 2,
                                            }}
                                            mb={0}
                                        >
                                            {item.descp}
                                        </Controls.Typography>
                                    </Controls.Grid>
                                </Controls.Grid>

                            </Controls.Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Controls.Grid className="swiper-pagination" style={{ marginBottom: "30px" }}></Controls.Grid>
                <Controls.Grid
                    className="about-us-prev-button"
                    sx={{
                        cursor: 'pointer',
                        color: theme.palette.one.main,
                        position: 'absolute',
                        top: '50%',
                        left: { xs: "30px", sm: "80px", md: "120px", lg: '200px' },
                        zIndex: 100,
                        padding: '2px',
                        transform: 'translateY(-50%)',
                    }}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <Controls.ChevronLeft />
                </Controls.Grid>
                <Controls.Grid
                    className="about-us-next-button"
                    sx={{
                        cursor: 'pointer',
                        color: theme.palette.one.main,
                        position: 'absolute',
                        top: "50%",
                        right: { xs: "30px", sm: "80px", md: "120px", lg: '200px' },
                        zIndex: 100,
                        padding: '2px',
                        transform: 'translateY(-50%)',
                    }}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <Controls.ChevronRight />
                </Controls.Grid>
            </Controls.Grid>
        </Controls.Grid>
    );
};

export default AboutUsComponentFive;

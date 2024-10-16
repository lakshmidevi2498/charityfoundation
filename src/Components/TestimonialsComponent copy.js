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
        './assests/images/Layer 2@4x (1) 1.png', './assests/images/Layer 2@4x (1) 1 (1).png', './assests/images/Layer 2@4x (1) 2 (1).png',
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

                        <Controls.Grid item sx={{ justifyContent: "center", height: "400px", alignItems: "center", position: "relative  " , overflowY:'visible',zIndex:2, }} xs={12} mt={{ xs: 1, md: 4 }}>
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
                                        <Controls.Typography variant='caption4' sx={{ color: theme.palette.one.green, fontSize: { xs: "14px", sm: "20px" }, fontWeight: "bold" }}>Testimonials</Controls.Typography>
                                        <Controls.Typography variant='caption4' sx={{ fontSize: { xs: "22px", sm: "30px" }, fontWeight: "bold", display: { xs: "none", sm: "block" } }}>What People Say about
                                            <Controls.Box component='span' sx={{ color: theme.palette.one.green, }}> Our Organization</Controls.Box>
                                        </Controls.Typography>
                                        <Controls.Typography variant='caption4' sx={{ fontSize: "14px", display: { xs: "none", sm: "block" } }}>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis pellentesque cras interdum ornare feugiat eget feugiat. Nunc, urna vitae pellentesque risus, ut volutpat eget libero vel. Vitae urna pharetra sem consectetur sed mi, nisi id feugiat. At egestas praesent mauris metus risus accumsan. Cras gravida natoque maecenas risus ultricies. Sed tincidunt porttitor viverra nunc neque, enim. Tristique molestie turpis turpis diam”
                                        </Controls.Typography>
                                        <Controls.Grid item sx={{ display: "flex", alignItems: "center" }} gap={2} my={2}>

                                            <Controls.Grid item sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant="caption4" sx={{ fontSize: "20px", fontWeight: "bold" }}>
                                                        Kay Henderson
                                                    </Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant="caption4" sx={{ fontSize: "14px" }}>
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
                                                height: { xs: "280px", sm: "320px" },
                                                width: { xs: "250px", sm: "320px" },
                                                alignItems: "center",
                                                margin: "auto",
                                                justifyContent: "center",
                                                borderTopRightRadius: "100px",
                                                borderTopLeftRadius: "100px",

                                            }}
                                        >
                                            <Controls.Box
                                                component='img'
                                                src={item}
                                                alt='image'
                                                sx={{
                                                    position: "absolute",
                                                    zIndex:6,
                                                    // overflow: "visible",
                                                    top: { xs: "-25%", sm: "-15%", md: "-60px" },
                                                    left: { xs: "50.5%", sm: "50%", md: "50%" },
                                                    transform: "translateX(-50%)",
                                                    width: { xs: "210px", sm: '260px',md:"270px" },
                                                    height: { xs: "280px", sm: '370px', md: "380px" },
                                                    zIndex: 1,
                                                    borderTopLeftRadius: "10px",
                                                    borderBottomRightRadius: "10px", 
                                                    borderTopRightRadius: {xs:"100px",sm:"130px"},
                                                    borderBottomLeftRadius: {xs:"100px",sm:"130px"},
                                                }}
                                            />
                                        </Controls.Grid>
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

import React from 'react';
import Controls from '../commons/controls';
import theme from '../Utilities/Theme';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const OurCampaignComponent = () => {
    const navigate = useNavigate()
    const swiperRef = useRef(null);
    const content = [
        { img: "./assests/images/pict.png", text: "Fundraising for children and refugees from donbass", low: "5,200", high: "10,400", },
        { img: "./assests/images/pict (1).png", text: "Food, water and medicine for shelter on the Dnieper", low: "1,122", high: "10,400", },
        { img: "./assests/images/pict (2).png", text: "massive invasion of Palestine, war in the Gaza strip", low: "28,200", high: "64,400", },
        { img: "./assests/images/unsplash_QPnbS4qB4li.png", text: "Fundraising for children and refugees from donbass", low: "5,200", high: "10,400", },
        { img: "./assests/images/unsplash_vC_xRhBoxGU.png", text: "Food, water and medicine for shelter on the Dnieper", low: "1,122", high: "10,400", },
        { img: "./assests/images/unsplash_76HhAKI5JXI.png", text: "massive invasion of Palestine, war in the Gaza strip", low: "28,200", high: "64,400", }
    ];
    const handleDonatePage = () => {
        navigate('/donate')
      }

    return (
        <>
            <Controls.Grid container justifyContent='center' mt={5}>
                <Controls.Grid item xs={12} sx={{ justifyContent: "center", backgroundColor: "rgba(242, 194, 26, 0.14)" }}>
                    <Controls.Grid item xs={10} sx={{ justifyContent: "center", alignItems: "center", margin: "auto", paddingY: "20px" }}>
                        <Controls.Grid item xs={12} sx={{ justifyContent: "space-between", display: "flex", }}>
                            <Controls.Grid item mb={2}> 
                                    <Controls.Typography variant='caption4' sx={{ color: theme.palette.one.green, fontSize: "18px", }} >
                                    Our Campaign
                                    </Controls.Typography> 
                                <Controls.Grid item>
                                    <Controls.Typography variant='caption4' sx={{ fontSize: { xs: "22px", sm: "30px" }, fontWeight:"bold" }}>Giving help to those who need it</Controls.Typography>
                                </Controls.Grid>
                            </Controls.Grid>
                        </Controls.Grid>

                        
                        <Controls.Grid container justifyContent='center' sx={{ position: 'relative' }}>
                            
                            <Controls.Grid
                                sx={{
                                    cursor: 'pointer',
                                    color: theme.palette.one.main,
                                    backgroundColor: theme.palette.one.button,
                                    position: 'absolute',
                                    top: {xs:'30%',sm:"-10%"}, 
                                    left: {xs:'10px',sm:"85%",md:"88%",lg:"92%"},
                                    zIndex: 100,
                                    borderRadius: '50%',
                                    padding: '2px',
                                    border: "2px solid #575F6F",
                                    display: "flex"
                                }}
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <Controls.ChevronLeft />
                            </Controls.Grid>

                            <Controls.Grid
                                sx={{
                                    cursor: 'pointer',
                                    color: theme.palette.one.main,
                                    backgroundColor: theme.palette.one.button,
                                    position: 'absolute',
                                    top: {xs:'30%',sm:"-10%"},  
                                    right: {xs:'10px',sm:"20px"},
                                    zIndex: 100,
                                    borderRadius: '50%',
                                    padding: '2px',
                                    border: "2px solid #575F6F",
                                    display: "flex"
                                }}
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <Controls.ChevronRight />
                            </Controls.Grid>

                            
                            <Controls.Grid item xs={12} >
                                <Swiper
                                    spaceBetween={30}
                                    pagination={false}
                                    modules={[Pagination]}
                                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                    breakpoints={{
                                        1440: { slidesPerView: 3 },
                                        1024: { slidesPerView: 2 },
                                        764: { slidesPerView: 2 },
                                        576: { slidesPerView: 1 },
                                        320: { slidesPerView: 1 },
                                    }}
                                >
                                    {content.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Controls.Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: "20px" ,border:"1px solid lightgray"}}>
                                                <Controls.Grid container justifyContent="center" alignItems="center">
                                                    <Controls.CardMedia
                                                        component='img'
                                                        src={item.img}
                                                        sx={{
                                                            height: '350px',
                                                            width: "100%",
                                                            objectFit: 'cover',
                                                            borderRadius: "30px ",
                                                            padding: { xs: "10px", sm: "20px" },
                                                            display: "block",
                                                            textAlign: "center",
                                                            margin: "auto",
                                                        }}
                                                    />
                                                </Controls.Grid>
                                                <Controls.CardContent>
                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption4' sx={{ fontSize: { xs: "14px", sm: "18px" }, fontWeight: "bold" }}>{item.text}</Controls.Typography>
                                                    </Controls.Grid>
                                                    <Controls.Grid item sx={{ display: 'flex', justifyContent: "space-between" }}>
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption4'>${item.low}</Controls.Typography>
                                                        </Controls.Grid>
                                                        <Controls.Grid item>
                                                            <Controls.Typography variant='caption4' sx={{ color: theme.palette.one.gray }}>${item.high}</Controls.Typography>
                                                        </Controls.Grid>
                                                    </Controls.Grid>
                                                    <Controls.LinearProgress
                                                        variant="determinate"
                                                        value={50}
                                                        sx={{
                                                            height: '5px',
                                                            marginY: '5px',
                                                            backgroundColor: theme.palette.one.lightGreen,
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: theme.palette.one.green,
                                                            }
                                                        }}
                                                    />
                                                    <Controls.CardActions>
                                                        <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} xs={12}>
                                                            <Controls.Grid item xs={7} sm={6} sx={{ textAlign: 'start' }}>
                                                                <Controls.Button
                                                                    variant='contained'
                                                                    sx={{
                                                                        backgroundColor: theme.palette.one.green,
                                                                        color: theme.palette.one.white,
                                                                        border: "2px solid #107A66",
                                                                        textTransform: "initial"
                                                                    }} onClick={handleDonatePage}
                                                                >
                                                                    Donate Now
                                                                </Controls.Button>
                                                            </Controls.Grid>
                                                            <Controls.Grid item xs={5} sm={6} sx={{ textAlign: 'end' }} mt={1}>
                                                                <Controls.Typography variant='caption4' sx={{ color: theme.palette.one.green }}>See Details</Controls.Typography>
                                                            </Controls.Grid>
                                                        </Controls.Grid>
                                                    </Controls.CardActions>
                                                </Controls.CardContent>
                                            </Controls.Card>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Controls.Grid>
                        </Controls.Grid>

                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    );
}

export default OurCampaignComponent;


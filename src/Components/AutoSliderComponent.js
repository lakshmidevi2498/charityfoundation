import React from 'react'
import Controls from '../commons/controls'
import theme from '../Utilities/Theme'
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const BlogSwiperComponent = () => {
    const content = [
        { img: "./assests/images/unsplash_Za9K8pNVepw.png", contact: "Ester Howard", date: "12 sep 2021", title: "Charity, Expectations vs. Reality", descp: "Lorem ipsum dolor sit amet, consetetur sadipscingsed diam nonumy  tempor invidunt ut labore etmagna aliquyam erat, sed diam voluptua....." },
        { img: "./assests/images/unsplash_6ner152Cc6c.png", contact: "Jacob Jones", date: "22 Aug 2021 ", title: "This Week Top Stories About Charity", descp: "Lorem ipsum dolor sit amet, consetetur sadipscingsed diam nonumy  tempor invidunt ut labore etmagna aliquyam erat, sed diam voluptua....." },
        { img: "./assests/images/unsplash_76HhAKI5JXI.png", contact: "Floyd Miles", date: "30 Jul 2021", title: "Why You Should Focus on Charity", descp: "Lorem ipsum dolor sit amet, consetetur sadipscingsed diam nonumy  tempor invidunt ut labore etmagna aliquyam erat, sed diam voluptua....." },
        { img: "./assests/images/unsplash_vadwO-1t9tw.png", contact: "Ester Howard", date: "12 sep 2021", title: "Charity, Expectations vs. Reality", descp: "Lorem ipsum dolor sit amet, consetetur sadipscingsed diam nonumy  tempor invidunt ut labore etmagna aliquyam erat, sed diam voluptua....." },
        { img: "./assests/images/unsplash_Mn7Wv6-FfCM.png", contact: "Jacob Jones", date: "22 Aug 2021", title: "This Week Top Stories About Charity", descp: "Lorem ipsum dolor sit amet, consetetur sadipscingsed diam nonumy  tempor invidunt ut labore etmagna aliquyam erat, sed diam voluptua....." },
        { img: "./assests/images/unsplash_i02U7tjG0SI.png", contact: "Floyd Miles", date: "30 Jul 2021", title: "Why You Should Focus on Charity", descp: "Lorem ipsum dolor sit amet, consetetur sadipscingsed diam nonumy  tempor invidunt ut labore etmagna aliquyam erat, sed diam voluptua....." },
        
    ]
    const swiperRef = useRef(null);
    return (
        <>
            <Controls.Grid container justifyContent='center' py={5} sx={{backgroundColor:"#EDF7F5"}}>
                <Controls.Grid item xs={10} lg={9} xl={10}sx={{ justifyContent: "center" }}>
                    <Controls.Grid item xs={12} sx={{ justifyContent: "space-between", display: "flex" }}>
                        <Controls.Grid item mb={3}>
                            <Controls.Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Controls.Typography variant='caption1' sx={{ fontFamily: 'Montserrat', fontSize: "18px", }} >
                                    Latest News
                                </Controls.Typography>
                                <Controls.Divider sx={{ flexBasis: '50px', height: '1px', width: "50px" }} />
                            </Controls.Box>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"22px",sm:"30px"}, color: theme.palette.one.green }}>Article You Also May Like</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item>
                            <Controls.Grid
                                sx={{
                                    cursor: 'pointer',
                                    color: theme.palette.one.main,
                                    backgroundColor:theme.palette.one.button,
                                    position: 'absolute',
                                    top: { xs: '57%', sm:"35%",md:"33%",lg: "28%",xl:"19%" },
                                    left: { xs: "10%",sm:"80%",md:"82%", lg: '1250px' ,xl:"2230px"},
                                    zIndex: 100,
                                    borderRadius: '50%',
                                    padding: '2px',
                                    transform: 'translateY(-50%)',
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
                                    backgroundColor:theme.palette.one.button,
                                    position: 'absolute',
                                    top: { xs: '57%', sm:"35%",md:"33%",lg: "28%",xl:"19%" },
                                    right: { xs: '40px',sm:"10%",md:"10%", lg: '13%',xl:"10%" },
                                    zIndex: 100,
                                    borderRadius: '50%',
                                    padding: '2px',
                                    transform: 'translateY(-50%)',
                                    border: "2px solid #575F6F",
                                    display: "flex"
                                }}
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <Controls.ChevronRight />
                            </Controls.Grid>
                        </Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid container justifyContent='center'>
                        <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
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
                                        <Controls.Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                            <Controls.CardMedia
                                                component='img'
                                                src={item.img}
                                                sx={{ height: '250px', objectFit: 'cover' }}
                                            />
                                            <Controls.CardContent sx={{padding:"20px"}}>
                                                <Controls.Grid item sx={{ display: 'flex', justifyContent: "space-between", color: theme.palette.one.gray }}>
                                                    <Controls.Grid item  sx={{display:"inline-flex"}} gap={{xs:0,sm:1}}>
                                                <Controls.PersonIcon  /><Controls.Typography variant='caption2' sx={{ color: "gray" }}>{item.contact}</Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Grid item  sx={{display:"inline-flex"}} gap={1}>
                                                    <Controls.CalendarMonthIcon/><Controls.Typography variant='caption2' >{item.date}</Controls.Typography>
                                                    </Controls.Grid>
                                                </Controls.Grid>
                                                <Controls.Grid item my={1}>
                                                    <Controls.Typography variant='caption2' sx={{ fontSize: {xs:"16px",md:"18px"}, fontWeight: "bold",}}>{item.title}</Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Typography variant='caption2' sx={{ color: theme.palette.one.lightgray }}>{item.descp}</Controls.Typography>
                                                <Controls.CardActions>
                                                <Controls.Button
                                                    variant={index === 0 ? 'contained' : 'outlined'}
                                                    sx={{
                                                        backgroundColor: index === 0 ? theme.palette.one.green : 'transparent',color: index === 0 ? theme.palette.one.white : theme.palette.one.green,border:"2px solid #107A66 ",
                                                        textTransform: "initial"
                                                    }}
                                                >
                                                    Read More
                                                </Controls.Button>
                                            </Controls.CardActions>
                                            </Controls.CardContent>
                                           
                                        </Controls.Card>
                                    </SwiperSlide>

                                ))}


                            </Swiper>
                            <div className="custom-swiper-pagination "></div>


                        </Controls.Grid>
                    </Controls.Grid>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default BlogSwiperComponent
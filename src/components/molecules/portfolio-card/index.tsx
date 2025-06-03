import { TextSecondary, TitleSecondary } from '@/components/atoms/titles'
import React from 'react'
import Card from '@/components/molecules/portfolio-card/card'
import { Portafolio } from '@/utils/constants'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const index = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <TitleSecondary title='Portafolio' />
            </div>
            <div className='text-center w-full max-w-[438px] mx-auto mt-10'>
                <TextSecondary text='Estos son los proyectos en los que he podido aportar y crear' />
            </div>
            <div className='mt-10'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {Portafolio.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                urlDeploy={item.urlDeploy}
                                urlRepo={item.urlRepo}
                                imagen={item.imagen}
                                titulo={item.titulo}
                                descripcion={item.descripcion}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default index
import { TextSecondary, TitleSecondary } from '@/components/atoms/titles'
import React from 'react'
import Card from '@/components/molecules/portfolio-card/card'
import { Portafolio } from '@/utils/constants'

const index = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <TitleSecondary title='Portafolio' />
            </div>
            <div className='text-center w-full max-w-[438px] mx-auto mt-10'>
                <TextSecondary text='Estos son los proyectos en los que he podido aportar mi conocimiento' />
            </div>
            <div className='mt-10 grid grid-cols-1 gap-6'>
                {Portafolio.map((item, index) => (
                    <Card
                        key={index}
                        url={item.url}
                        imagen={item.imagen}
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                    />
                ))}
            </div>
        </div>
    )
}

export default index
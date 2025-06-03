import React from 'react'
import { TitleSecondary, TextSecondary } from '@/components/atoms/titles'
import Card from '@/components/molecules/knowledge-card/card/index'
import { Knowledges } from '@/utils/constants'
const index = () => {
    return (
        <div className='mt-10'>
            <div className='text-center font-bold'>
                <b> <TitleSecondary title='Conocimiento' /></b>
            </div>
            <div className='text-center max-w-auto mx-auto mt-10 flex-wrap'>
                <TextSecondary text='A través de mi proceso en el mundo del desarrollo de software he podido aprender habilidades esenciales para las empresas para las cuáles he trabajado' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
                {Knowledges.map((item, index) => (
                    <Card
                        key={index}
                        icon={item.icono}
                        title={item.conocimiento}
                        text={item.descripcion}
                    />
                ))}
            </div>
        </div>
    )
}

export default index
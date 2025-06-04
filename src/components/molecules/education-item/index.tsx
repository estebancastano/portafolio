import React from 'react'
import Card from '@/components/molecules/education-item/card'
import { TextSecondary, TitleSecondary } from '@/components/atoms/titles'
import { Education } from '@/utils/constants'
const index = () => {
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <TitleSecondary title='Educación' />
            </div>
            <div className='text-center w-full max-w-auto mx-auto mt-10'>
                <TextSecondary text='Formación enfocada en el desarrollo de habilidades técnicas y teóricas aplicadas al campo de la tecnología y desarrollo de software.' />
            </div>
            <div className='bg-white mt-10 p-[1cm]'>
                {Education.map((item, index) => (
                    <React.Fragment key={index}>
                        <Card
                            institution={item.institucion}
                            cargo={item.cargo}
                            anio={item.anio}
                            certificate={item.certificacion}
                            description={item.descripcion}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default index
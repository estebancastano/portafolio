import React from 'react'
import ProfileCard from '@/components/molecules/profile-card/index'
import Name from '@/components/atoms/profile-name/index'
import {ProfilePrincipal} from '@/components/atoms/profile-image'
const index = () => {
    return (
        <div className='h-auto bg-gray-100 flex justify-center items-start'>
    <div className='w-screen  flex flex-col md:flex-row justify-between items-center md:p-10 bg-white rounded-md'>

        {/* Contenedor del ProfileCard */}
        <div className='flex flex-col justify-start items-start md:w-3/4 flex-wrap'>
            <ProfileCard
                title={
                    <>
                        <Name
                            name={'¡Hola! Soy Esteban Castaño'}
                            className='font-bold leading-tight text-center md:text-left'
                        />
                        <span className='text-textPrimary block text-center md:text-left'
                            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                            Desarrollador Full-Stack
                        </span>
                    </>
                }
                text='+1 año de experiencia como desarrollador Front-End en tecnologías como HTML, CSS, JavaScript, React, TypeScript, Astro.js, Next.js, MySQL, y otras más, con el conocimiento suficiente para desarrollar las soluciones requeridas'
                icon='formkit:arrowright'
            />
        </div>

        {/* Contenedor de la imagen */}
        <div className='w-full md:w-1/4 h-auto flex justify-center md:justify-end mt-4 md:mt-0 sm:rotate-3'>
            <div className='w-full h-full max-w-[200px] max-h-[300px] drop-shadow-2xl sm:max-w-[300px] sm:max-h-[400px]'>
                <ProfilePrincipal
                    src='/logos/profile.png'
                    alt='Imagen de perfil'
                    className='object-cover w-full h-full'
                />
            </div>
        </div>
    </div>
</div>





    )
}

export default index

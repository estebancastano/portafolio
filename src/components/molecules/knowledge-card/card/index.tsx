import React from 'react'
import { TitleTertiary, TextSecondary } from '@/components/atoms/titles'
import { Icon } from '@iconify/react/dist/iconify.js'

const index = ({ icon, title, text }: { icon: string, title: string, text: string }) => {
    return (
        <div className='bg-white flex flex-col items-center p-4 rounded-lg shadow-md w-auto h-auto '>
            <div className='mb-4 mt-4'>
                <Icon className='text-textPrimary h-[68px] w-[68px]' icon={icon} />
            </div>
            <div>
                <TitleTertiary title={title} />
            </div>
            <div>
                <TextSecondary text={text} />
            </div>
        </div>

    )
}

export default index
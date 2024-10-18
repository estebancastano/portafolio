import React from 'react'
import { TitlePrincipal, TextPrincipal } from '@/components/atoms/titles'
import Button from '@/components/atoms/cta-button/index'
const index = ({ title, text, icon }: { title: string, text: string, icon: string }) => {
    return (
        <div className='pr-2'>
            <div>
                <TitlePrincipal title={title} />
            </div>
            <div className='pb-2 pt-2'>
                <TextPrincipal text={text} />
            </div>
            <div className='flex justify-center md:justify-start'>
                <Button icon={icon} />
            </div>

        </div>
    )
}

export default index
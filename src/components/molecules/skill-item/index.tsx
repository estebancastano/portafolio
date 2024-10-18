import { TextTertiary, TitleQuaternary } from '@/components/atoms/titles'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const index = () => {
  return (
    <div>
      <div className="mb-4 text-left">
        <TitleQuaternary title="Habilidades extras" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Icon className='text-textPrimary h-[20px] w-[20px]' icon='f7:rectangle-on-rectangle-angled' />
          <TextTertiary text='Figma, Trello' />
        </div>
        <div className="flex items-center space-x-2">
          <Icon className='text-textPrimary h-[20px] w-[20px]' icon='f7:rectangle-on-rectangle-angled' />
          <TextTertiary text='Git, Github' />
        </div>
        <div className="flex items-center space-x-2">
          <Icon className='text-textPrimary h-[20px] w-[20px]' icon='f7:rectangle-on-rectangle-angled' />
          <TextTertiary text='Microsoft Azure' />
        </div>
      </div>
    </div>
  )
}

export default index
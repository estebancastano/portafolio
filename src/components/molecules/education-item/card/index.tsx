import { TagEducation, TextSecondary, TitleTertiary } from '@/components/atoms/titles'
import Separator from '@/components/atoms/separator-bar'
import React from 'react'

export default function EducationCard({ institution, anio, certificate, description, cargo }: { institution: string, anio: string, certificate: string, description: string, cargo: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white">
      {/* Parte izquierda: Institución y año */}
      <div>
        <div className="mb-2">
          <TitleTertiary title={institution} />
        </div>
        <div className='pb-2'>
          <TextSecondary text={cargo} />
        </div>
        <div>
          <TagEducation Text={anio} />
        </div>
      </div>

      {/* Parte derecha: Certificacion y Resumen */}
      <div>
        <div className="mb-2">
          <TitleTertiary title={certificate} />
        </div>
        <div>
          <TextSecondary text={description} />
        </div>
      </div>
      <Separator />
    </div>
  )
}
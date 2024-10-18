import { ProgressBar } from '@/components/atoms/progress-bar'
import { TextTertiary, TitleQuaternary } from '@/components/atoms/titles'
import { ProgrammingLanguages } from '@/utils/constants'
import React from 'react'

const index = () => {
    return (
        <div>
            <div className="mb-4 text-left">
                <TitleQuaternary title="Lenguajes de programación" />
            </div>
            <div className="space-y-3">
                {ProgrammingLanguages.map((language, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <TextTertiary text={language.lenguaje} />
                            <TextTertiary text={language.nivel} />
                        </div>
                        <ProgressBar porcentaje={language.nivel} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default index
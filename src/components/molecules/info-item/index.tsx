import { DisponibilityYes, TextBlack } from '@/components/atoms/titles'
import React from 'react'

const index = ({ edad, pais, disponibilidad, direccion }: { edad: string, pais: string, disponibilidad: string, direccion: string }) => {
    return (
        <div className="mt-2">
            <table className="text-left">
                <tbody className="space-y-3">
                    <tr className="h-8">
                        <td className="pr-4">
                            <TextBlack text='Edad: ' />
                        </td>
                        <td className="text-right">
                            <TextBlack text={edad} />
                        </td>
                    </tr>
                    <tr className="h-8">
                        <td className="pr-4">
                            <TextBlack text='País: ' />
                        </td>
                        <td className="text-right">
                            <TextBlack text={pais} />
                        </td>
                    </tr>
                    <tr className="h-8">
                        <td className="pr-4">
                            <TextBlack text='Disponibilidad: ' />
                        </td>
                        <td className="text-right">
                            <DisponibilityYes text={disponibilidad} />
                        </td>
                    </tr>
                    <tr className="h-8">
                        <td className="pr-4">
                            <TextBlack text='Dirección: ' />
                        </td>
                        <td className="text-right">
                            <TextBlack text={direccion} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default index
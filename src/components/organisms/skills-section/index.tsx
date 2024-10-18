import React from 'react'
import { ProfileLeft } from '@/components/atoms/profile-image'
import { TitleQuaternary, TextSecondary } from '@/components/atoms/titles'
import Separator from '@/components/atoms/separator-bar'
import Info from '@/components/molecules/info-item'
import LanguagesSection from '@/components/molecules/languages'
import ProgrammingSection from '@/components/molecules/programming-languages'
import SkillsSection from '@/components/molecules/skill-item'
function MenuLeft() {
    return (
        <div className="flex flex-col p-6 h-screen overflow-y-auto scrollbar-hide">
            <div>
                <div>
                    <div>
                        <ProfileLeft
                            src='/logos/profile.png'
                            alt='Foto de perfil'
                        />
                    </div>
                    <div>
                        <TitleQuaternary title='Esteban Castaño' />
                    </div>
                    <div>
                        <TextSecondary text='Full-Stack Developer' />
                    </div>
                    <div className='text-center'>
                        <Separator />
                    </div>
                </div>
                <div>
                    <div>
                        <Info
                            edad='24'
                            pais={'🇨🇴'}
                            direccion='Antioquia'
                            disponibilidad='Disponible'

                        />
                        <Separator />
                    </div>

                </div>
                <div>
                    <div>
                        <LanguagesSection />
                    </div>
                    <div>
                        <Separator />
                    </div>
                </div>
                <div>
                    <div>
                    <ProgrammingSection/>
                    </div>
                    <div>
                    <Separator />
                    </div>
                </div>
                <div>
                    <div>
                    <SkillsSection/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuLeft
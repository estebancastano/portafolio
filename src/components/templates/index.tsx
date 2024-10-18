import React from 'react';
import PrincipalContent from '@/components/organisms/principal-content';
import MenuRight from '@/components/organisms/social-side-bar';
import MenuLeft from '@/components/organisms/skills-section/index'
const Layout: React.FC = () => {
    return (
        <div className='flex h-screen'>
            <div className="relative min-h-screen flex h-screen overflow-hidden">
                {/* Aside izquierdo */}
                <div className='lg:block w-[305px] hidden bg-white p-4 sticky top-0 h-screen text-black shadow-lg'>
                    <MenuLeft />
                </div>


                {/* Contenido principal */}
                <div className='w-full bg-gray-100 overflow-y-scroll pl-6 pr-6 scrollbar-hide'>
                    <PrincipalContent />
                </div>

                {/* Aside derecho */}
                <div className='md:block w-[90px] hidden bg-white p-2 sticky top-0 h-screen text-black shadow-lg'>
                    <MenuRight />
                </div>
            </div>
        </div>
    );
};

export default Layout;
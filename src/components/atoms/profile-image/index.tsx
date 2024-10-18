import React from 'react';

const ProfilePrincipal = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <img src={src} alt={alt} className='' />
    );
};

const ProfileLeft = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <div className="relative w-[150px] h-[150px]">
            <img
                src={src}
                alt={alt}
                className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-[16px] h-[16px] bg-[#1eff65] rounded-full border-2 border-[#1eff65] transform translate-x-[-13px] translate-y-[-13px] animate-pulse">
            </div>
        </div>
    );
};
export {ProfilePrincipal, ProfileLeft};


const TitlePrincipal = ({ title }: { title: string }) => {
    return (
        <h1 className='font-bold text-textBlack text-5xl text-center sm:text-6xl sm:text-left'>
            {title}
        </h1>
    );
};

const TitleSecondary = ({ title }: { title: string }) => {
    return (
        <h1 className='font-bold text-textBlack text-3xl text-center sm:text-4xl'>
            {title}
        </h1>
    );
};

const TitleTertiary = ({ title }: { title: string }) => {
    return (
        <h1 className='font-semibold text-textBlack text-xl text-center sm:text-2xl sm:text-left'>
            {title}
        </h1>
    );
};

const TitleQuaternary = ({ title }: { title: string }) => {
    return (
        <h1 className='font-semibold text-textBlack text-lg text-center sm:text-xl sm:text-left'>
            {title}
        </h1>
    );
};

const TextPrincipal = ({ text }: { text: string }) => {
    return (
        <p className='font-normal text-paragraphFont text-base text-center sm:text-lg sm:text-left'>
            {text}
        </p>
    );
};

const TextSecondary = ({ text }: { text: string }) => {
    return (
        <p className='font-normal text-paragraphFont text-base text-center sm:text-left '>
            {text}
        </p>
    );
};

const TextTertiary = ({ text }: { text: string }) => {
    return (
        <p className='font-normal text-paragraphFont text-sm text-center sm:text-left '>
            {text}
        </p>
    );
};

const DisponibilityYes = ({ text }: { text: string }) => {
    return (
        <h6 className='text-[#1eff65] font-inter text-[15px] leading-none tracking-tight'>
            {text}
        </h6>
    );
};

const DisponibilityNo = ({ text }: { text: string }) => {
    return (
        <h6 className='text-[#ff1e1e] font-inter text-[15px] leading-none tracking-tight'>
            {text}
        </h6>
    );
};

const TextBlack = ({ text }: { text: string }) => {
    return (
        <p className='font-normal text-black text-base text-center sm:text-left '>
            {text}
        </p>
    );
};

const TagEducation = ({ Text }: { Text: string }) => {
    return (
        <span className='bg-textPrimary text-white px-3 py-1 rounded sm:text-left'>
            {Text}
        </span>
    );
};

export { TitlePrincipal, TitleSecondary, TitleTertiary, TitleQuaternary, TextPrincipal, TextSecondary, TextTertiary, TagEducation, TextBlack, DisponibilityYes, DisponibilityNo};
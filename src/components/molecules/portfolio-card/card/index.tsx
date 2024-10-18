import { TextSecondary, TitleQuaternary } from "@/components/atoms/titles"

function PortfolioCard({ url, imagen, titulo, descripcion }: { url: string, imagen: string, titulo: string, descripcion: string }) {
    return (
        <div className='w-[310px] h-auto bg-white rounded-lg shadow-md cursor-pointer hover:scale-110 hover:border-textPrimary hover:border-4 hover:duration-200 hover:ease-out duration-200'>
            <div className='mb-4'>
                <img src={imagen} />
            </div>
            <div className='p-6'>
                <div className='mb-2'>
                    <TitleQuaternary title={titulo} />
                </div>
                <div className='mb-4'>
                    <TextSecondary text={descripcion} />
                </div>
                <div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className='text-textPrimary hover:underline'>Leer más...</a>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard
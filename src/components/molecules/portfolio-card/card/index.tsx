import { TextSecondary, TitleQuaternary } from "@/components/atoms/titles"

function PortfolioCard({ urlDeploy, urlRepo, imagen, titulo, descripcion }: { urlDeploy: string, urlRepo: string, imagen: string, titulo: string, descripcion: string }) {
    return (
        <div className='w-full h-full bg-white rounded-lg shadow-md cursor-pointer hover:scale-110 hover:border-textPrimary hover:border-4 hover:duration-200 hover:ease-out duration-200'>
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
                <div className='flex flex-col gap-2'>
                    <div>
                        <a href={urlDeploy} target="_blank" rel="noopener noreferrer" className='text-textPrimary hover:underline'>Despliegue</a>
                    </div>
                    <div>
                        <a href={urlRepo} target="_blank" rel="noopener noreferrer" className='text-textPrimary hover:underline'>Repositorio</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioCard
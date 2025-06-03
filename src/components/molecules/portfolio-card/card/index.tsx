import { TextTertiary, TitleQuaternary } from "@/components/atoms/titles"
import { FiExternalLink } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

function PortfolioCard({
    urlDeploy,
    urlRepo,
    imagen,
    titulo,
    descripcion
}: {
    urlDeploy: string,
    urlRepo: string,
    imagen: string,
    titulo: string,
    descripcion: string
}) {
    return (
        <div
            role="article"
            aria-label={`Proyecto ${titulo}`}
            className="w-full h-full bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-gray-50 transition duration-200 ease-out"
        >

            <div className="mb-4">
                <img
                    src={imagen}
                    alt={`Captura del proyecto ${titulo}`}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </div>
            <div className="p-6">
                <div className="mb-2">
                    <TitleQuaternary title={titulo} />
                </div>
                <div className="mb-4">
                    <TextTertiary text={descripcion} />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FiExternalLink className="text-textPrimary" />
                        <a
                            href={urlDeploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textPrimary hover:underline"
                        >
                            Despliegue
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGithub className="text-textPrimary" />
                        <a
                            href={urlRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-textPrimary hover:underline"
                        >
                            Repositorio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard

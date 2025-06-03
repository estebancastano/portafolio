import { LucideIcon } from 'lucide-react'
import { TitleTertiary, TextSecondary } from '@/components/atoms/titles'

const index = ({ icon: Icon, title, text }: { icon: LucideIcon, title: string, text: string }) => {
    return (
        <div className="bg-white flex flex-col items-center p-4 rounded-lg shadow-md w-auto h-auto group transition duration-200 hover:shadow-2xl ease-out">
            <div className="mb-4 mt-4">
                <Icon className="h-[68px] w-[68px] text-textPrimary" />
            </div>
            <div>
                <TitleTertiary title={title}/>
            </div>
            <div>
                <TextSecondary text={text}/>
            </div>
        </div>
    )
}

export default index

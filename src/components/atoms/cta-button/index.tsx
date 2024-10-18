import Icon from '../icon/index'
const index = ({icon}:{icon: string}) => {
    return (
        <button className="w-[154px] h-[51px] bg-textPrimary text-white flex justify-center items-center cursor-pointer rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-textSecondary duration-200">
            Contáctame
            <Icon icon={icon}/>
        </button>
    )
}

export default index
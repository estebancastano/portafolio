import { Icon } from "@iconify/react/dist/iconify.js";
import React from 'react'

function MenuRight() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center pb-6">Links</div>
            <div>
                <ul>
                    <li className="pb-2">
                        <a href="https://www.linkedin.com/in/estebanandresc/" target="_blank" rel="noopener noreferrer"
                        className="block text-center p-3 rounded-full bg-textPrimary hover:bg-textSecondary text-white w-[48px] h-[48px] justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 text-2xl">
                            <Icon icon="mdi:linkedin" /> 
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/estebancastano" target="_blank" rel="noopener noreferrer"
                        className="block text-center p-3 rounded-full bg-textPrimary hover:bg-textSecondary text-white w-[48px] h-[48px] justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 text-2xl">
                            <Icon icon="mdi:github" /> 
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default MenuRight

import React from 'react'
import { PinContainer } from './ui/3d-pin'

interface cardPropsInterface {
    title?: string;
    href?: string;
    className?: string;
    containerClassName?: string;
    target?: string;
    description?: string;
}

const ProjectCards: React.FC<cardPropsInterface> = ({ title, href, target, className, containerClassName, description
}) => {
    return (
        <PinContainer
            title={title}
            href={href}
            target={target || "_blank"}
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">
                        {description}
                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
        </PinContainer >
    )
}

export default ProjectCards
import type { ReactNode } from "react";


interface UeserCardProps {
    id : string ;
    name?:string;
    subtitle?:ReactNode

}

export function UserCard({id, name, subtitle}:UeserCardProps) {
    
    const display_Name = name ?? "guest"

    return (
        <div>
            <strong>{id}</strong>
            <p>{display_Name}</p>
            {
                subtitle ? <p>{subtitle}</p>: 'subtitle is not present'
            }
        </div>
    )
}
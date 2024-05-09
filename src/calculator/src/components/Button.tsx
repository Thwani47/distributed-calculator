import { MouseEvent } from 'react'

type ButtonProps = {
    className: string;
    value: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, value, onClick }: ButtonProps) {
    return (
        <button className={className} onClick={onClick}>{value}</button>
    )
}

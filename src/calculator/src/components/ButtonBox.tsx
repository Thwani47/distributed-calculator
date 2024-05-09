import { ReactNode } from 'react'

type ButtonBoxProps = {
    children: ReactNode
}
export default function ButtonBox({ children }: ButtonBoxProps) {
    return (
        <div className='button-box'>
            {children}
        </div>
    )
}

import { Textfit } from 'react-textfit'

type ScreenProps = {
    value: string;
}
export default function Screen({ value }: ScreenProps) {
    return (
        <Textfit className='screen' mode='single' max={70}>{value}</Textfit>
    )
}

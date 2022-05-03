import { ButtonLike, LikeContainer } from "./style"
import { useState } from 'react'
import plus from '../../images/icon-plus.svg'
import minus from '../../images/icon-minus.svg'

export default function Like({score, desktop}) {
    const [like, setLike] = useState(score)
    const handleClickPlus = () => setLike(previus => previus+1)

    const handleClickMinus = () => setLike(previus => previus-1)
    
    return <LikeContainer desktop={desktop}>
        <ButtonLike onClick={handleClickPlus}>
            <img src={plus} alt="Plus" />
        </ButtonLike>
        <p style={{margin:'5px 10px'}}>{like}</p>
        <ButtonLike onClick={handleClickMinus}>
        <img src={minus} alt="Minuss" />
        </ButtonLike>
    </LikeContainer>   
}
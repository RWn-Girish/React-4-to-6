import { memo } from 'react';


const Button = memo(({name, handelClick}) => {
    console.log("Render Time : ", name);
    return(
        <>
            <button onClick={handelClick}>{name}</button>
        </>
    )
})

export default Button;
import { useState, useCallback } from "react";
import Button from "./Button";
import External from "./Extenal";

const Counter = () => {
    const [count, setCount] = useState(0);

    // const handelInc = () => {
    //     console.log("Increment Inside");
    //     setCount(count => count + 1);
    // }


    const handelInc = useCallback(()=> {
        console.log("INC");
        setCount(count => count + 1);
    }, [])

    const handelDec = useCallback(() => {
        console.log("Decrment Inside");
        setCount(count => count - 1);
    },[])
    return (
        <>

        <External />
        <h3> Count: {count}</h3>
        <Button name="Increment" handelClick={handelInc} />
        <Button name="Decrement" handelClick={handelDec} />
        </>
    )
}

export default Counter;
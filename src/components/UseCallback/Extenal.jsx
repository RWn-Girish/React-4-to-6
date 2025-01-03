import { useMemo } from "react";

const External = () => {
    console.log("Render");
    const total = useMemo(() => {
        let t = 0;
        for(let i =0; i<=15000000;i++){
            t = t + i;
        }
        return t;
    }, [])



    return (
        <>
        <p>Total : {total}</p>
        </>
    )
};

export default External;
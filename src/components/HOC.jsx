// High Order Function => agr = Component

const HOC = (Component) =>{

    return ({isLoading , ...props}) => {
        if(isLoading){
            return <Component props={props} />
        }else{
            return <h2>Loading....</h2>
        }
    }

};

export default HOC;
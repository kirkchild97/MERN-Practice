import { useParams } from "react-router";

const CheckParam = (props) => {
    const {
        check
    } = useParams();
    
    return (
        <div>
            {isNaN(+check) ? <h1>The Word is: {check}</h1> : <h1>The Number is: {check}</h1>}
        </div>
    );
}

export default CheckParam;
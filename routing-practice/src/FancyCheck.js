import { useParams } from "react-router"

const FancyCheck = () => {
    const {
        word,
        textColor,
        bgColor
    } = useParams();
    console.log(`${word} ${textColor} ${bgColor}`);

    const styleText = {
        color : textColor,
        'background-color' : bgColor
        }
    
    return (
        <div>
            <h1 style={styleText}>The word is: {word}</h1>
        </div>
    );
}

export default FancyCheck;
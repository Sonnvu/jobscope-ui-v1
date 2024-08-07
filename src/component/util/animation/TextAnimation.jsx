import React, {useState} from "react";
import TextTransition, {presets} from "react-text-transition";

export default function TextAnimation({TEXTS}) {
    const [index, setIndex] = useState(0);

    React.useState( () => {
        const intervalId = setInterval(() => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId)
    }, []);

    return (
        <text className="text-blue-500 brightness-90">
            <TextTransition springConfig={presets.slow}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </text>
    )
}
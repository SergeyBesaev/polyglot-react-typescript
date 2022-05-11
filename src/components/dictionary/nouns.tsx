import React, {useState} from 'react';
import axios from "axios";
import TranslateForm from "../translate.form";

const Nouns = () => {

    const title: string = 'Существительные'
    const description: string = 'Здесь собраны самые распространенные существительные английского языка'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/dictionary/nouns'

    async function getWordsFromServer() {
        const response = await axios.get(url)
        setWords(response.data.data)
    }


    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            {words.length === 0
                ? <button onClick={getWordsFromServer}>Start lesson</button>
                : <TranslateForm words={words}/>
            }
        </div>
    );
};

export default Nouns;

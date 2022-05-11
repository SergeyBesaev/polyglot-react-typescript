import React, {useState} from 'react';
import {WordForm} from "./wordForm";
import Result from "./result";
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const TranslateForm = ({...props}) => {

    const words: WordForm[] = props.words as WordForm[]

    let [numWords, setNumWords] = useState(0)
    let [word, setWord] = useState(getFirstWord)
    let [chekWord, setCheckWord] = useState('')
    let [result, setResult] = useState('')
    let [count, setCount] = useState(0)
    let [skip, setSkip] = useState(0)

    function getFirstWord(): WordForm {
        return words.shift() as WordForm
    }

    function checkTranslate() {
        setCount(count += 1)
        if (chekWord === word.eng) {
            setNumWords(numWords += 1)
            setResult('Правильно')
            getNextWord()
        } else {
            setResult('Неправильно')
        }
    }

    function handleKeyPress(e: { key: string }) {
        if (e.key === 'Enter') {
            checkTranslate()
        }

    }

    function getNextWord() {
        const verb = words.shift()
        if (verb) {
            setWord(verb)
            setCheckWord('')
            setResult('')
        } else {
            setCheckWord('end')
        }
    }

    return (

        <Container className="p-3">

        <div>
            {chekWord !== 'end'
                ?
                <div>
                    <h1>{word.rus}</h1>
                    <h4>Подсказка</h4>
                    <input
                        value={chekWord}
                        placeholder='Введите перевод'
                        onChange={event => setCheckWord(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <Button onClick={getNextWord}>Пропустить</Button>
                    <Button onClick={checkTranslate}>Проверить</Button>
                    <h5>{result}</h5>
                </div>
                : <Result numWordsProps={numWords} countTry={count}/>
            }
        </div>
        </Container>
    );
};

export default TranslateForm;

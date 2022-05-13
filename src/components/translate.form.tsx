import React, {useState} from 'react';
import {WordForm} from "./wordForm";
import Result from "./result";
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const TranslateForm = ({...props}) => {

    const words: WordForm[] = props.words as WordForm[]

    let [countAllWords, setCountAllWords] = useState(0)
    let [countSkip, setCountSkip] = useState(0)
    let [countSuccessfully, setCountSuccessfully] = useState(0)
    let [countWithPrompting, setCountWithPrompting] = useState(0)

    const [clickMouse, setClickMouse] = useState(false)

    let [checkWord, setCheckWord] = useState(getFirstWord)
    let [inputWord, setInputWord] = useState('')
    let [successCheck, setSuccessCheck] = useState('')

    function getFirstWord(): WordForm {
        setCountAllWords(countAllWords += 1)
        return words.shift() as WordForm
    }

    function checkTranslate() {
        if (inputWord === checkWord.eng) {
            setCountAllWords(countAllWords += 1)
            setCountSuccessfully(countSuccessfully += 1)
            getNextWord()
        } else {
            setSuccessCheck('Неправильно')
        }
    }

    function handleKeyPress(e: { key: string }) {
        if (e.key === 'Enter') {
            checkTranslate()
        }
    }

    function handleMousePress() {
        if (!clickMouse) {
            setCountWithPrompting(countWithPrompting += 1)
            setClickMouse(true)
        }
    }

    function getNextWord() {
        setCountAllWords(countAllWords += 1)
        setClickMouse(false)
        const verb = words.shift()
        if (verb) {
            setCheckWord(verb)
            setInputWord('')
            setSuccessCheck('')
        } else {
            setInputWord('end')
        }
    }

    function skipWord() {
        setCountSkip(countSkip += 1)
        return getNextWord()
    }


    return (

        <Container className="p-3">

            <div>
                {inputWord !== 'end'
                    ?
                    <div>
                        <h1>{checkWord.rus}</h1>
                        {!clickMouse
                            ? <h4>Подсказка</h4>
                            : <h4>{checkWord.eng}</h4>
                        }
                        <input
                            value={inputWord}
                            placeholder='Введите перевод'
                            onChange={event => setInputWord(event.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <Button onClick={skipWord}>Пропустить</Button>
                        <Button onClick={handleMousePress}>Подсказка</Button>
                        <h5>{successCheck}</h5>
                    </div>
                    : <Result countAllWords={countAllWords} countSuccessfully={countSuccessfully} countSkip={countSkip}
                              countWithPrompting={countWithPrompting}/>
                }
            </div>
        </Container>
    );
};

export default TranslateForm;

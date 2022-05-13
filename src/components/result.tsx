import React from 'react';

const Result = ({...props}) => {

    const numWords: number = props.numWordsProps
    const successfully: number = 0
    const withPrompting: number = 0
    const tryCount: number = props.countTry
    const skipWords: number = props.skip


    return (
        <>
            <h1>Страница результата</h1>
            <h2>Всего слов: {numWords}</h2>
            <h2>Кол-во попыток: {tryCount}</h2>
            <h2>Пропустили: {skipWords}</h2>
            <button>Пройти уровень еще раз</button>
            <button>Перейти к следующему уроку</button>
        </>
    );
};

export default Result;

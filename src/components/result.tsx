import React from 'react';

const Result = ({...props}) => {

    const numWords: number = props.numWordsProps
    const tryCount: number = props.countTry
    const skip: number = props.skip


    return (
        <>
            <h1>Страница результата</h1>
            <h2>Всего слов: {numWords}</h2>
            <h2>Кол-во попыток: {tryCount}</h2>
            <h2>Пропустили: {skip}</h2>
            <button>Пройти уровень еще раз</button>
            <button>Перейти к следующему уроку</button>
        </>
    );
};

export default Result;

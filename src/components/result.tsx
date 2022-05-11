import React from 'react';

const Result = ({...props}) => {

    return (
        <>
            <h1>Страница результата</h1>
            <h2>Всего слов: {props.numWordsProps}</h2>
            <h2>Кол-во попыток: {props.countTry}</h2>
            <button>Пройти уровень еще раз</button>
            <button>Перейти к следующему уроку</button>
        </>
    );
};

export default Result;

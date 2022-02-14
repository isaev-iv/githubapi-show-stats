import React from "react";
import EmptyBlock from "./components/EmptyBlock.jsx";
import Phrase from "./components/Phrase";

import "./App.css";

const App = () => {
  const [phrasesList, setPhrasesList] = React.useState([]);
  const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый",
  ];
  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак",
  ];

  /* Функция генерации рандомных числовых значений */
  const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  /* Функция генерации рандомных словосочетаний */
  const handleClickGenerate = () => {
    const randomFirstElem = Math.floor(Math.random() * adjectivesArr.length);
    const randomSecondElem = Math.floor(Math.random() * adjectivesArr.length);
    const randomNounsElem = Math.floor(Math.random() * nounsArr.length);

    setPhrasesList((prev) => [
      `${adjectivesArr[randomFirstElem]} ${adjectivesArr[randomSecondElem]} ${nounsArr[randomNounsElem]}`,
      ...prev,
    ]);
  };

  /* Функция очистки массива */
  const handleClickClear = () => {
    setPhrasesList([]);
  };

  return (
    <div className="wrapper">
      <div className="list"></div>
      {phrasesList.length !== 0 ? (
        <div className="list">
          <div className="ghostName">
            <img
              src="https://res.cloudinary.com/dfnhxiq6j/image/upload/v1640354646/ghost_lztiyl.png"
              width="32px"
              height="32px"
              alt="Ghost"
            />
          </div>
          {phrasesList.map((item, index) => (
            <div className="block" key={index}>
              <Phrase text={item} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyBlock />
      )}

      <button className="btn btn_generate" onClick={handleClickGenerate}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={handleClickClear}>
        Очистить
      </button>
    </div>
  );
};

export default App;

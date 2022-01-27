import React from "react";
import "../styles/style3.css";

const tabs = [
  {
    id: 1,
    question: "Сколько всего мест в доме?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!",
  },
  {
    id: 2,
    question: "Самая дорогая квартира?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.",
  },
  {
    id: 3,
    question: "Могу ли я отменить бронирование?",
    answer: "Да, вы можете отменить забронированную квартиру в течение 3 дней.",
  },
  {
    id: 4,
    question: "Можно ли купить квартиру?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.",
  },
];

const Tab = () => {
  const [activeId, setActiveId] = React.useState(null);

  const tabToggle = (id) => {
    activeId !== id ? setActiveId(id) : setActiveId(null);
  };
  return (
    <div className="app-tabs">
      {tabs.map((item, id) => {
        return (
          <div key={id} className={activeId === id ? "tab active" : "tab"}>
            <label htmlFor="tab-one" onClick={() => tabToggle(id)}>
              {item.question}
            </label>
            <div className="tab-content">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Tab;

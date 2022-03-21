import React from "react";
import ListOfComments from "./components/ListOfComments";
import AddComments from "./components/AddComments";

export default function App() {
  //Сохраняем все комменты из формы
  const [comments, setComments] = React.useState([]);

  // Удаляем элемент, индексы которого соответсвуют
  // const deleteComment = (index) => {
  //   setComments(comments.filter((_, i) => i !== index));
  // };

  //Отлавливаем изменения стейта с комментариями
  React.useEffect(() => {
    setComments([...JSON.parse(localStorage.getItem("comments"))]);
  }, []);

  //Сохраняем все комментарии или пустой массив
  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="App">
      <ListOfComments comments={comments} />
      <AddComments setComments={setComments} comments={comments} />
    </div>
  );
}

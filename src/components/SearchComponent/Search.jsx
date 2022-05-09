import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticleByTitle } from "../../features/news/newsSlice";

export const SearchComponent = () => {
  const { news } = useSelector((state) => state.news);
  const { title } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(title);
    dispatch(getArticleByTitle(title));
  }, [title]);
  const article = news.map((item) => {
    console.log(item);
    <div>{item.title}</div>;
  });
  return <div>{article}</div>;
};

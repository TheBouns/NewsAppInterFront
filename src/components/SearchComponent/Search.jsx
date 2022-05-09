import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArticleByTitle } from "../../features/news/newsSlice";
import { NewsComponent } from "../NewsComponent/news";

export const SearchComponent = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getArticleByTitle(title));
  }, []);
  console.log(news);
  //   const finded = news.map((item) => {
  //     return <p>{item.title}</p>;
  //   });

  return <div>hey</div>;
};

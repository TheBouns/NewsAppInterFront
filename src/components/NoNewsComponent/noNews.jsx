import { BsNewspaper } from "react-icons/bs";
export const NoNewsFoundComponent = () => {
  return (
    <div id="not-found-container">
      <BsNewspaper className="icon-size" />
      <h2 className="not-found-title">Not news Found...</h2>
      <h3>Sometimes we dont have all the info.</h3>
    </div>
  );
};

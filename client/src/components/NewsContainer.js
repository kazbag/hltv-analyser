import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { getNews } from "../redux";

const NewsContainer = (props) => {
  const numOfNews = useSelector((state) => state.news.numOfNews);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Latest news - {numOfNews}</h3>
      <button onClick={() => dispatch(getNews())}>Add news</button>
    </div>
  );
};

export default connect()(NewsContainer);

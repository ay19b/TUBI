import React from "react";
import Movies from "./movies";
import MoviesObj from "./TMDB";

const CategoryWise = () => {
  return (
    <div className="">
      {MoviesObj.map((Obj, Ind) => {
        return <Movies Props={Obj} key={Ind} />;
      })}
    </div>
  );
};

export default CategoryWise;
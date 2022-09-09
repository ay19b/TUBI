import React from "react";
import getStaticProps from "./movies";
import MoviesObj from "./TMDB";
import Movies from "./movies";

const CategoryWise = () => {
  return (
    <div className="">
      {MoviesObj.map((Obj, Ind) => {
        return <Movies Request={Obj} key={Ind} />;
      })}
    </div>
  );
};

export default CategoryWise;
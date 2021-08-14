import React from "react";
import Trophy from "../../../assets/trophy.png";
import Failed from "../../../assets/crying.png";
import classes from "./rank.module.css";
const ShowRank = (props) => {
  const percentage = Math.round((props.score / props.total) * 100);
  let image = percentage > 40 ? Trophy : Failed;
  console.log(!props.isQuizFinished);
  return (
    <div className={classes.rankModal}>
      <figure>
        <img src={image} alt="" className="img-fit" />
      </figure>
      <h2>{percentage > 40 ? "congratulations!!" : "better luck next time"}</h2>
      {props.timeOver && !props.isQuizFinished && <h4>Time Out</h4>}
      <h3>you acheive {percentage}% marks</h3>
      <h6>
        score {props.score}/{props.total}
      </h6>
    </div>
  );
};

export default ShowRank;

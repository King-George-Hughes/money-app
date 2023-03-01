import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-2">
            <img src={props.data.img} alt="" />
          </div>
          <div className="col-10">
            <h1>{props.data.title}</h1>
            <p>{props.data.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

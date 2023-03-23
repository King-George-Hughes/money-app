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
            <h1 className="fs-2 fw-bold ms-3" style={{ color: "#004289" }}>
              {props.data.title}
            </h1>
            <p className="fs-3 fw-normal ms-3">{props.data.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

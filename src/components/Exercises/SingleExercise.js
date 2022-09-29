import React from 'react';

const SingleExercise = (props) => {
  const exercise = props.exercise;
  const { name, ages, times, details, img } = exercise;
  const handlerAddToList = props.handlerAddToList;
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="single-excersie">
        <div className="card border-0 rounded-4 p-4 shadow-sm">
          <div className="card-body border-0 p-0">
            <img src={img} className="card-img-top rounded-4" alt={name} />
            <h5 className="card-title pt-4">{name}</h5>
            <p className="card-text">{details}</p>
            <p>For Age : {ages}</p>
            <p>Time required : {times}s</p>
          </div>
          <button onClick={() => handlerAddToList(exercise)} className="btn btn-add-list w-100">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default SingleExercise;
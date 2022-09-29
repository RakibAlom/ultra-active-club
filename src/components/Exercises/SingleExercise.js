import React from 'react';

const SingleExercise = (props) => {
  const { exercise, handlerAddToList } = props;
  const { name, ages, times, details, img } = exercise;
  return (
    <div className="col-xl-4 col-lg-6 col-12 mb-4">
      <div className="single-excersie">
        <div className="card border-0 rounded-4 p-4 shadow-sm">
          <div className="card-body border-0 p-0">
            <img src={img} className="card-img-top rounded-4" alt={name} />
            <h5 className="card-title pt-4 fw-semibold">{name}</h5>
            <p className="card-text text-secondary">{details}</p>
            <p>For Age : <span className='fw-semibold'>{ages}</span></p>
            <p>Time required : <span className='fw-semibold'>{times}s</span></p>
          </div>
          <button onClick={() => handlerAddToList(exercise)} className="btn btn-add-list w-100">Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default SingleExercise;
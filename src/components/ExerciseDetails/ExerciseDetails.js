import React from 'react';
import BreakTimes from './BreakTimes';
import './ExerciseDetails.css';

const ExerciseDetails = (props) => {
  const exerciseTimes = props.exerciseTimes;
  console.log(exerciseTimes);
  return (
    <div>
      <BreakTimes></BreakTimes>
      <div className='exercise-details'>
        <h4 className='pt-5 pb-2'>Exercise Details</h4>
        <div className="exercise-single-details d-flex justify-content-between mb-4 py-3 px-3 rounded-3">
          <span className='fw-semibold'>Exercise time</span>
          <span className='text-secondary'> {exerciseTimes} seconds</span>
        </div>
        <div className="exercise-single-details d-flex justify-content-between mb-4 py-3 px-3 rounded-3">
          <span className='fw-semibold'>Break time</span>
          <span className='text-secondary'>20 seconds seconds</span>
        </div>
        <button className='btn btn-lg activity-btn w-100 mt-3'>Activity Completed</button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
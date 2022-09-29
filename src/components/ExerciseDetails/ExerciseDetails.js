import React, { useEffect, useState } from 'react';
import BreakTimes from './BreakTimes';
import './ExerciseDetails.css';

const ExerciseDetails = (props) => {
  const { exerciseTimes } = props;
  const [breakTimes, setBreakTimes] = useState(20);
  const handleBreakTimes = (newBreakTimes) => {
    setBreakTimes(newBreakTimes);
    localStorage.setItem('break-times', JSON.parse(newBreakTimes));
  }
  useEffect(() => {
    const breakTime = breakTimes;
    setBreakTimes(breakTime)
  }, [breakTimes]);

  return (
    <div>
      <BreakTimes handleBreakTimes={handleBreakTimes}></BreakTimes>
      <div className='exercise-details'>
        <h4 className='pt-5 pb-2'>Exercise Details</h4>
        <div className="exercise-single-details d-flex justify-content-between mb-4 py-3 px-3 rounded-3">
          <span className='fw-semibold'>Exercise time</span>
          <span className='text-secondary'> {exerciseTimes} seconds</span>
        </div>
        <div className="exercise-single-details d-flex justify-content-between mb-4 py-3 px-3 rounded-3">
          <span className='fw-semibold'>Break time</span>
          <span className='text-secondary'>{breakTimes} seconds</span>
        </div>
        <button className='btn btn-lg activity-btn w-100 mt-3'>Activity Completed</button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
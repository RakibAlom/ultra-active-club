import React, { useEffect, useState } from 'react';
import BreakTimes from './BreakTimes';
import './ExerciseDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = (props) => {
  const { exerciseTimes } = props;
  const [breakTimes, setBreakTimes] = useState(0);
  const handleBreakTimes = (newBreakTimes) => {
    setBreakTimes(newBreakTimes);
    localStorage.setItem('break-times', JSON.stringify(newBreakTimes));
  }
  useEffect(() => {
    let breakTime = JSON.parse(localStorage.getItem('break-times'));
    if (breakTime) {
      setBreakTimes(breakTime)
    } else {
      breakTime = breakTimes;
      setBreakTimes(breakTime)
    }
  }, [breakTimes]);

  const notify = () => toast("Congratulations, Your Activity Completed!");

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

        <button onClick={notify} className='btn btn-lg activity-btn w-100 mt-3'>Activity Completed</button>
        <ToastContainer />

      </div>
    </div>
  );
};

export default ExerciseDetails;
import React from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import User from '../User/User';
import './Sidebar.css';

const Sidebar = (props) => {
  const { exerciseTimes } = props;
  return (
    <div className='sidebar-container bg-white h-100 p-4'>
      <User></User>
      <ExerciseDetails exerciseTimes={exerciseTimes}></ExerciseDetails>
    </div>
  );
};

export default Sidebar;
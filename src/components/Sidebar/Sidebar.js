import React from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import User from '../User/User';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar-container bg-white h-100 p-4'>
      <User></User>
      <ExerciseDetails></ExerciseDetails>
    </div>
  );
};

export default Sidebar;
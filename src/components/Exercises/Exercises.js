import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SingleExercise from './SingleExercise';
import './Exercises.css'
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Sidebar from '../Sidebar/Sidebar';
import Blogs from '../Blogs/Blogs';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseTimes, setExerciseTimes] = useState(0);
  useEffect(() => {
    fetch('./database.json')
      .then(res => res.json())
      .then(data => setExercises(data));
  }, [])

  const handlerAddToList = (exercise) => {
    const newTimes = exerciseTimes + parseFloat(exercise.times);
    setExerciseTimes(newTimes);
    localStorage.setItem('exercise-times', JSON.stringify(newTimes));
  }

  useEffect(() => {
    let times = JSON.parse(localStorage.getItem('exercise-times'));
    if (times) {
      setExerciseTimes(times)
    } else {
      times = exerciseTimes;
      setExerciseTimes(times)
    }
  }, [exerciseTimes]);

  return (
    <div className="row m-0 flex-column-reverse flex-md-row">
      <div className='col-xl-9 col-lg-8 p-md-3 col-md-7 p-lg-5'>
        <div className='exercise-container'>
          <div className='d-none d-md-block'>
            <Header></Header>
          </div>
          <h4 className='pb-4 fw-semibold'>Select today's exercise</h4>
          <div className='row'>
            {
              exercises.map(exercise => <SingleExercise key={exercise.id} exercise={exercise} handlerAddToList={handlerAddToList}></SingleExercise>)
            }
          </div>
          <div className="d-none">
            <ExerciseDetails exerciseTimes={exerciseTimes}></ExerciseDetails>
          </div>
        </div>

        <div className="blog-container">
          <Blogs></Blogs>
        </div>

      </div>

      <div className='col-xl-3 col-lg-4 col-md-5 my-4 my-md-0'>
        <Sidebar exerciseTimes={exerciseTimes}></Sidebar>
      </div>

    </div>

  );
};

export default Exercises;
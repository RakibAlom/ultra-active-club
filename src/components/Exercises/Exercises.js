import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SingleExercise from './SingleExercise';
import './Exercises.css'
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseTimes, setExerciseTimes] = useState(0);
  useEffect(() => {
    fetch('./database.json')
      .then(res => res.json())
      .then(data => setExercises(data));
  }, [])

  const handlerAddToList = (product) => {
    const newTimes = exerciseTimes + parseFloat(product.times);
    setExerciseTimes(newTimes);
  }

  useEffect(() => {
    const newExerciseTimes = exerciseTimes
    setExerciseTimes(newExerciseTimes);
    console.log(newExerciseTimes)
  }, [exerciseTimes]);

  return (
    <div className='exercise-container'>

      <div className='d-none d-md-block'>
        <Header></Header>
      </div>
      <h4 className='pb-4'>Select today's exercise</h4>
      <div className='row'>
        {
          exercises.map(exercise => <SingleExercise key={exercise.id} exercise={exercise} handlerAddToList={handlerAddToList}></SingleExercise>)
        }
      </div>
      <div className="d-none">
        <ExerciseDetails exerciseTimes={exerciseTimes}></ExerciseDetails>
      </div>

    </div>
  );
};

export default Exercises;
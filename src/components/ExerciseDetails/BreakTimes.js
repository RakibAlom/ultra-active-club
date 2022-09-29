import React from 'react';

const BreakTimes = (props) => {
  const { handleBreakTimes } = props;
  const breakTimes = [10, 20, 30, 40, 50];
  return (
    <div>
      <h4 className='pb-2'>Add A Break</h4>
      <div className='break-points py-3 py-md-3 px-3 px-md-2 px-md-3 rounded-3 d-flex justify-content-between'>
        {
          breakTimes.map(time =>
            <div className="break-single-point rounded-5" key={time}>
              <span onClick={() => handleBreakTimes(time)}>{time}s</span>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default BreakTimes;
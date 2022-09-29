import React from 'react';

const BreakTimes = () => {
  return (
    <div>
      <h4 className='pb-4'>Add A Break</h4>
      <div className='break-points py-3 py-md-3 px-5 px-md-2 px-md-3 rounded-3 d-flex justify-content-between'>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span>10s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2 active">
          <span>20s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span>30s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span>40s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span>50s</span>
        </div>
      </div>
    </div>
  );
};

export default BreakTimes;
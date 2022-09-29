import React from 'react';

const BreakTimes = (props) => {
  const { handleBreakTimes } = props;
  return (
    <div>
      <h4 className='pb-2'>Add A Break</h4>
      <div className='break-points py-3 py-md-3 px-5 px-md-2 px-md-3 rounded-3 d-flex justify-content-between'>
        <div className="break-single-point rounded-5 p-1 p-md-2 d-md-none d-xl-block">
          <span onClick={() => handleBreakTimes(10)}>10s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2 active">
          <span onClick={() => handleBreakTimes(20)}>20s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span onClick={() => handleBreakTimes(30)}>30s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span onClick={() => handleBreakTimes(40)}>40s</span>
        </div>
        <div className="break-single-point rounded-5 p-1 p-md-2">
          <span onClick={() => handleBreakTimes(50)}>50s</span>
        </div>
      </div>
    </div>
  );
};

export default BreakTimes;
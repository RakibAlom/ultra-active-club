import React from 'react';
import './UserDetails.css'

const UserDetails = () => {
  return (
    <div className='details-box py-3 px-lg-4 px-4 px-md-2 rounded-3 d-flex justify-content-between'>
      <div className="details-single-info d-flex flex-column">
        <div className='text-center'>
          <span className='fs-4 fw-semibold'>60</span>
          <span className='text-secondary fs-6'>kg</span>
        </div>
        <span className='text-secondary fs-6'>Weight</span>
      </div>
      <div className="details-single-info d-flex flex-column">
        <div className='text-center'>
          <span className='fs-4 fw-semibold'>5.3</span>
          <span className='text-secondary fs-6'>ft</span>
        </div>
        <span className='text-secondary fs-6'>Height</span>
      </div>
      <div className="details-single-info d-flex flex-column">
        <div className='text-center'>
          <span className='fs-4 fw-semibold'>25</span>
          <span className='text-secondary fs-6'>yrs</span>
        </div>
        <span className='text-secondary fs-6'>Age</span>
      </div>
    </div>
  );
};

export default UserDetails;
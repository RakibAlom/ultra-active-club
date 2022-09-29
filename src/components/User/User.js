import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './User.css';
import UserDetails from './UserDetails/UserDetails';

const User = () => {
  return (
    <div className='user-content'>
      <div className=' d-flex gap-3 align-items-center'>
        <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/277791190_2935692523388344_5656747913462404719_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=pvMCVx8t2SUAX90jmFt&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-D_IimmMf-K02OejaTto_gsMaefAs_zg6QJvn-CBpOng&oe=63398E30" className='rounded-3' alt="Rakib Alom" />
        <div className="user-info">
          <h5 className='my-0 mb-1'>Rakib Alom</h5>
          <p className='text-secondary my-0'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Sylhet, Bangladesh</p>
        </div>
      </div>

      <div className="user-details py-5">
        <UserDetails></UserDetails>
      </div>
    </div>
  );
};

export default User;
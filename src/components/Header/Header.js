import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-4">
        <a className="navbar-brand" href="/">
          {/* <img src="" alt="Bootstrap" /> */}
          Kingdom-of-Fantasy-Gym
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
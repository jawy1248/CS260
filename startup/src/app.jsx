import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Start } from './start/start';
import { Floor } from './floor/floor';
import { Furn } from './furn/furn';
import { Lock } from './lock/lock';
import { User } from './user/user';
import { Window } from './window/window';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      404: Return to sender. Address unknown.
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className='container-fluid sticky-top text-bg-danger bg-gradient'>
          <div className='text-center'>
            <h1>Wynn's Flooring and Home Furnishings</h1>
          </div>
          <div>
            <nav className='nav nav-tabs' role='navigation'>
              <div className='container-fluid d-flex justify-content-around'>
                <NavLink to='start' className='nav-link active text-bg-dark'>
                  Home
                </NavLink>
                <NavLink className='nav-link text-white' to='furn'>
                  Furniture
                </NavLink>
                <NavLink className='nav-link text-white' to='lock'>
                  Locksmith
                </NavLink>
                <NavLink className='nav-link text-white' to='floor'>
                  Floor Coverings
                </NavLink>
                <NavLink className='nav-link text-white' to='window'>
                  Window Coverings
                </NavLink>
                <NavLink className='nav-link text-white' to='user'>
                  Saved Searches
                </NavLink>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path='/start' element={<Start />} />
          <Route path='/furn' element={<Furn />} />
          <Route path='/lock' element={<Lock />} />
          <Route path='/floor' element={<Floor />} />
          <Route path='/window' element={<Window />} />
          <Route path='/user' element={<User />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='container-fluid border-top border-danger border-4'>
          <div className='d-flex flex-row m-3 mb-0' id='contact_us'>
            <div className='col m-0 p-0' id='addresses'>
              <span>
                <h2>Contact Us</h2>
              </span>
              <div className='d-flex flex-row justify-content-around'>
                <div className='col'>
                  <div className='d-flex flex-column mb-3'>
                    <span className='text-danger text-decoration-underline'>
                      <b>Physical Address</b>
                    </span>
                    <span>607 Main St</span>
                    <span>Ashton, ID 83420</span>
                  </div>
                  <div className='d-flex flex-column mt-3'>
                    <span className='text-danger text-decoration-underline'>
                      <b>Mailing Address</b>
                    </span>
                    <span>P.O. Box 609</span>
                    <span>Ashton, ID 83420</span>
                  </div>
                </div>
                <div className='col'>
                  <div className='d-flex flex-column mb-3'>
                    <span className='text-danger text-decoration-underline'>
                      <b>Phones</b>
                    </span>
                    <span>
                      <i>Store:</i>
                      <a href='tel:2086523951' className='link-danger text-decoration-none'>208-652-3951</a>
                    </span>
                    <span>
                      <i>Sam:</i>
                      <a href='tel:2087053951' className='link-danger text-decoration-none'>208-705-3951</a>
                    </span>
                    <span>
                      <i>Ryker:</i>
                      <a href='tel:2083907527' className='link-danger text-decoration-none'>208-390-7527</a>
                    </span>
                    <span>
                      <i>Taylor:</i>
                      <a href='tel:2082236803' className='link-danger text-decoration-none'>208-223-6803</a>
                    </span>
                  </div>
                  <div className='d-flex flex-column mt-3'>
                    <span className='text-danger text-decoration-underline'>
                      <b>Email</b>
                    </span>
                    <span>
                      <i>Sam:</i>
                      <a href='mailto: samwynn64@gmail.com' className='link-danger text-decoration-none' >samwynn64@gmail.com</a>
                    </span>
                    <span>
                      <i>Ryker:</i>
                      <a href='mailto: rykerwynn@gmail.com' className='link-danger text-decoration-none'>rykerwynn@gmail.com</a>
                    </span>
                    <span>
                      <i>Taylor:</i>
                      <a href='mailto: taylorwynn14@gmail.com' className='link-danger text-decoration-none'>taylorwynn14@gmail.com</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center btn-group-vertical' id='LoginBox'>
              <div className='border border-2 border-dark rounded-5 p-3 text-bg-danger bg-gradient'>
                <h4>Login or Create an Account</h4>
                <div className='input-group flex-nowrap m-2'>
                  <span className='input-group-text'>Username</span>
                  <input type='text' className='form-control me-4' placeholder='Username' aria-label='Username' aria-describedby='addon-wrapping' id='userName' />
                </div>
                <div className='input-group flex-nowrap m-2'>
                  <span className='input-group-text'>Password</span>
                  <input type='password' className='form-control me-4' placeholder='Password' aria-label='Password' aria-describedby='addon-wrapping' id='userPassword' />
                </div>
                <button type='button' className='btn btn-light' onClick={loginUser}>Login</button>
                <button type='button' className='btn btn-light' onClick={createUser}>Create</button>
              </div>
            </div>
          </div>
        </footer>
        <div className='m-3 mt-0 text-bg-dark sticky-bottom'>
          &copy 2024 Wynn's Flooring and Home Furnishings
        </div>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
          crossorigin='anonymous'
        ></script>
        <script src='/login.js'></script>
      </div>
    </BrowserRouter>
  );
}

export default App;

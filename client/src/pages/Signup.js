import React from "react";

function Signup() {
  return (
    <div>
      <div id='access'>
        <div className="signin">
            <div className='container'>
              <div className='col-md-4 left2'>
                <div className='row'>
                  <div className='section-title'>
                    <h2>Sign Up</h2>  
                  </div>
                      <form>
                        <div className='row'>
                        <div className="flex-row space-between my-2 ">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                              className="form-control"
                              placeholder="First Name"
                              name="firstName"
                              type="firstName"
                              id="firstName"
                            />
                          </div>
                          <div className="flex-row space-between my-2 ">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                              className="form-control"
                              placeholder="Last Name"
                              name="lastName"
                              type="lastName"
                              id="lastName"
                            />
                          </div>
                          <div className="flex-row space-between my-2 ">
                            <label htmlFor="email">Email Address:</label>
                            <input
                              className="form-control"
                              placeholder="youremail@test.com"
                              name="email"
                              type="email"
                              id="email"
                            />
                          </div>
                          <div className="flex-row space-between my-2 ">
                            <label htmlFor="password">Password:</label>
                            <div></div>
                            <input
                              className="form-control"
                              placeholder="*****"
                              name="password"
                              type="password"
                              id="password"
                            />
                          </div>
                          <div>
                            <button type='submit' className='btn btn-custom btn-lg'>
                              Sign Up
                            </button>
                          </div>
                        </div>
                      </form>
                        
                      <div>
                        <p>
                          Dont have an account?
                          <a href="#">Sign up</a>
                        </p>
                      </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

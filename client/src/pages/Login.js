import React from "react";

function Login() {
  return (
    <div>
      <div id='access'>
        <div className="intro">
          <div className='container'>
            <div className='col-md-4 left'>
              <div className='row'>
                <div className='section-title'>
                  <h2>Login</h2>  
                </div>
                <form>
                  <div className='row'>
                    
                      <div className="flex-row space-between my-2 ">
                        <label htmlFor="email">Email Address:</label>
                          <input className="form-control"
                            placeholder="youremail@test.com"
                            name="email"
                            type="email"
                            id="email"
                          />
                      </div>
                      <div className="flex-row space-between my-2">
                        <label htmlFor="password">Password:</label>
                    
                        <input className="form-control"
                          placeholder="*****"
                          name="password"
                          type="password"
                          id="password"
                        />
                      </div>
                  
                  </div>
                  
                <div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Log In
                  </button>
                </div>
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
                </form>
                  <div>
                    <p>
                      Already have an account?
                      <a href="#"> Log in</a>
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

export default Login;

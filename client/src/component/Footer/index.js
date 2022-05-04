import React from 'react';




const Footer = () => {
  
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          
          <div className='col-md-3 col-md-offset-1 contact-info'>
          
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={'https://www.facebook.com/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={ 'https://twitter.com/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={'https://www.youtube.com/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2022 Shop Shine{' '}
           
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
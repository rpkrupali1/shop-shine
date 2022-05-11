import React from "react";
import { Link } from "react-router-dom";
//import Categories from "../component/CategoriesToBeDeleted";
import Categories from "../component/Categories";

const Home = (props) => {
    return (
      <header id='home'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-5 intro-text'>
                  <h1>
                    Shop Shine
                  </h1>
                  <p>Spend $100 and Save 10%</p>
                    <Link className='btn btn-custom btn-lg page-scroll' to="/shop">
                        Shop
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Categories/> */}
        <Categories />
      </header>
    )
  }
   
  export default Home;
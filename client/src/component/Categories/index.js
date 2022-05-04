import React from "react"

const categroies = [
  {
    image: require('../../assets/images/Jewelery.jpg'),
    pageLink: "/shop",
    title: "Jewelery"
   
  },
  {
    image: require('../../assets/images/Electronics.png'),
    pageLink: "/shop",
    title: "Electronics"
    
  },
  {
    image: require('../../assets/images/mens.jpg'),
    pageLink: "/shop",
    title: "Men's Clothing"
   
  },
  {

    image: require('../../assets/images/womens.jpg'),
    pageLink: "/shop",
    title: "Women's Clothing"
   
  }
]


const Categories = () =>{
  return (
    <div id='features' className='text-center'>
    <div className='container'>
      <div className='col-md-10 col-md-offset-1 section-title'>
        <h2>Categories</h2>
      </div>
          
          <div className='row'>
              {categroies.map((categroies) => (
                  <div key={categroies.title} className='col-xs-6 col-md-3'>
                      
                      
                      <a href = {categroies.pageLink}>
                      <img className="photo"
                        src={categroies.image}
                        alt={categroies.title}
                        
                      />
                      </a>
                      <h4>{categroies.title}</h4>
                      
                  </div>
                
              ))}
          </div>
          </div>
      </div>
  );
}

export default Categories;

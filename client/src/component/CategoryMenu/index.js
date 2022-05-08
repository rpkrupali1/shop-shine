import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });
      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;// import React, { useEffect } from "react";
// import { useQuery } from "@apollo/client";
// import { useStoreContext } from "../../utils/GlobalState";
// import {
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
// } from "../../utils/actions";
// import { QUERY_CATEGORIES } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";

// function CategoryMenu() {
//   const [state, dispatch] = useStoreContext();
//   const { categories } = state;
//   const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

//   useEffect(() => {
//     if (categoryData) {
//       dispatch({
//         type: UPDATE_CATEGORIES,
//         categories: categoryData.categories,
//       });
//       categoryData.categories.forEach((category) => {
//         idbPromise("categories", "put", category);
//       });
//     } else if (!loading) {
//       idbPromise("categories", "get").then((categories) => {
//         dispatch({
//           type: UPDATE_CATEGORIES,
//           categories: categories,
//         });
//       });
//     }
//   }, [categoryData, loading, dispatch]);

//   const handleClick = (id) => {
//     dispatch({
//       type: UPDATE_CURRENT_CATEGORY,
//       currentCategory: id,
//     });
//   };

//   return (
//     <div id="features" className="text-center">
//       <div className="container">
//         <div className="col-md-10 col-md-offset-1 section-title">
//           <h2>Categories</h2>
//         </div>

//         <div className="row">
//           {categories.map((item) => (
//             <div key={item.title} className="col-xs-6 col-md-3">
//               <a href={item.pageLink}>
//                 <img
//                   className="photo"
//                   src={item.image}
//                   alt={item.title}
//                 />
//               </a>
//               <h4>{item.title}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryMenu;

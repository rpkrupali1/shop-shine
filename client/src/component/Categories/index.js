import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import {
  removeSpecialCharacters,
  capitalizeFirstLetter,
  idbPromise,
} from "../../utils/helpers";
import { Link } from "react-router-dom";


function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
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

  const imagePath = (imageName) => {
    const image = removeSpecialCharacters(imageName);
    return require(`../../assets/images/${image}.jpg`);
  };

  return (
    <div id="features" className="text-center">
      <div className="container nav-cat">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Categories</h2>
        </div>

        <div className="row ">
          {categories.map((item) => (
            <div key={item.name} className="col-xs-6 col-md-3 nav-cat"

              onClick={() => {
                handleClick(item._id);
              }}
            >
              {/* <a href={item.pageLink}> */}
              <Link to="/shop">
                <img
                  className="photo"
                  src={imagePath(item.name)}
                  alt={item.className}
                />
                </Link>
              {/* </a> */}
              <h4>{capitalizeFirstLetter(item.name)}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
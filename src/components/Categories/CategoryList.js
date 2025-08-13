import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category,index) => (

          <Link key={index} to={`/wiki/${category.routeLink}`}>
          <CategoryCard categoryData={category} />
          </Link>  
        ))}
    </div>
  );
}

export default CategoryList;

// ShoppingList.js
import React, { useState } from 'react';
import Item from './Item';

const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Assuming items is an array of objects with properties name, category
  const items = [
    // your items data here
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="All">All</option>
        {/* Add your category options here */}
      </select>
      <ul>
        {filteredItems.map((item) => (
          <Item key={item.name} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

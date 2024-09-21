import React from 'react';
import Item from './items';
import data from './Assets/sample.json';

const ItemList = () => {
  return (
    <div>
      {data.items.map((item, index) => (
        <Item
          key={index}
          link={item.link}
          name={item.name}
          price={item.price}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
};

export default ItemList;
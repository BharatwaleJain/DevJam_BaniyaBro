import React,{ useState, useEffect } from 'react';
import Item from './items';
import axios from 'axios'
import data from './Assets/sample.json';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:8000/getData')
      .then((response) => {
        console.log("This is the respone",response)
        setItems(response.data.data);
      })
      .catch((error) => {
        console.error("API fetch failed, using fallback data", error);
        setItems(data.data);
        setError("Failed to load data from API");
      })
      .finally(() => {
        setLoading(false);
      });;
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <Item
          key={index}
          link={item.prodURL}
          name={item.title.length > 15 ? item.title.slice(0, 12) + '...' : item.title}
          price={item.price}
          imgSrc={item.imgUrl}
        />
      ))}
    </div>
  );
};

export default ItemList;
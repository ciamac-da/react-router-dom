import React, { useState, useEffect} from 'react';
import './App.css';

function ItemDetail( match ) {
      useEffect(()=>{
            fetchItem();
            console.log(match);
      }, []);
      const [item, setItem] = useState({});

      const fetchItem = async () => {
            const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`)
            const item = await fetchItem.json();
            console.log(item)
      }
  return (
    <div>
          <h3>Logo</h3>
      <h1>{item.name}</h1>
    </div>    
  );
}

export default ItemDetail;

import React from 'react';
import { useEffect, useState } from 'react';
import axios from '../../api/axios';

export default function ImagesList() {
  const [searchTerm, setSearchTerm] = useState('ganesh');
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('search/photos', {
        params: {
          query: searchTerm,
        },
      })
      .then((response) => setImages(response.data.results));
  }, [searchTerm]);

  return (
    <div>
      Search Images:
      <input type='text' onChange={(e) => setSearchTerm(e.target.value)} />
      <br />
      {images.slice(0, 2).map((image) => {
        return (
          <div>
            <img
              width='300'
              height='200'
              src={image.urls.regular}
              alt={image.alt_description}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
}

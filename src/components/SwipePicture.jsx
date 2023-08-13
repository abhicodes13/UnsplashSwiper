import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { Card, Rating, Button, List, Icon, Label } from 'semantic-ui-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function SwipePicture() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const unsplashAccessKey = 'A5L9KcgzR9Vnv8gZbFPZ52Iwk5tx8f8mPFTPbGG1Ur8';

    axios.get(`https://api.unsplash.com/photos?client_id=${unsplashAccessKey}&per_page=20`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {photos.map(photo => (
          <SwiperSlide>
         
            <img src={photo.urls.small} alt={photo.alt_description} />
      
          </SwiperSlide>
        ))}

        
      </Swiper>
    </>
  );
}

'use client'
import React, { useEffect, useState } from 'react'
import { BASE_URL, requests } from '../Request'
import styles from "./banner.module.css"



function Banner() {
    const [movie, setMovie] = useState({});
    const containerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height:"600px"
        

      };

     

      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`${BASE_URL}${requests.fetchTrending}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.results.length);
            setMovie(data.results[randomIndex]);
          } catch (error) {
            console.error('Error:', error);
          }
        }
    
        fetchData();
      }, []);
    


      function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }
    
  return (
    <header   className={styles.banner} style={containerStyle}>
  
     <div className={styles.banner__contents}>
     <h1 className={styles.banner__title} >  {movie?.title || movie?.name || movie?.original_name}</h1>
     <div >
        <button className={styles.banner__button}>Play</button>
        <button className={styles.banner__button}>My List</button>
     </div>
     <h1 className={styles.banner__description}>
     {truncate(movie?.overview, 150)}</h1>
     </div>
 
     <div className={styles.fade}/>
         
    </header>
  ) 
}

export default Banner



// string.substr(start,length)
// start: Kesmeye başlanacak karakterin dizinini belirtir. Bu pozisyon, sıfır tabanlıdır, yani dizenin ilk karakteri 0 indekslidir.
// length: Kesilmek istenen karakter sayısını belirtir. Bu parametre isteğe bağlıdır ve belirtilmezse, başlangıç pozisyonundan sona kadar tüm karakterleri içeren bir alt dize oluşturulur.
// Example:
// const text = "Merhaba, Dünya!";
// const substring1 = text.substr(8, 5); // "Dünya"
// const substring2 = text.substr(0, 7);  // "Merhaba"
// const substring3 = text.substr(10);     // "Dünya!"
// substr(10) ifadesi, dizenin 10. karakterinden itibaren kesilmesini ve sonuna kadar olan tüm karakterleri içeren bir alt dizeyi döndürür.


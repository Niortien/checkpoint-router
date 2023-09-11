import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import { Route, Routes } from 'react-router-dom';
import Component1 from './Components/Component1';
import FilmDetails from './Components/FilmDetails';
import CardList from './Components/CardList';


function App() {
  let films=[
    {
      id:1,
      title:" Erling Haaland",
      video:"https://youtu.be/udjBvKOSJcE?si=awTgmHSjk-I-bkLA",
      
      img_path:"https://static.onzemondial.com/8/2023/02/photo_article/819503/326929/1200-L-real-madrid-une-grosse-opportunit-en-or-saisir-pour-haaland.jpg"
    },
    {
      id:2,
      title:"Cristiano Ronaldo",
      video:"https://youtu.be/YzbwK_tyo_4?si=ge-x7i78zR_dwC6g",
      
      img_path:"https://assets-fr.imgfoot.com/media/cache/1200x1200/cristiano-ronaldo-al-nassr.jpg"
    },

    {
      id:3,
      title:"Lionel Messi",
      video:"https://youtu.be/AJm2g-xNBv0?si=u0Jy50IoXjPLDP-1",
      
      img_path:"https://resizer.enetpulse.com/datacore/2023-7-22/900x600-7b88abcfec31faa30eea7d4269bdcb48.jpg"
    }

  ]
 
  return (
   
      <Routes>
        <Route path='/composant1' element={<Component1 data={films} />}/>
        <Route path='/filmdetails/:id' element={<FilmDetails data={films}/>}/>
        <Route path='/' element={<CardList/>}/>
      </Routes>
     
  );
}

export default App;

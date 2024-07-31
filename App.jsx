import Search from './Search.jsx'
import Gallery from './Gallery.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
import { Button } from 'react-bootstrap';
function App() {
  return (

    <>
   <Search/>
   <div className="gallery">
   <Gallery 
   views={40} downloads={12} likes="♥️" imageName="Pvc Mordern Wall"
   />
   <Gallery 
   views={60} downloads={3} likes="♥️" imageName="Pvc Mordern Wall"
   />
    <Gallery 
   views={60} downloads={3} likes="♥️" imageName="Pvc Mordern Wall"
   />
    <Gallery 
   views={60} downloads={3} likes="♥️" imageName="Pvc Mordern Wall"
   />
   </div>
    </>
  )
}

export default App

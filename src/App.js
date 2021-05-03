import React, {useState, useEffect} from 'react'; 
import ImageCard from './components/ImageCard'


function App() {

  const [images, setImages] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [term, setTerm] = useState('cat'); 

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.
    REACT_APP_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits)
      setIsLoading(false); 
    }) 
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="container mx-auto">
      <div className='grid grid-cols-3 gap-4'>
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
  ))}
      </div>
    </div>
  );
}

export default App;

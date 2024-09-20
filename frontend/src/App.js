import logo from './logo.svg';
import './App.css';
import Comp from './MyComponents/diffitems/diffitems';
import Head from './MyComponents/header/head';

import ImageUploader from './MyComponents/imagein/imagein';

function App() {
  return (
    <>
    <Head/>
    <div className='board'>

    <ImageUploader/>
    


    </div>


    
    <Comp/>
    

    
    </>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import comp from './MyComponents/diffitems';

import ImageUploader from './MyComponents/imagein';

function App() {
  return (
    <>
    <ImageUploader/>
    <comp/>

    <input type="number" placeholder='Price'/>
    </>

  );
}

export default App;

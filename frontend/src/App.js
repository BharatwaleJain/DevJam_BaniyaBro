import logo from './logo.svg';
import './App.css';
import Comp from './MyComponents/diffitems/diffitems';

import ImageUploader from './MyComponents/imagein/imagein';

function App() {
  return (
    <>
    <ImageUploader/>
    <p>Hello</p>
    <Comp/>

    <input type="number" placeholder='Price'/>
    </>

  );
}

export default App;

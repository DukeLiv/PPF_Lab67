import './App.css';
import CHeader from './components/CHeader';
import CContents from './components/CContents';
import { CFooter } from './components/CFooter';
import COuter from './components/COuter';

function App() {
  return (
    <div className="App">
      <CHeader aName="Duc" aFamily="Pham"/>
      <CContents/>
      <COuter/>
      <CFooter weather="słoneczna" temp="25">
        <p>Niebo jest bezchmurne, wiatr słaby.</p>
      </CFooter>
    </div>
  );
}

export default App;

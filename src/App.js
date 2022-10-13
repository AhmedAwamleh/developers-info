import './App.css';
import { useReducer } from 'react'

import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';


import { developerRed } from './reducers/developReducer';
import Developer from './components/Developer';

function App() {
  const [developers, dispatch] = useReducer(developerRed, [])

  // console.log(developers)

  return (
    <div className="App">
      <DeveloperForm dispatch={dispatch} />
      <DeveloperList devInfo={developers} dispatch={dispatch} />
      {/* <Developer devInfo={developers} dispatch={dispatch} /> */}
    </div>
  );
}

export default App;

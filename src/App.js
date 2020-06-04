import React, {useState} from 'react';
import './App.css';

import UseDebugValueExample from './components/UseDebugValueExample'
import UseImperativeHandleExample from './components/UseImperativeHandleExample'
import UseLayoutEffectExample from './components/UseLayoutEffectExample'
import UseRefExample from './components/UseRefExample'

function App() {
  const [state, setState] = useState('UseRefExample')
  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setState('UseRefExample')}>UseRefExample</button>
        <button onClick={() => setState('UseImperativeHandleExample')}>UseImperativeHandleExample</button>
        <button onClick={() => setState('UseLayoutEffectExample')}>UseLayoutEffectExample</button>
        <button onClick={() => setState('UseDebugValueExample')}>UseDebugValueExample</button>
      </div>
      <div>
        {state === 'UseRefExample' && <UseRefExample/>}
        {state === 'UseImperativeHandleExample' && <UseImperativeHandleExample/>}
        {state === 'UseLayoutEffectExample' && <UseLayoutEffectExample/>}
        {state === 'UseDebugValueExample' && <UseDebugValueExample />}
      </div>
    </div>
  );
}

export default App;

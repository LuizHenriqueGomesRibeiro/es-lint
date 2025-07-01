import Hello from './packages/ui/components/hello';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const controller = new AbortController();
  
  useEffect(() => {
    async function fetch() {
      const response = await axios.get('https://httpstat.us/200?sleep=5000', {
        signal: controller.signal
      });
      console.log(response);
    }

    fetch();
  }, []);

  return <>
    <Hello text='yeah!' />
    <button onClick={() => controller.abort()}>Abort request</button>
  </>
}

export default App

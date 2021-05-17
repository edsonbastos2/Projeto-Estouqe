import Route from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Route/>
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;

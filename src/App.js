import './App.css';
import { CurrencyTable } from './components/currency-table/CurrencyTable';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <CurrencyTable /> 
    </div>
  );
}

export default App;

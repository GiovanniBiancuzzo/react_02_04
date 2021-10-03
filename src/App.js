import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={MainSearch} />
      <Route exact path='/:companyName' component={CompanySearchResults} />
    </BrowserRouter>
  );
}

export default App;

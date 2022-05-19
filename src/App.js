import './App.css';
import Header from './components/Header';
import Home from './pages/Home';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;

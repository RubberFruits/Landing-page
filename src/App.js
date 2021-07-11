import './App.scss'
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

import './App.css';
import PageHeader from './components/Header/PageHeader';
import Hero from './components/Hero/Hero';
import Article from './components/Blog/Blog';
import Rent from './components/Rent/Rent';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <div>
      <PageHeader />
      <Hero />
      <Article />
      <Rent />
      <Gallery/>
    </div>
  );
}

export default App;

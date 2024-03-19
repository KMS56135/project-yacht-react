import './App.css';
import PageHeader from './components/Header/PageHeader';
import Hero from './components/Hero/Hero';
import Article from './components/Blog/Blog';
import Rent from './components/Rent/Rent';
import Gallery from './components/Gallery/Gallery';
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div>
      <PageHeader />
      <Hero />
      <Article />
      <Rent />
        <Gallery />
      <Button>Button</Button>
      
    </div>
  );
}

export default App;

import './App.css';
import Card from './components/Cards';
import Product from './components/Products';


function App() {
  const firstName = prompt('Enter your first name');

  return (
    <div className="content">
      <Card />

      <div className="message">
        <h2>Hello, {firstName ? firstName : 'Hello there'}!</h2>
        {firstName && <img className="img" src={Product.image} alt="Profile" />}
      </div>
    </div>
  );
}

export default App;

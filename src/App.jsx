import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

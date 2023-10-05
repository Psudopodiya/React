import './App.css';
import {Categories} from './components/Categories';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>The Quiz App</h1>
        <div className='border-2px'>
          <Categories/>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;







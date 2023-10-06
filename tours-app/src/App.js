import React from 'react';
import './App.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Tours} from './components/Tours.jsx'


const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <Tours/>
    </QueryClientProvider>
  );
}

export default App;

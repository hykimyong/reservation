import './App.css';
import Mobile from './components/Mobile';
import Pc from './components/Pc';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return (
      <QueryClientProvider client={queryClient}>
        <Mobile/>
      </QueryClientProvider>);
  }else{
    return (
      <QueryClientProvider client={queryClient}>
        <Pc/>
      </QueryClientProvider>
    );
  }
}

export default App;

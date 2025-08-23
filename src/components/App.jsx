import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/App.css';
import "aos/dist/aos.css";
import Main from './pages/main.jsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}

export default App;

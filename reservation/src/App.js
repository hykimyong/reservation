import './App.css';
import Mobile from './components/Mobile';
import Pc from './components/Pc';

function App() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return <Mobile/>;
  }else{
    return <Pc/>;
  }
}

export default App;

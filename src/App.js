
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about'
import Connect from './pages/connect'
import NoPage from './pages/noPage'
import Academics from './pages/academics/academics'
import BSBA from './pages/BSBA/bsba'
import BSIT from './pages/BSIT/bsit'
import BSHM from './pages/BSHM/bshm'
import News from './pages/news'

function App() {
  return (
 <div>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/academics' element={<Academics/>}/>
          <Route path='/bsba' element={<BSBA/>}/>
          <Route path='/bsit' element={<BSIT/>}/>
          <Route path='/bshm' element={<BSHM/>}/>
          <Route path='/connect' element={<Connect/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
 </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import About from './pages/about/about'
import Connect from './pages/connect'
import NoPage from './pages/noPage'
import Academics from './pages/academics/academics'
import BSBA from './pages/BSBA/Bachelor of Science in Business Administration'
import BSIT from './pages/BSIT/Bachelor of Science in Information Technology'
import BSHM from './pages/BSHM/Bachelor of Science in Hospitality Management'
import News from './pages/news'

function App() {
  return (
 <div>
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/academics' element={<Academics/>}/>
          <Route path='/Bachelor of Science in Business Administration' element={<BSBA/>}/>
          <Route path='/Bachelor of Science in Information Technology' element={<BSIT/>}/>
          <Route path='/Bachelor of Science in Hospitality Management' element={<BSHM/>}/>
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

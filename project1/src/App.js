
import AreaPractice from './components/AreaPractice';
import BottomPage from './components/BottomPage';
import BusinessLaw from './components/BusinessLaw';
import CivilDispute from './components/CivilDispute';
import ConstitutionalLaw from './components/ConstitutionalLaw';
import CriminalLaw from './components/CriminalLaw';
import Home from './components/Home';
import Image from './components/Image';
import NavBar from './components/NavBar';
import TopPage from './components/TopPage';
import FamilyLaw from './components/FamilyLaw';
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <TopPage />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/areapractice' element={<AreaPractice/>} />
        <Route path='/businesslaw' element={<BusinessLaw/>} />
        <Route path='/civildispute' element={<CivilDispute/>} />
        <Route path='/constitutionallaw' element={<ConstitutionalLaw/>} />
        <Route path='/criminallaw' element={<CriminalLaw/>} />
        <Route path='/familylaw' element={<FamilyLaw/>} />

      </Routes>
      <BottomPage />
    </div>
  );
}

export default App;

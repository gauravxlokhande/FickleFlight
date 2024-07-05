import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import RecentSearches from './Components/Recent Searches/RecentSearches';
import PrepareTrip from './Components/PrepareForTrip/PrepareTrip';
import PlanTrips from './Components/PlanTrips/PlanTrips';
import FooterForm from './Templates/Footer/FooterForm';
import Holidays from './Components/Holidays/Holidays';
import Footer from './Templates/Footer/Footer';
import Header from './Templates/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="RecentSearches" element={<RecentSearches />} />
          <Route path="PrepareTrip" element={<PrepareTrip />} />
          <Route path="PlanTrips" element={<PlanTrips />} />
          <Route path="Holidays" element={<Holidays />} />
          <Route path="FooterForm" element={<FooterForm />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

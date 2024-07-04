import Home from "./Components/Home/Home"
import RecentSearches from "./Components/Recent Searches/RecentSearches"
import PrepareTrip from "./Components/PrepareForTrip/PrepareTrip"
import PlanTrips from "./Components/PlanTrips/PlanTrips"
import FooterForm from "./Templates/Footer/FooterForm"
// import Footer from "./Templates/Footer/Footer"
import Holidays from "./Components/Holidays/Holidays"




function App() {

  return (
    <>
      <Home />
      <RecentSearches />
      <PrepareTrip />
      <PlanTrips />
      <Holidays />
      <FooterForm />
      {/* <Footer /> */}
    </>
  )
}

export default App

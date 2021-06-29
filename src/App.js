import './App.css';
import{  Route,Switch} from 'react-router-dom'
import Header from './components/Header'
import AccomplishedEvents from './pages/AccomplishedEvents'
import AddNewEvent from './pages/AddNewEvent'
import AllEvents from './pages/AllEvents'
import SavedEvents from './pages/SavedEvents'
import TodaysEvents from './pages/TodayEvents'

function App() {
  return (

    
   <div >
        <Header/>
        <div className='body' >
          <Switch > 

          {/* <Route to="/all-events">
             <AllEvents/>
            </Route>
            
            <Route to="/accomplished-events">
              <AccomplishedEvents/>
            </Route>

            <Route to="/saved-events">
              <SavedEvents/>
            </Route>  */}


            <Route to="/add-new-event">
              <AddNewEvent/>
            </Route>
            
             {/* <Route to="/today-events">
              <TodaysEvents/>
            </Route> 
           */}
          </Switch> 
        </div>





      
  </div>
  );
}

  export default App

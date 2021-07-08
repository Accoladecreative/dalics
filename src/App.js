import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import Header from './components/Header'


import ErrorPages from './pages/ErrorPage'
import AccomplishedEvents from './pages/AccomplishedEvents'
import AddNewEvent from './pages/AddNewEvent'
import AllEvents from './pages/AllEvents'
import SavedEvents from './pages/SavedEvents'
import TodaysEvents from './pages/TodayEvents'
import  Dashboard from './pages/Dashboard'
import  DashboardGuest from './pages/DashboardGuest'
import Footer from './components/Footer';
/* Account Switch */
import SignIn from './account/SignIn'
import SignOut from './account/SignOut'
import SignUp from './account/SignUp'





function App() {

  return (
    <div>
      <Header />
      <div className='body,container'>

        <Switch>
        
          {/* Main pages */}

          <Route path='/' exact>
            <DashboardGuest />
          </Route>
          

          <Route path='/all-events'>
            <AllEvents />
          </Route>

          <Route path='/accomplished-events'>
            <AccomplishedEvents />
          </Route>

          <Route path='/saved-events'>
            <SavedEvents />
          </Route>


          <Route path='/add-new-event'>
            <AddNewEvent />
          </Route>

          <Route path='/today-events'>
            <TodaysEvents />
          </Route>


          {/* Account Switch */}
          <Route path='/sign-in'>
            <SignIn/>
          </Route>
          <Route path='/sign-up'>
         <SignUp/>
          </Route>
           <Route path='/sign-out'>
           <SignOut/>
          </Route>

        {/* Dashboard Switch */}
        <Route path='/dashboard'>
                    <Dashboard/>
          </Route>
          <Route path='/dashboard-guest'>
         <DashboardGuest/>
          </Route>


            {/* Error pages */}
            <Route path='*'>
            <ErrorPages />
          </Route> 
           


          <div className='actions'>
        <button className='btn btn-secondary'>
          Delete
        </button>

        <DashboardGuest/>
      </div>
          





        </Switch>
        
        
        
        </div>

      <Footer />
    </div>
  );
}

export default App

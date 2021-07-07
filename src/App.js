import './App.css';
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header'
import AccomplishedEvents from './pages/AccomplishedEvents'
import AddNewEvent from './pages/AddNewEvent'
import AllEvents from './pages/AllEvents'
import SavedEvents from './pages/SavedEvents'
import TodaysEvents from './pages/TodayEvents'
import Footer from './components/Footer';
/* Account Switch */
import SignIn from './account/SignIn'
import SignOut from './account/SignOut'
import SignUp from './account/SignUp'
import Backdrop from './components/Backdrop';





function App() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Header />
      <div className='body,container'>

        <Switch>
          <Route path='/all-events' exact>
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
          <div className='actions'>
        <button className='btn btn-secondary' onClick={deleteHandler}>
          Delete
        </button>
      </div>
          





        </Switch>
        
        
        
        </div>

      <Footer />

      {modalIsOpen && (
        <SignOut onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    
    </div>
  );
}

export default App

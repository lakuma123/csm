import './App.css';
import Sidebar from './Navigation pane/Sidebar';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadFiles from './components/UploadFiles';
import Header from './components/Header';

function App(){
  // return( 
  // <div className='App'>
  //   <Sidebar />
  //   </div>
  // );
  return (
    <>
    {/* <Header className='header'></Header> */}
      <Router>
        <div className = 'main'>
        <span className='navigation'>
        <Sidebar />
        </span>
        <span className='body'>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/Upload' component={UploadFiles} />
          <Route path='/Reporting' component={Dashboard} />
          
        </Switch>
        </span>
        </div>
      </Router>
    </>
  );

} 
export default App;
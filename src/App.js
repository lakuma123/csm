// import './App.css';
// import Dashboard from './components/Dashboard';
// import React,{ Component } from 'react';

// class  App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }
//   handleClick() {
//     console.log('Click happened');
//     <Dashboard/>
//   }
    
//   render(){
//     return <div className="App">
//          <h1>Please Log In</h1>
//       <form>
//         <label>
//           <p>Username</p>
//           <input type="text" />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" />
//         </label>
//         <div>
//           <button type="submit" onClick={this.handleClick}>Submit 
//            </button>


//         </div>
//       </form>
//     </div>
//   };
// }

// export default App;


import './App.css';
import Sidebar from './Navigation pane/Sidebar';
import Dashboard from './components/Dashboard'

function App(){
  return( 
  <div className='App'>
    <Sidebar />
    </div>
  );

} 
export default App;
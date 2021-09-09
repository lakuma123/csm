import React,{Component} from 'react';
import companyLogo from '../unitedlogo.png';

class Header extends Component{
    render(){
        return (<div className ='headerbar'>
            <span id='brand'>UNITED</span>
            <span id = 'logo'><img id = 'image'src= {companyLogo}/></span>
            <span id='vertical'/>
            <span id='project'>Codeshare</span>
            <span id= 'welcome'> Welcome User</span>
            <span id= 'logout'> Logout</span>

        </div>);
    }
}

export default Header;           
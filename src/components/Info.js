import logo from './../logo.svg';
import FeatherIcon from 'feather-icons-react';

export default function Info(){
    return(<div className="Main--Info">
                <img src={logo} alt="Profile"></img>
                <h1>Zachary Gardner</h1>
                <h4>Full Stack Developer</h4>
                <a href="mailto: zac1182@gmail.com"><div><FeatherIcon icon="mail" />Email</div></a>
           </div>);
}
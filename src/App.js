import React from 'react';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.dropdown = React.createRef()
  }

  toggleShow = () => {
    console.log(this.dropdown.current)
    let {current} = this.dropdown

    if(current.classList.contains('show-animation')){
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else {
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }

  render(){
    return(
      <div>
        <nav>
          <div className='logo-container'>Start Bootstrap</div>
          <div id='button-container'>
            <div className='button'>SERVICES</div>
            <div className='button'>PORTFOLIO</div>
            <div className='button'>ABOUT</div>
            <div className='button'>TEAM</div>
            <div className='button'>CONTACT</div>
          </div>
           <button className='nav-toggler'>MENU<i id='hamburger-icon' class='fa fa-bars' onClick={this.toggleShow}/></button> 
        </nav>
        <div className='background-image'>
          <img src='https://www.climbing.com/.image/t_share/MTQ2MjI3NTc1MTMwMTcwOTc3/screen-shot-2017-04-05-at-24239-pm.png' />
        </div>
      </div>
    )
  }
}

export default App;

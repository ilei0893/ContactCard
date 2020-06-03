import React, {Component} from "react";
import ContactCard from "./components/ContactCard";
import './App.css';

class App extends Component{
  render(){
    return (
      <>
        <ContactCard
          name="Ivan"
          mobile="2128567894"
          work="2127350825"
          email="contact@ttp.com"
          />
        <ContactCard
          name="Ben"
          mobile="4723518753"
          work="4724786531"
          email="contact@ttp.com"
          />
        <ContactCard
          name="Tyler"
          mobile="8945729081"
          work="8943268109"
          email="contact@ttp.com"
          />
      </>
    );
  }
}

export default App;

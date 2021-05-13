import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
const name=[{id:"relativeListItem1",k:"Avirup"},
            {id:"relativeListItem2",k:"Avirup 2"},
            {id:"relativeListItem3",k:"Avirup 3"}];
  const listitem=name.map((names)=>
  <li key={names.id}>{names.k}</li>
  );
        return(
            <div id="main">
               {/* Do not remove the main div */}
             <ol key={"relativeList"}>{listitem}</ol>
            </div>
        )
    }
}


export default App;
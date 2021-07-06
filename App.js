import * as React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation' ;

import screen1 from './Screens/SearchWordScreen';

export default class App extends React.Component{

  render(){
  
  return(
  
  <Container/>
  
  )
  
  }
    
  
  }
  
  var routes = createSwitchNavigator({ 
  
  class1:screen1, 
  
  });
  
  var Container = createAppContainer(routes);
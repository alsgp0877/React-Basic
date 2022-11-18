import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import CONT from './components/CONT';
import Subject from './components/Subject';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="REACT" sub="world wide web!"></Subject>
        <TOC></TOC>
        <CONT title="a;dfjk;adjkf" desc="adsfad"></CONT>
      </div>
    );
  }
}
export default App;

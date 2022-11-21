import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import CONT from './components/CONT';
import Subject from './components/Subject';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      subject:{title:'Xeb',sub:'Xorld Xide Xeb!'},
      contents:[
        {id:1,title:'HTML', desc:'HTML is HyperText..'},
        {id:2,title:'CSS', desc:'CSS is HyperText..'},
        {id:3,title:'JS', desc:'JS is HyperText..'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <Subject title="REACT" sub="world wide web!"></Subject>
        <TOC data={this.state.contents}></TOC>
        <CONT title="a;dfjk;adjkf" desc="adsfad"></CONT>
      </div>
    );
  }
}
export default App;

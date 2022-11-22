import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import CONT from './components/CONT';
import Subject from './components/Subject';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode:'read',
      subject:{title:'Xeb',sub:'Xorld Xide Xeb!'},
      welcome:{title:'Welcome',desc:'Hello, React!!'},
      contents:[
        {id:1,title:'HTML', desc:'HTML is HyperText..'},
        {id:2,title:'CSS', desc:'CSS is HyperText..'},
        {id:3,title:'JS', desc:'JS is HyperText..'}
      ]
    }
  }

  render(){
    var _title,_desc = null;
    if(this.state.mode == 'welcome'){
      _title=this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      _title=this.state.contents[0].title;
      _desc=this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
        <header>
        <h1><a href="/" onClick={function(e){alert('HI'); e.preventDefault();}}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
        </header>
        <Subject title="REACT" sub="world wide web!"></Subject>
        <TOC data={this.state.contents}></TOC>
        <CONT title={_title} desc={_desc}></CONT>
      </div>
    );
  }
}
export default App;

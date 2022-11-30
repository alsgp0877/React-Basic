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
      selected_content_id:2,
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
      var i=0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){//여기도 this.setState({}) 이용해서 값 설정할듯?
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i=i+1;
      }
    }

    console.log('render',this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage = {function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
        >
        </Subject>
        {/* <header>
        <h1><a href="/" onClick={function(e){
          console.log('event in',this);
          e.preventDefault();
          //return;
          //this.state.mode='welcome'; 리액트 입장에서는 해다 코드는 몰래 바꾼 셈
           this.setState({
            mode:'welcome'
           });
        }.bind(this)}>{this.state.subject.title}</a></h1>
        {this.state.subject.sub}
        </header> */}
        <Subject title="REACT" sub="world wide web!"></Subject>
        <TOC 
          onChangePage = {function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}>           
        </TOC>
        <CONT title={_title} desc={_desc}></CONT>
      </div>
    );
  }
}
export default App;

import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import CreateContent from './components/CreateContent';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3;
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
    var _title,_desc,_article = null;
    if(this.state.mode === 'welcome'){
      _title=this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent> 
    }else if(this.state.mode ==='read'){//처음 셋팅값?
      var i=0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i=i+1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent> 
    }else if(this.state.mode ==='create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id=this.max_content_id+1;
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );//원본데이터를 바꿈
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );//원본데이터를 놔두고 복사본을 만듬
        this.setState({
          contents:_contents
        });
        console.log(_title,_desc);
      }.bind(this)}></CreateContent> 
    }

    //console.log('render',this);
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
        <TOC 
          onChangePage = {function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}>           
        </TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}
export default App;

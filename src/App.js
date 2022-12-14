import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      mode:'welcome',
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

  getReadContent(){
    var i=0;
    while(i<this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
        break;
      }
      i=i+1;
    }

  }
  getContent(){
    var _title,_desc,_article = null;
    if(this.state.mode === 'welcome'){
      _title=this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent> 
    }else if(this.state.mode ==='read'){//처음 셋팅값?
      var _content=this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent> 
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
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });//신규생성 후 신규생성한 값을 바로 읽기, state 값을 read 로 바꾸고 추가된 id로 id 설정해주기
        console.log(_title,_desc);
      }.bind(this)}></CreateContent> 
    }else if(this.state.mode ==='update'){
      var _content=this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id,_title,_desc){
        var _contents = Array.from(this.state.contents);//복제해서 새로운 배열을 만듬.
        var i = 0;
        while(i<_contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break
          }
          i=i+1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });//수정하고 state를 읽기로 변경해주기
        console.log(_title,_desc);
      }.bind(this)}></UpdateContent>
    } 

    return _article;
  }

  render(){

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
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _content = Array.from(this.state.contents);
              var i = 0;
              while(i<_content.length){
                if(_content[i].id === this.state.selected_content_id){
                  _content.splice(i,1); //i번째를 기준으로 1개삭제
                  break;
                }
                i=i+1;
              }
              this.setState({
                mode:'welcome',
                contents:_content
              });
            }
          }else{
            this.setState({
              mode:_mode
            });
          }
         
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}
export default App;

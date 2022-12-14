import { Component } from 'react';


class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state={
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHanlder = this.inputFormHanlder.bind(this);

  }

  inputFormHanlder(e){
    this.setState({[e.target.name]:e.target.value});
  }


  render(){
    console.log(this.props.data);
    console.log('UpdateContent render');
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post" 
          onSubmit={function(e){
            e.preventDefault();
            debugger;
            this.props.onSubmit(e.target.title.value,e.target.desc.value);
            alert('submit!!!');
          }.bind(this)}>
          <p>
            <input 
            type="text" 
            name="title" 
            placeholder="title" 
            value={this.state.title}
            onChange = {this.inputFormHanlder} 
            ></input>
            {/* props는 readonly인데 수정을 하려고 하면 오류가 난다 그래서 state 형으로 변환? 해야한다 */}
            </p>
          <p>
            <textarea 
            onChange = {this.inputFormHanlder} 
            name="desc" 
            placeholder="description" 
            value={this.state.desc}></textarea>
            </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}


export default UpdateContent;
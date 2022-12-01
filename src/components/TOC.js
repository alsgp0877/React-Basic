import { Component } from 'react';

class TOC extends Component {
  render(){
    var lists = [];
    var data = this.props.data;
    var i=0;
    while(i < data.length){
      lists.push(
      <li key={data[i].id}>
        <a 
          href={"/contents/"+data[i].id} 
          //data-jf;akdj 이면
          data-id={data[i].id}
          onClick={function(e){
          e.preventDefault();
          //이 밑에 문법이 app.js에 있는 함수를 가져와서 수행시키는거
          //그러니까 toc 태그안에 있는 함수코드라면 밑에 코드 처럼 가져와서 사용할 수 있고
          //여기서 onClick 을 누르면 app.js에서 가져온 onChangePage 함수가 실행되고 데이터를 toc.js -> app.js로 넘겨주게된다.
          this.props.onChangePage(e.target.dataset.id);  //e.target.dataset.jf;akdj가 된다
        }.bind(this,data[i].id)}>{data[i].title}
        </a>
      </li>
      );
      i=i+1;
    }
    return (
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
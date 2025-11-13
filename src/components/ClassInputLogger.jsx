import React,{Component} from 'react';
export default class ClassInputLogger extends Component{
  state={value:''};
  onChange=e=>this.setState({value:e.target.value});
  onClick=()=>alert(`Current input: ${this.state.value||'empty'}`);
  render(){
    const { themeLabel } = this.props;
    return (
      <div className="card">
        <h1>Class Input Logger</h1>
        <p>Theme via props: <strong>{themeLabel}</strong></p>
        <input value={this.state.value} onChange={this.onChange} placeholder="Class component input..." />
        <div className="row" style={{marginTop:8}}>
          <button className="btn" onClick={this.onClick}>Show Current Input</button>
        </div>
      </div>
    );
  }
}

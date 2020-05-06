import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
      name: "counter"
    };
  }
 
  
  handleAddCount = () => {
    this.setState(state => ({
        count: state.count + 1
      }))
  };
  handleMinusCount = () =>{
      this.setState(state=>({
      count:state.count -1
      }));
  };
  
  handleChangeName = () => {
    this.setState({
      name: "Counter"
    });
  };
  handleUpdate = () => {
    this.setState(state => ({
        count: 0
      }))
  };
 

  render() {
    return (
      <>
        <div>
          {this.state.name}: {this.state.count}
        </div >
        <button onClick={this.handleAddCount}>+</button>
        <button disabled={this.state.count <=0} onClick={this.handleMinusCount}>-</button>
        <button onClick={this.handleChangeName}>change name</button>
        <button onClick={this.handleUpdate}>updateToInitial</button>
      

      </>
    );
  }
}
export default Counter;
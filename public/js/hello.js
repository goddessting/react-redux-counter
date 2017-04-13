import React from 'react';
import {connect} from 'react-redux';
import {ADD,SUBTRACT} from '../actions/actionsType';

class Hello extends React.Component {
    render() {
        const count = this.props.add;
        return (<div>
             <div>数量：{count}</div>*/}
             <button onClick={this.props.onIncreaseClick}>+1</button>
              <button onClick={this.props.onSubtractClick}>-1</button>
         </div>);
    }
}
const mapStateToProps = (state)=> {
    return {
        add:state.count
    };
};

function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: () => dispatch({type: ADD}),
        onSubtractClick: () => dispatch({type: SUBTRACT})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Hello);

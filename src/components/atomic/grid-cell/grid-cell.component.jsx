import React from "react";

export class  GridCell extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
     <td>{this.props.data.toString()}</td>
           
        )
    }
} 
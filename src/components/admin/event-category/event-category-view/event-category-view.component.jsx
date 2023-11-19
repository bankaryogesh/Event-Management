import React from "react";
import GridComponent from "../../../shared/grid/grid.component";
import { getEventCategory } from "../../../../services/admin/event-category.service";
import { NotificationMessage } from "../../../common/notification-message/notification-message.component";

export class EventCategoryView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eventCategories : [],
            notificationType:"",
            notificationMessage:""

        }
        this.headers = ["ID" ,"EVENT-CATEGORY" ,"EVENT-DESCRIPTION","ISACTIVE","ACTIONS"];
        this.data = [];
    }
    componentDidMount(){
        this.getData();
    }
    componentDidUpdate(){
        this.getData();
    }
    editRecord(item){
        // alert(JSON.stringify(item))
        this.props.edit(item);

    }
    deleteRecord(item){
        this.props.delete(item)
    }
    getData(){
        getEventCategory().then((res)=>{
            let activeRecords = res.data.filter((item)=> item.isactive === true)
          this.setState({eventCategories:activeRecords});
        }).catch(()=>{
            this.setState({notificationType:"error" , notificationMessage:"Network Error Please Contact Admin..!"})
        })
    }
    render(){
        return(
            <div>
         <GridComponent headers = {this.headers} data ={this.state.eventCategories} edit ={(item)=>{this.editRecord(item)}} delete = {(item)=>{this.deleteRecord(item)}}></GridComponent>
         <NotificationMessage type = {this.state.notificationType} message = {this.state.notificationMessage}></NotificationMessage>
            </div>
        )
    }
}
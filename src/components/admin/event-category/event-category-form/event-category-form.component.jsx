import React from "react";
import { saveEventCategory, updateEventCategory } from "../../../../services/admin/event-category.service";
import { EventCategoryView } from "../event-category-view/event-category-view.component";
import { NotificationMessage } from "../../../common/notification-message/notification-message.component";


export class EventCategoryForm extends React.Component{
    constructor(){
        super()
        this.state ={
            id:0,
            btnText:"CREATE",
            type:"",
            message:""

        }
        this.categoryName = React.createRef();
        this.categoryDescription = React.createRef();
    }
    saveData(event){
        event.preventDefault();
        let data = {
            id:this.state.id,
            categoryName:this.categoryName.current.value,
            categoryDescription: this.categoryDescription.current.value,
            isactive:true
        }

        if(this.state.id === 0){
        saveEventCategory(data).then((res)=>{
          this.setState({id:res.data.id});
        })
         }else{
     updateEventCategory(data).then((res)=>{
        this.setState({type:"success" , message:"DATA UPDATED SUCCESSFULLY...!"})
         //window.location.reload();
        this.refresh()

     })
         }
    }
    editRecord(item){
    this.categoryName.current.value = item.categoryName;
    this.categoryDescription.current.value = item.categoryDescription ;  
    this.setState({id:item.id})
    this.setState({btnText:"UPDATE"})     
    }
    deleteRecord(item){
        let data = {
            id : item.id,
          categoryName:this.categoryName.current.value,
          categoryDescription  : this.categoryDescription.current.value,
          isactive:false
        }
        updateEventCategory(data).then((res)=>{
            this.setState({type:"info" , message:"DATA DELATED SUCCESSFULLY........!!!"})
        })

    }
    refresh(){
        this.categoryName.current.value = " "
        this.categoryDescription.current.value =" "
        this.setState({btnText:"CREATE"})    

    }
    
    render(){
        return(
             <div className="m-3">
                <h3 className='text-center text-white'>EVENT BOOKING FORM</h3>
                <form className="m-5" onSubmit={(event)=>{this.saveData(event)}}>
                    <div className="form-group ">
                        <label>Event Category Name</label>
                        <input type="text"  className="form-control" ref={this.categoryName} />
                    </div>
                    <div className="form-group">
                        <label>Event Category Description</label>
                        <textarea type="text"  className="form-control" ref={this.categoryDescription}/>
                    </div>
                    <div className="p-4"> 
                        <input type="submit" value={this.state.btnText} className="btn btn-primary"></input>
                        <input type="reset" value="Cancel" className="btn btn-secondary ms-2"></input>

                    </div>
                </form>

                <h3 className='text-center text-white'>EVENT BOOKING DETAILES</h3> <br></br>
                <EventCategoryView id = {this.state.id} edit={(item)=>{this.editRecord(item)}} delete={(item)=>{this.deleteRecord(item)}}></EventCategoryView>
                <NotificationMessage type={this.state.type} message = {this.state.message}></NotificationMessage>
             </div>
            )
    }
  }
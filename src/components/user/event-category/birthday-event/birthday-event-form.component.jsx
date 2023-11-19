//import { useState } from "react";
import { saveBirthdayData } from "../../../../services/user/event-catagoryservice/birthday-event.service";
import { useForm } from "react-hook-form";
import { BirthdayEventView } from "./birthday-event-view.component";
import "./birthday-event-form.component.css";

export const BirthdayEvent = () => {
  // const [validateData,setValidateData]=useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function validateEvent(data) {
    data.id = "";
    saveBirthdayData(data).then((res) => {
      //  alert(JSON.stringify(res.data))
      window.location.reload();
    });
  }

  return (
    <div>
            <div className="m-3 p-3" style={{color:"whitesmoke"}}>
      <h3 className="text-center p-3 m-3">BIRTHDAY-EVENT-FORM</h3>
      <form
        onSubmit={handleSubmit((data) => {
          validateEvent(data);
        })}
      >
        <div className="form-group">
          <label className="from-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            {...register("Name", { required: true })}
            placeholder="Enter Events here.."
          ></input>
        </div>
        {errors.Name && (
          <div className="text-danger">Name Field is Required..!</div>
        )}
        <div className="form-group">
          <label className="from-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            {...register("phonenumber", { required: true })}
            placeholder="Enter PhoneNo.."
          ></input>
        </div>
        {errors.Name && (
          <div className="text-danger">Phone Number Field is Required..!</div>
        )}
        <div className="form-group">
          <label className="from-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: true })}
            placeholder="Enter Email.."
          ></input>
        </div>
        {errors.Name && (
          <div className="text-danger">Email Field is Required..!</div>
        )}
        <div className="form-group">
          <label>Address</label>
          <textarea
            row={5}
            className="form-control"
            {...register("Address", { required: true })}
          ></textarea>
        </div>
        {errors.Address && (
          <div className="text-danger">Address Field is Mandatory</div>
        )}
        <div className="form-group">
          <label>birthday Date</label>
          <input
            type="date"
            className="form-control"
            {...register("Date", { required: true })}
          ></input>
        </div>
        {errors.Date && (
          <div className="text-danger">Date Field is Mandatory</div>
        )}
        <div className="form-group">
          <label>Event Description</label>
          <textarea
            row={5}
            className="form-control"
            {...register("Description", { required: true })}
          ></textarea>
        </div>
        {errors.Description && (
          <div className="text-danger">event Description is Mandatory</div>
        )}
        <div className="m-2">
          <input
            type="submit"
            value="Save"
            className="btn btn-primary me-2"
          ></input>
          <input type="reset" value="Cancel" className="btn btn-danger"></input>
        </div>
        {/* {validateData && <div className="text-danger">All fields Are Mandatory</div>} */}
        {/* <GridComponent header={headers}></GridComponent> */}
      </form>
      <div className="p-5 m-5">
     <BirthdayEventView></BirthdayEventView>
    </div>
    </div>
    </div>

  );
};

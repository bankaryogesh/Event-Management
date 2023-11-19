import GridComponent from "../../shared/grid/grid.component";
import {useState, useEffect  } from "react";

import { getUsers } from "../../../services/user/user.service";

export function UserRegistraion() {
  let UserRegistraionHeader = [
    "ID",
    "FIRSTNAME",
    "LASTNAME",
    "EMAIL",
    "PHONENO",
    "DOB",
  ];

  const [User , setUser] = useState([]);
useEffect(()=>{
    getUserData();
})

  function getUserData(){
    getUsers().then((res) =>{
        setUser(res.data)
    })
  }

  return (
    <div>
      {/* <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            {
            UserRegistraionHeader.map((item, index, arr) => {
              return <th>{item}</th>;
            })
            }
          </tr>
        </thead>
        <tbody>
          {
            user.map((item,index,arr)=>{
                return(

                    <tr>
                        <td>{item.id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneno}</td>
                        <td>{item.dob}</td>
                    </tr>
          )
            })
          }
        </tbody>
      </table> */}
      {/* <GridComponent headers = {UserRegistraionHeader} data ={user}></GridComponent> */}
      <GridComonent headers = {UserRegistraionHeader} data ={User}></GridComonent>
    </div>
  );
}
 
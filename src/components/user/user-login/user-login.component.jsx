 import {useForm} from 'react-hook-form'
const UserLogin = () =>{

    const {
        register ,
        handleSubmit,
        formState : {errors}
    } = useForm();

    function saveData(data){
          alert(JSON.stringify(data))
    }
    return(
     <div>
        <h3 className='text-center text-white'>LOGIN BY REACT HOOK FORM</h3>
        <form autoComplete="off"  className="m-5" onSubmit={handleSubmit((data)=>{saveData(data)})}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"
     aria-describedby="emailHelp" placeholder="Enter email" {...register("username" , {required:true})}/>
{errors.username && <div className="text-danger">User Name is Required...!</div>}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" {...register("password",{required:true})}/>
    {errors.password && <div className="text-danger">password is Required...!</div>}

  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
     </div>
    )
}
export default UserLogin;
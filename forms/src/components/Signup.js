import React from 'react'

const Signup = () => {
    return (
        <div>
         <section id="form-3" >
    <div className="container">
      <div className="row">

        <div className="col-md-7 pic-sec">



        </div>
        <div className="col-md-5 col-sm-12 col-sign-2">
          <img src="./farrgo-removebg-preview.png" width="200px" alt=""/>

          <h4>Sign up</h4>
          <form>
            <div className="form-group">
              <label for="Name">Name</label>
              <input type="text" className="form-control" id="Name" placeholder="Name" require/>
            </div>
            <div className="form-group">
              <label for="Email">Email</label>
              <input type="email" className="form-control" id="Email" placeholder="E-mail" require/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" require/>
            </div>
            <div className="form-group">
              <label for="confirm-password">confirm Password</label>
              <input type="password" className="form-control" id="confirm-password" placeholder="confirm password" require/>
            </div>
               <button className="btn btn-block ">Sign up </button> 
          </form>

        </div>
      </div>
    </div>
  </section>
            
        </div>
    )
}

export default Signup

import React from 'react'

const Login = () => {
    return (
        <div>
            <section id="form-3">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-12 pic-sec">

                        </div>
                        <div className="col-md-6 col-sm-12 col-login-2">
                            <img src="./farrgo-removebg-preview.png" width="200px" alt="" />
                            <h4>Log in</h4>
                            <form>

                                <div className="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="E-mail" require />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" require />
                                </div>
                                <button className="btn btn-block ">Log in</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Login

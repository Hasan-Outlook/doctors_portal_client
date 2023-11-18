import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useToken from '../../../Hooks/useToken';
import Loading from '../../../Components/Shared/Loadar/Loading';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, loding } = useContext(AuthContext);
    const [loginError, setLoginError] = useState();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        // console.log(data);
        setLoginError();
        loginUser(data.email, data.password)
            .then(result => {
                // const user = result.user;
                // console.log(user);
                setLoginUserEmail(data.email)

            })
            .catch(error => {
                // console.log(error)
                setLoginError(error)
            })
    }

    

    return (
        <section className='h-[700px] grid place-content-center drop-shadow-md'>
            <div className='w-96 drop-shadow-md'>
                <h1 className='text-4xl text-center font-semibold'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    {/* <input  {...register("firstName")} placeholder="Email" />
                    <input {...register("firstName")} placeholder="Password" /> */}

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email is required' })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600 mt-2' role='alert'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: 'Password is required' })} className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600 mt-2' role='alert'>{errors.password?.message}</p>}
                    </div>

                    {
                        loginError &&
                        <div className="alert alert-warning mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Warning: Invalid email or password!</span>
                        </div>
                    }

                    <button type="submit" className="btn btn-neutral w-full mt-5">Login</button>
                    <h1 className='mt-2'>New to Doctors Portal? <span className='text-secondary'><Link to='/signup'>Create new account</Link></span></h1>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline w-full">Login With Google</button>
                </form>
            </div>
        </section>
    );
};

export default Login;
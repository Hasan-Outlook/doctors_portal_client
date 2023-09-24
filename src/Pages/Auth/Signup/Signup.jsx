import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../../Hooks/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const nevegate = useNavigate()

    if (token) {
        nevegate('/');
    }

    const handleSignup = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('User created successfully.');
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                // console.log(error)
                setSignupError(error)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email);
            })
    }

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken', data.accessToken);
    //             nevegate('/');
    //         }
    //     })
    // }

    return (
        <>
            {
                signupError &&
                <div className="alert alert-error flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Error! Task failed successfully.</span>
                </div>
            }
            <section className='h-[700px] grid place-content-center drop-shadow-md'>

                <div className='w-96 drop-shadow-md'>
                    <h1 className='text-4xl text-center font-semibold'>Signup Now</h1>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        {/* <input  {...register("firstName")} placeholder="Email" />
                    <input {...register("firstName")} placeholder="Password" /> */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: 'Please inter your Name' })} className="input input-bordered w-full " />
                            {errors.name && <p className='text-red-600 mt-2' role='alert'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: 'Please inter your Email' })} className="input input-bordered w-full " />
                            {errors.email && <p className='text-red-600 mt-2' role='alert'>{errors.email.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: 'Please inter a strong Password', minLength: { value: 6, message: 'Password must be 6 characters or longer' } })} className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600 mt-2' role='alert'>{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="btn btn-neutral w-full mt-5">SignUp</button>
                        <h1 className='mt-2'>You have an account? <span className='text-secondary'><Link to='/login'>Please Login</Link></span></h1>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline w-full">SIGNUP With Google</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Signup;
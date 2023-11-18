import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
import Loading from '../../Components/Shared/Loadar/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctors = () => {
    const imageHosting = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: specialtys = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctorSpecialty`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        // console.log(data.image[0]);
        const doctorImg = data.image[0];
        const formData = new FormData();
        formData.append('image', doctorImg);
        const url = `https://api.imgbb.com/1/upload?key=${imageHosting}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                // console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                // save doctor info to the database
                fetch(`http://localhost:5000/doctors`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(`Successfully added a new doctor.`)
                    navigate('/dashbord/doctors');
                })
            }
        })

        if(isLoading){
            return <Loading></Loading>
        }
    }

    return (
        <div>
            <h1 className='text-3xl text-center mt-5'>Add New Doctor.</h1>
            <div className='w-96 drop-shadow-md mx-auto'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register('specialty')} className="select select-bordered w-full">
                        <option disabled selected>Select doctor's specialty</option>
                            {
                                specialtys &&
                                specialtys?.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                            {/* <option>Han Solo</option>
                            <option>Greedo</option> */}
                        </select>
                        {/* <input type="text" {...register("specialty", { required: 'Please inter your Email' })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600 mt-2' role='alert'>{errors.email.message}</p>} */}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type="file" {...register("image", { required: 'Please select a file' })} className="input input-bordered w-full " />
                        {errors.image && <p className='text-red-600 mt-2' role='alert'>{errors.image.message}</p>}
                    </div>
                    <button type="submit" className="btn btn-neutral w-full mt-5">Add Doctor</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;
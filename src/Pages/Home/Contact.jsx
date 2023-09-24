import React from 'react';
import BgImg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section
            style={{
                background: `url(${BgImg})`
            }}
        >
            <div className="hero mt-20">
                <div className="hero-content flex-col">
                    
                    <div className="card flex-shrink-0  w-min ">
                        <div className="card-body">
                            <div className="form-control">
                                
                                <input type="email" placeholder="Email Address:" className="input input-bordered" />
                                <input type="text" placeholder="Subject:" className="input input-bordered" />
                                <input type="text-area" placeholder="email" className="input input-bordered" />
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
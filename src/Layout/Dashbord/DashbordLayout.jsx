import React, { useContext } from 'react';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        {
                            isAdmin &&
                            <>
                            <li><Link to='/dashbord/users'>Users</Link></li>
                            <li><Link to='/dashbord/addDoctors'>Add Doctors</Link></li>
                            <li><Link to='/dashbord/doctors'>All Doctors</Link></li>
                            </>
                        }
                        <li><Link to='/dashbord'>My Appointment</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;
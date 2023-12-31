import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoding, setIsAdminLoding] = useState(true);
    useEffect( () => {
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminLoding(false);
            })
        }
    }, [email])
    return [isAdmin, isAdminLoding];
}

export default useAdmin
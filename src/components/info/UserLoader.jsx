import axios from "axios";
import React, { useEffect, useState } from "react"



export const UserLoader = ({userId, children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            console.log(response.data);
            setUser(response.data)
            // await fetch('/current-user').then((res) => {
            //     console.log(res);
            //     const data = res.json();
            //     setUser(data)
            //     console.log(data.name);
            // })
        })()
    }, [])

    return(
        <>
           { React.Children.map(children, (child) => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, {user});
                }
                return child;

           }) }
        </>
    )
}


import { useState } from "react";
import { useEffect } from "react";


const Profile = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello Paresh");
        }, 1000);



        return () => {
            clearInterval(timer);
        }
    }, [])
    return (
        <>
            <h1>This is Profile section!!</h1>
            <h3>{props.name}</h3>
            <h3>Count: {count}</h3>
            <button 
                onClick={() => {
                    setCount(1);
                }}
            >
            Count
            </button>
        </>
    )
}

export default Profile;
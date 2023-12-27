import { useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
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
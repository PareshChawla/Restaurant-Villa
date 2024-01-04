import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <>
            <div className="h-[70vh]">
                <h1>This is About Page.</h1>
                <Profile name="Paresh"/>
                <ProfileClass name="PareshClass"/>
            </div>
            
        </>
    )
}

export default About;
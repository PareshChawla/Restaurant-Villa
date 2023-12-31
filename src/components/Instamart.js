import { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Section = ({title, description, isVisible, setVisibleSection}) => {

    const {user} = useContext(UserContext);
    return (
        <>
          <div className="border border-black p-2 m-2">
            <div className="flex flex-row gap-2 items-center mb-4">
                {user.name} {user.email}
               <h2 className="text-2xl font-bold">{title}</h2>
               {isVisible==title? (
                    <button 
                    className="h-6 w-16 border border-black rounded-md bg-[#DEB887]"
                    onClick={() => setVisibleSection(null)}
                    >Hide
                    </button>           
               )
               :
               (<button 
               className="h-6 w-16 border border-black rounded-md bg-[#DEB887]"
               onClick={() => setVisibleSection(title)}
               >Show
               </button>) }  
            </div>
             {isVisible==title && <p>{description}</p>} 
          </div>
        </>
    )
}


const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState(null);
    return (
        <>
        <div className="min-h-screen">
            <h1 className="text-3xl font-bold text-center m-2 p-2">Instamart</h1>
            <Section 
            title="About" 
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
            isVisible={visibleSection}
            setVisibleSection={setVisibleSection}
            />
            <Section title="Teams" 
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
            isVisible={visibleSection}
            setVisibleSection={setVisibleSection}
            />
            <Section title="Careers" 
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
            isVisible={visibleSection}
            setVisibleSection={setVisibleSection}
            />
        </div>
        </>
    )
}

export default Instamart;
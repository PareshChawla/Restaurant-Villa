import '../../css/shimmer.css';

const Shimmer = () => {
    return (
        <>
            <div className="small-box">
                <div className="inputTest"></div>
                <div className="btn"></div>
            </div>
            <div className="cards-container">
            {Array(10)
            .fill("")
            .map((e, index) => (
                <div className="cards" key={index}></div>
            ))}
            </div>
        </>
    )
}
 


export default Shimmer;

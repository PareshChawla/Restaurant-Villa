
const Shimmer = () => {
    return (
        <>
            <div className="flex flex-wrap flex-row items-center justify-center mt-6">
                <div className="m-5 w-[163px] bg-slate-200 rounded-lg h-6"></div>
                <div className="m-5 h-7 w-14 py-1 px-2 rounded-lg bg-slate-200"></div>
            </div>
            <div>
            {Array(10)
            .fill("")
            .map((e, index) => (
                <div className="inline-block bg-slate-200 min-h-96 w-80 m-3 p-2.5 rounded-2xl" key={index}></div>
            ))}
            </div>
        </>
    )
}
 


export default Shimmer;

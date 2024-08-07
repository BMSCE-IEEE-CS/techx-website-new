import useCountdown from "@/components/CountdownTimer";

export const Timer= () =>{
    const { days, hours, minutes, seconds } = useCountdown("2024-09-13T00:00:00");
    return (
        <div className="flex space-x-4 mt-4">
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px", width:"100px" }}>
                  <span className="text-4xl text-mOrange"  style={{fontWeight:"600"}}>{days}</span>
                  <span className="text-lg text-white"  style={{fontWeight:"600"}}>Days</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px" , width:"100px" }}>
                  <span className="text-4xl text-mOrange" style={{fontWeight:"600"}}>{hours}</span>
                  <span className="text-lg text-white"  style={{fontWeight:"600"}}>Hours</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px" , width:"100px" }}>
                  <span className="text-4xl text-mOrange"  style={{fontWeight:"600"}}>{minutes}</span>
                  <span className="text-lg text-white" style={{fontWeight:"600"}}>Minutes</span>
                </div>
                <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4" style={{ fontSize: "90px" , width:"100px" }}>
                  <span className="text-4xl text-mOrange"  style={{fontWeight:"600"}}>{seconds}</span>
                  <span className="text-lg text-white"  style={{fontWeight:"600"}}>Seconds</span>
                </div>
              </div>
    );
}
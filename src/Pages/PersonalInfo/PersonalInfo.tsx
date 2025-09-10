import StatusBar from "../../components/StatusBar/StatusBar";

const PersonalInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-300 h-[700px]">
        <div className="w-[920px] h-[550px] bg-slate-50 rounded-[10px] flex items-center justify-around">
          <StatusBar />
          <div className="w-[600px] h-[530px] bg-slate-50 rounded-[10px]">
            <div className="flex flex-col ml-[80px]">
              <div className="mt-[30px]">
                <p className="font-[800] text-[20px]">Personal info</p>
                <p className="font-[500] text-[15px] text-slate-500 mt-[20px]">
                  Please provide your name , email address , and phone number.
                </p>
              </div>
              <div className="mt-[30px]">
                <div className="mt-[20px]">
                  <p className="text-[13px] font-[500] text-slate-700">Name</p>
                  <input
                    type="text"
                    className="w-[350px] h-[45px] outline-none pl-[20px] border-[1.5px] border-slate-800 rounded-[5px]"
                  />
                </div>
                <div className="mt-[20px]">
                  <p className="text-[13px] font-[500] text-slate-700">
                    Email Address
                  </p>
                  <input
                    type="text"
                    className="w-[350px] h-[45px] outline-none pl-[20px] border-[1.5px] border-slate-800 rounded-[5px]"
                  />
                </div>
                <div className="mt-[20px]">
                  <p className="text-[13px] font-[500] text-slate-700">
                    Phone Numder
                  </p>
                  <input
                    type="text"
                    className="w-[350px] h-[45px] outline-none pl-[20px] border-[1.5px] border-slate-800 rounded-[5px]"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

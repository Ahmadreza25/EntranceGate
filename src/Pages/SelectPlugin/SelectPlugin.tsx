import StatusBar from "../../components/StatusBar/StatusBar";
const SelectPlugin = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-300 h-[700px]">
        <div className="w-[920px] h-[550px] bg-slate-50 rounded-[10px] flex items-center justify-around">
          <StatusBar />
          <div className="w-[600px] h-[530px] bg-slate-50 rounded-[10px]">
            <div className="flex flex-col ml-[80px]">
              <div className="mt-[30px]">
                <p className="font-[800] text-[20px]">Pick add-ons</p>
                <p className="font-[500] text-[15px] text-slate-500 mt-[20px]">
                  Add-ons help enhance your gaming experience.
                </p>
              </div>
              <div className="mt-[30px]">
                <div className="w-[450px] h-[70px] border-[2px] border-violet-500 rounded-[10px] mt-[20px] flex items-center justify-around">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <div className="flex flex-col ml-[20px] w-[300px]">
                      <p className="font-[700]">Online service</p>
                      <p className="font-[400] text-[14px] text-slate-400">
                        Access to multiplayer games
                      </p>
                    </div>
                  </div>
                  <p className="text-violet-500 font-[600]">+$1/mo</p>
                </div>
                <div className="w-[450px] h-[70px] border-[2px] border-violet-500 rounded-[10px] mt-[20px] flex items-center justify-around">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <div className="flex flex-col ml-[20px] w-[300px]">
                      <p className="font-[700]">Larger storage</p>
                      <p className="font-[400] text-[14px] text-slate-400">
                        Extra 1TB of cloud save
                      </p>
                    </div>
                  </div>
                  <p className="text-violet-500 font-[600]">+$2/mo</p>
                </div>
                <div className="w-[450px] h-[70px] border-[2px] border-violet-500 rounded-[10px] mt-[20px] flex items-center justify-around">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" />
                    <div className="flex flex-col ml-[20px] w-[300px]">
                      <p className="font-[700]">Customizable ProFile</p>
                      <p className="font-[400] text-[14px] text-slate-400">
                        Custom theme on your profile
                      </p>
                    </div>
                  </div>
                  <p className="text-violet-500 font-[600]">+$2/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlugin;

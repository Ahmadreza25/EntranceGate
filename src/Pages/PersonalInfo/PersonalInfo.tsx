import StatusBar from "../../components/StatusBar/StatusBar"

const PersonalInfo = () => {
  return (
    <div>
        <div className="flex items-center justify-center bg-slate-300 h-[700px]">
            <div className="w-[920px] h-[550px] bg-slate-50 rounded-[10px] flex items-center justify-around">
                <StatusBar />
                <div className="w-[600px] h-[530px] bg-slate-50 rounded-[10px]">

                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo
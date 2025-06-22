import { useNavigate } from "react-router-dom"

function StartNewForm() {
    const navigate = useNavigate()
  return (
    <section className="pb-[30px] bg-[#f1f3f4] px-5 md:px-10 pt-[80px]">
        <div className="max-w-[1000px] mx-auto">
            <div className="flex justify-between items-center py-[20px]">
                <h5 className="text-[#000] text-[18px] font-[400]">Start a new form</h5>
            </div>
            <div>
                <div className="w-[200px]" onClick={() => navigate("/templates/new")}>
                    <div className="w-full h-[150px] bg-[#fff] rounded-[5px] border-[1px] border-[#999] hover:border-[#7248b9] transition-all duration-200 cursor-pointer flex items-center justify-center">
                        <img src="/add-symbol.svg" alt="add button" className="w-[60px]"/>
                    </div>
                    <h3 className="py-[10px] font-[600]">Blank form</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StartNewForm
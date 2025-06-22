function CreateNewForm() {
  return (
    <section className=" pt-[80px] bg-[#f0ebf8] min-h-[100vh]">
        <div className="w-full py-[10px] px-5 md:px-10 bg-[#e1e1e1] flex fixed z-100 items-center gap-[50px]">
            <h3 className="text-[20px] font-[600]">Untitled form</h3>
            <ul className="flex items-center">
                <li className="cursor-pointer border-b-[3px] text-[#7248b9] border-[#7248b9]">Questions</li>
            </ul>
        </div>
        <div className="max-w-[800px] mx-auto mt-[70px] flex flex-col gap-[20px]">
            <div className="w-full bg-[#fff] border-l-[7px] border-[#0048ff] rounded-[10px] py-[30px] px-[20px]">
                <h2 className="text-[35px] font-[600] py-[10px] border-b-[1px] w-full border-[#999]">Untitled form</h2>
                <p className="pt-[20px] text-[#999] pb-[10px] border-b-[1px] w-full border-[#999]">Form description</p>
            </div>
            <div className="w-full bg-[#fff] border-l-[7px] border-[#0048ff] rounded-[10px] py-[30px] px-[20px]">
                <h2 className="text-[20px] font-[600] py-[10px] border-b-[1px] w-full border-[#999]">Question</h2>
                <p className="pt-[20px] text-[#999] pb-[10px] border-b-[1px] w-full border-[#999]">Form description</p>
            </div>
        </div>
    </section>
  )
}

export default CreateNewForm
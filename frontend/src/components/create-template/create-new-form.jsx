import { useEffect, useRef, useState } from "react"
import { useParams, useSearchParams} from "react-router-dom"
import debounce from 'lodash.debounce'
import axios from 'axios'

const API = import.meta.env.VITE_API

function CreateNewForm() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [formName, setFormName] = useState("Untitled form")
    const formPage = searchParams.get("form-page") || ""
    const [statusFormName, setStatusFormName] = useState('Saved')  
    const {id} = useParams()
    const token = localStorage.getItem('token')

    const spanRefFormName = useRef(null);
    const inputRefFormName = useRef(null);
    const displayValue = formName.length > 0 ? formName : "Untitled Form"

    // auto save title 
    useEffect(() => {
        if (!statusFormName) return
        setStatusFormName('Saving...')
        debouncedSave()
    }, [formName])

    const saveChanges = async () => {
        try {
            await axios.put(`${API}/api/templates/${id}`, { title: formName }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setStatusFormName('Saved')
        } catch (err) {
            console.log(err)
            setStatusFormName('Error')
        }
    }
    const debouncedSave = debounce(saveChanges, 1000)

    useEffect(() => {
        if (spanRefFormName.current && inputRefFormName.current) {
            const width = spanRefFormName.current.offsetWidth;
            inputRefFormName.current.style.width = `${width + 2}px`;
        } 
    }, [formName]);

    function handleTabPage(path)  {
        searchParams.set("form-page", path)
        setSearchParams(searchParams)
    }

    function handleChangeFormName(val) {
        setFormName(val)
    }

  return (
    <section className=" pt-[80px] bg-[#f0ebf8] min-h-[100vh]">
        <div className="w-full py-[10px] px-5 md:px-10 bg-[#e1e1e1] flex fixed z-100 items-center gap-[50px]">
            <div className="relative inline-block">
            {/* Hidden span for width measurement */}
            <span ref={spanRefFormName} className="absolute top-0 left-0 text-[20px] font-[600] invisible whitespace-pre px-1 border-none">
                {displayValue || " "}
            </span>
            <input ref={inputRefFormName} type="text" value={displayValue} onChange={(e) => handleChangeFormName(e.target.value)} className="outline-none text-[20px] font-[600] "/>
            </div>
            <ul className="flex items-center gap-[20px]">
                <li onClick={() => handleTabPage("questions")} className={`cursor-pointer border-b-[3px] ${(formPage == "questions" || formPage == "") ? "text-[#7248b9] border-[#7248b9]" : "text-[#000] border-transparent"}`}>Questions</li>
                <li onClick={() => handleTabPage("responses")} className={`cursor-pointer border-b-[3px] ${formPage == "responses"  ? "text-[#7248b9] border-[#7248b9]" : "text-[#000] border-transparent"}`}>Responses</li>
                <li onClick={() => handleTabPage("settings")} className={`cursor-pointer border-b-[3px] ${formPage == "settings"  ? "text-[#7248b9] border-[#7248b9]" : "text-[#000] border-transparent"}`}>Settings</li>
            </ul>
            <div className="text-xs text-gray-500 italic mt-1">{statusFormName === 'Saving...' ? 'Saving changes…' : statusFormName === 'Saved' ? 'All changes saved' : 'Error while saving'}</div>
        </div>
        {(formPage == "questions" || formPage == "") && <div className="max-w-[800px] mx-auto mt-[70px] flex flex-col gap-[20px]">
            <div className="w-full bg-[#fff] border-l-[7px] border-[#0048ff] rounded-[10px] py-[30px] px-[20px]">
                <h2 className="text-[35px] font-[600] py-[10px] border-b-[1px] w-full border-[#999]">Untitled form</h2>
                <p className="pt-[20px] text-[#999] pb-[10px] border-b-[1px] w-full border-[#999]">Form description</p>
            </div>
            <div className="w-full bg-[#fff] border-l-[7px] border-[#0048ff] rounded-[10px] py-[30px] px-[20px]">
                <h2 className="text-[18px] font-[600] py-[10px] border-b-[1px] w-full border-[#999]">Question</h2>
                <p className="pt-[20px] text-[#999] pb-[10px] border-b-[1px] w-full border-[#999]">Form description</p>
            </div>
        </div>}
        {formPage == "responses" && <div className="max-w-[800px] mx-auto mt-[70px] flex flex-col gap-[20px]">
            <div className="w-full bg-[#fff]  rounded-[10px] py-[20px] px-[20px]">
                <h2 className="text-[35px] font-[600] py-[10px]">0 responses</h2>
            </div>
            <div className="w-full bg-[#fff] border-l-[7px] border-[#0048ff] rounded-[10px] py-[30px] px-[20px]">
                <h2 className="text-[18px] font-[600] py-[10px] border-b-[1px] w-full border-[#999]">Question</h2>
                <p className="pt-[20px] text-[#999] pb-[10px] border-b-[1px] w-full border-[#999]">Form description</p>
            </div>
        </div>}
        {formPage == "settings" && <div className="max-w-[800px] mx-auto mt-[70px] flex flex-col gap-[20px]">
            <div className="w-full bg-[#fff]  rounded-[10px] py-[20px] px-[20px]">
                <h2 className="text-[35px] font-[600] py-[10px]">settings</h2>
            </div>
        </div>}
    </section>
  )
}

export default CreateNewForm
import news from "../assets/news-red.svg"
import report from "../assets/financial-reports-red.svg"
import foundation from "../assets/uba-foundation-red.svg"
import leo from "../assets/leo-meta-verse-chat-face.jpg"
import leobday from "../assets/Web-banner.jpg"
import focus from "../assets/UBA-Foundation-2-scaled.jpg"
import {FaCircle} from "react-icons/fa"
import {useState} from "react"
const LandingPage = () => {
  const [active, setActive] = useState(0)
  const circle = [<FaCircle/>, <FaCircle/>, <FaCircle/>, <FaCircle/>]
  return (
    <div className=" mt-[70px] ">
        <section>
            
        </section>

        <section>
          <div className="">
            <div className="flex items-center justify-between border-b-2 px-4">
              <h2 className=" text-[20px] font-semibold">News & Publications</h2>
              <img src={news} alt="" />
            </div>
            <div className="flex items-center justify-between border-b-2 px-4">
              <h2 className=" text-[20px] font-semibold">Financial Reports</h2>
              <img src={report} alt="" />
            </div>
            <div className="flex items-center justify-between border-b-2 px-4">
              <h2 className=" text-[20px] font-semibold">UBA Foundation</h2>
              <img src={foundation} alt="" />
            </div>
          </div>
        </section>

        <section className="px-4 pt-[40px]">
          <h2 className=" text-[25px] font-bold text-gray-500 pb-2">Let's make it easier for you</h2>
          <p className="text-[18px] text-gray-500 font-medium mb-[20px]">Find what you are Looking for quicker by telling us what you do or who you are</p>

          <form className="flex flex-col gap-y-3">
            <select name="" className="h-[50px] border-[1px] border-gray-400 rounded-md px-2 text-[18px] text-gray-500">
              <option value="">Please Select</option>
              <option value="">Business</option>
              <option value="">Entrepreneur</option>
              <option value="">Individual</option>
              <option value="">Investor</option>
              <option value="">Software developer</option>
              <option value="">Digital Banking</option>
              <option value="">Student</option>
              <option value="">Teenager</option>
              <option value="">Job Applicant</option>
              <option value="">Journalist</option>
            </select>
            <button className="bg-[#CD1307] text-white font-medium rounded-md h-[50px]">GET STARTED</button>
          </form>
          <div className=" pt-5 mb-5 w-full h-[350px]">
            <img src={leo} className="rounded-md h-full w-full object-cover" alt="" />
          </div>
          
        </section>

        <section className="bg-black  text-white py-5 px-4">
          <h1 className="text-[25px] font-medium text-center my-4 ">Why choose UBA?</h1>
          <h2 className="text-[19px] text-center mb-3 font-medium leading-7">We don't just help you reach financial milestones, we build lasting relationships</h2>
          <p className="text-center text-[18px]">As digital pioneers, we integrate innovative technological advancements, like Africa's first banking chatbot LEO, and priortise safety and security with cutting-edge infrastructure. Our global presence in 4 continents, 20 Africa countries, and over 7 decades of expertise, attracts an expanding customer base as we provide superior and sustainable financial services.</p>
          <div className=" my-4 flex flex-col items-center gap-y-3">
          <button className="text-white px-5 py-2 rounded-md bg-black border-2 border-white">FIND OUT WHY</button>
          <button className="px-5 py-2 rounded-md bg-[#CD1307] text-white">OPEN AN ACCOUNT</button>
          </div>
        </section>

        <section className="px-4 mt-5">
          <div className=" shadow-lg pt-3">
              <div className="h-[280px] w-full ">
              <img src={leobday} className="rounded-md h-full object-cover object-right-[20]" alt="" />
              </div>
              <div className="p-3">
                <h3 className="text-[18px] mb-4">REPORT</h3>
                <h1 className="text-[22px] mb-8 font-medium leading-7">UBA's Leo Celebrates Six Years of Impact, Promises New Offerings.</h1>
                <a href="#" className="text-[#CD1307]">READ MORE</a>
              </div>
              <div className="text-[#CD1307] p-3 text-[14px] flex gap-1 justify-end">
                {circle?.map((prop, index)=>(
                  <div onClick={()=>setActive(index)} className={active === index ? "text-[#CD1307]" : "text-[#d26861f8]"} key={index}>
                    
                  {prop}
                </div>
                ))}
              </div>
          </div>
          <div className=" shadow-lg mt-5 pt-3">
              <div className="h-[280px] w-full ">
              <img src={focus} className="rounded-md h-full object-cover object-right-[20]" alt="" />
              </div>
              <div className="p-3">
                <h3 className="text-[18px] mb-4">COUNTRY IN FOCUS</h3>
                <h1 className="text-[22px] mb-8 font-medium leading-7">Physical Fitness, Regular Checks Essential for Good Financial Decisions, Experts Tell SMEs in UBA Business Series.</h1>
                <a href="#" className="text-[#CD1307]">READ MORE</a>
              </div>
              <div className=" p-3 text-[14px] flex gap-1 justify-end">
                {circle?.map((prop, index)=>(
                  <div onClick={()=>setActive(index)} className={active === index ? "text-[#CD1307]" : "text-[#d26861f8]"} key={index}>
                    
                    {prop}
                  </div>
                ))}
              </div>
          </div>
        </section>

    </div>
  )
}

export default LandingPage
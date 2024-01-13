import news from "../assets/news-red.svg"
import report from "../assets/financial-reports-red.svg"
import foundation from "../assets/uba-foundation-red.svg"
import leo from "../assets/leo-meta-verse-chat-face.jpg"
const LandingPage = () => {
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
          <div className=" pt-5 mb-5 w-full h-[300px]">
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

        <section>
          <div className="">

          </div>
        </section>

    </div>
  )
}

export default LandingPage
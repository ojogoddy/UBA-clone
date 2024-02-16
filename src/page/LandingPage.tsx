import news from "../assets/news-red.svg"
import report from "../assets/financial-reports-red.svg"
import foundation from "../assets/uba-foundation-red.svg"
import leo from "../assets/leo-meta-verse-chat-face.jpg"
import leobday from "../assets/Web-banner.jpg"
import focus from "../assets/UBA-Foundation-2-scaled.jpg"
import {FaCircle} from "react-icons/fa"
import {useState} from "react"
import round from "../assets/UBA-Foundation-2-scaled.jpg"
import first from "../assets/Supersavers-Website-banner-B.jpg"
import map from "../assets/world-map.png"

import Carousel from "../component/Carousel"

import message from "../assets/Messages-for-Business-Icon.svg"
import a from "../assets/UBA-Leadership-header2-1.jpg"
import b from "../assets/UBA-Group-Achievements.jpg"
import c from "../assets/UBA-Header-inner-page-about-uba.jpg"

const LandingPage = () => {
  const [active, setActive] = useState(0)
  const circle = [<FaCircle/>, <FaCircle/>, <FaCircle/>, <FaCircle/>]
  const redsample = [
    {
      bgImage: a,
      text: "Leadership"
    },
    {
      bgImage: b,
      text: "Achievements"
    },
    {
      bgImage: c,
      text: "About UBA"
    },
  ]
  // const hero =[
  //   {
  //     background: first,
  //     title: "Save and win million",
  //     text: "You could be the next millionaire. Start saving now and get rewarded."
  //   },
  //   {
  //     background: first,
  //     title: "Convenience at Your Fingertips",
  //     text: "The UBA Mobile App is the perfect blend of control, support, flexibility and fun."
  //   },
  //   {
  //     background: first,
  //     title: "Your Africa Trade Partner",
  //     text: "We understand the complexities of the global market. Our products and services have been designed to ease your banking needs."
  //   },
  //   {
  //     background: first,
  //     title: "Serving Customers Across the Middle East",
  //     text: "The birth UBA Dubai is in line with our vision. We are global in outlook and competence, African by heart and knowledge, and a bridge to the world economy."
  //   },
  //   {
  //     background: first,
  //     title: " A Gateway Between Africa and North America ",
  //     text: "As the only sub-saharan African bank with an operational banking licence in the U.S., UBA America provides critical services to those in and out of Africa."
  //   },
  //   {
  //     background: first,
  //     title: " Hi! My Name is Leo, Your Ultimate Banking Buddy",
  //     text: "Check out all the cool ways we can be friends; Google Business Chat, Apple Messages, Facebook, Whatsapp, Instagram. Just say Hi and let's get talking."
  //   },
  //   {
  //     background: first,
  //     title: " Excellent Service... Delivered",
  //     text: "Now fully positioned as a pan-African bank, UBA Group is firmly at the forefront of driving the renaissance of the African economy."
  //   },
  // ]
  return (
    <div className=" mt-[70px] ">
        <section>
          <div className="relative h-[75vh]">
          <div className=" absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${first})`,
              borderRadius: "6px"}}></div>

              {/* overlay */}
          <div className="absolute inset-0 bg-[#280502] opacity-50 bg-center"></div>
          <div className="absolute text-white flex items-center justify-center inset-4">
          <div className=" text-center px-4">
            <h1 className="text-[40px] font-bold leading-[50px] mb-8">Save and win millions</h1>
            <p className="text-[20px] mb-5">You could be the next millionaire. Start saving now and get rewarded</p>
            <button className="px-5 mt-5 py-2 rounded-md bg-[#e01304c3] text-white">GET STARTED</button>
          </div>
          </div>
          </div>

          
            
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

        <section className="px-4 mt-5 ">
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
              <div className=" p-3 text-[14px] flex gap-1 justify-end mb-20">
                {circle?.map((prop, index)=>(
                  <div onClick={()=>setActive(index)} className={active === index ? "text-[#CD1307]" : "text-[#d26861f8]"} key={index}>
                    {prop}
                  </div>
                ))}
              </div>
          </div>
        </section>

        <section className="  py-10">
          <div className="relative h-[420px]">
              <div className=" absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${map})`,
            borderRadius: "6px"}}></div>
          <div className="inset-0 bg-black opacity-90 absolute"></div>
          <div className="absolute inset-0 flex items-center justify-center">
          <div className="">
          <h1 className="text-white text-center font-semibold text-[25px] leading-8 ">Get the right account for your personal and business needs</h1>
          <div className=" my-7 flex flex-col items-center gap-y-3">
          <button className="px-4 py-2 rounded-md bg-red-700 text-white shadow-lg">OPEN A PERSONAL ACCOUNT</button>
          
          <p className="text-gray-300">OR</p>
          <button className="text-red-700 px-8 py-2 rounded-md  border-2 border-gray-300 shadow-lg">OPEN A BUSINESS ACCOUNT</button>
          </div>
          </div>
          </div>
          </div>

        </section>

          <section className="relative mt-10">
              <div className=" relative h-[420px]">
                <div className=" mx-3 absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/UBAnorth.jpg)',
              borderRadius: "6px"}}></div>
              </div>

              <div className="absolute inset-0 bg-gray-800 rounded-md  mx-3 opacity-50 bg-center"></div>
              <div className="absolute inset-4 flex items-center justify-center  text-white">
                <div className="text-center px-2">
                  <p className="text-[20px] mb-4">PRESS RELEASE</p>
                  <h3 className="text-[24px] font-medium leading-7 pb-8">Stay updated with press release</h3>
                  <p className="text-[19px] leading-7">UBA is dedicated to providing timely, accurate and balanced disclosure of all material information about the Bank.</p>
                  <button className="px-5 mt-5 py-2 rounded-md bg-[#CD1307] text-white">LEARN MORE</button>
                </div>
              </div>

          </section>

          <section className="px-4 my-10">
            <div className="bg-slate-100 pb-4 text-center shadow">
              <h1 className="text-[30px] pt-10 font-bold leading-9">Banking beyond the norm</h1>
              <p className="text-[25px] leading-8 mt-5">Take a closer look at other things we support</p>
              <div className=" h-[300px] mt-10 mx-auto w-[300px] rounded-full ">
                <img src={round} className="object-cover rounded-full h-full w-full" alt="" />
              </div>
              <h1 className="text-[30px] py-6 font-medium leading-9">UBA <br /> FOUNDATION</h1>
            </div>
          </section>

          <section className=" bg-[#CD1307] text-white mx-3">
            <div className=" px-3 py-10">
              <h1 className="text-[32px] mb-3 font-bold leading-10 text-center">Can't find what you're searching for?</h1>
              <p className="text-[18px] mb-1">Fill in the details below</p>
              <form className="flex flex-col w-full space-y-4" >
                <input className="h-[45px] rounded-md px-2" type="text" placeholder="Full Name" />
                <input className="h-[45px] rounded-md px-2"  type="email" placeholder="Email" />
                <input className="h-[45px] rounded-md px-2"  type="tel" placeholder="Phone Number" />
                <select className="h-[45px] rounded-md px-1 text-gray-500 border-0 outline-none"  name="">
                  <option value="" selected>What is your interest?</option>
                  <option value="">Card</option>
                  <option value="">Corporate Banking</option>
                  <option value="">Digital Banking</option>
                </select>
                <textarea name="" className="h-[100px] rounded-md px-2"  placeholder="Message"></textarea>
                <div className=" flex items-center gap-x-3">
                <input type="checkbox" />
                 <p>I accept the <span>terms and conditions</span> of use.</p>
                </div>
                <button className="shadow-lg py-2 bg-red-950 rounded-md" type="submit">SEND</button>
              </form>
            </div>
          </section>
          <Carousel/>     

          <section>
            <div className="flex justify-center flex-col items-center space-y-5">
              <p className="text-[30px] font-medium">Got questions?</p>
              <div className=" w-[90px] h-[90px] ">
                <img src={message} alt="" className="" />
              </div>
              <p className="text-[30px] font-medium text-center">Chat with Leo on Apple Messages</p>
            </div>
            {redsample?.map((prop, index)=>(
              <div className="" key={index}>
                <div className="relative h-[200px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${prop.bgImage})`}}></div>

              <div className="absolute inset-0 bg-red-500 opacity-50 bg-center"></div>
              <h1 className="absolute inset-4 flex items-center justify-center text-white text-[40px] font-semibold">{prop.text}</h1>

            </div>
              </div>
            ))}
            
          </section>

    </div>
  )
}

export default LandingPage
function Contact(){
    return(
        <div id="contack">
            <div className="h-[20vh] w-full relative"></div>
      <section className="min-h-[50vh] w-screen  flex-center bg-[#2a2f3f0d] p-10 pt-16">
        <div className="w-[80%] min-h-[50vh] relative ">
          <div className="w-full h-[25em] flex-bet flex-col">
            <div className="w-full h-[80%] flex">
              <div className="w-[40%] h-full relative">
                <div className="w-full min-h-[15%] relative flex">
                  <h1 className={`text-[26px] letter w-full flex items-start font-cursive   absolute left-0  h-full`}>
                    
                    
                  </h1>
                </div>
                <div className={`relative w-full h-[60%] leading-10 text-lg `} >
                  <p className="mt-5">
                    We are trying to make the world a better place 
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full relative flex justify-end">
                <div className="w-[85%] h-full \" >
                  <div className="w-full h-[35%] leading-10">
                    <h5 className={` text-4xl`}>Have a great idea in mind?</h5>
                    <div className=" w-[40%] flex relative">
                      <p className="text-3xl mt-5 text-[#6a6969] relative">Let{'\u0027'}s Connect</p>
                      <i className="bi bi-arrow-up-right absolute right-2 bottom-0 shadow"></i>
                    </div>
                  </div>
                  <div className="relative w-full h-[20%] mt-3">
                    <div className="w-[30%] h-full relative flex items-center justify-start  icons">
                      <i className="bi bi-instagram  animate-bounce pr-7"></i>
                      <i className="bi bi-linkedin animate-bounce pr-7"></i>
                      <i className="bi bi-envelope animate-bounce"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
        </div>
    )
}


export default Contact;
import React from "react";

const Contact = () => {
  return (
    <section className="py-4">
      <h1 className=" py-0 text-center  text-green-food font-WorkSansLight text-[36px] md:text-[60px] uppercase">
        CONTACTEZ-NOUS
      </h1>
      <div className="md:w-[60%] w-[100%] m-auto my-4">
        <div className="flex py-2 flex-col">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-WorkSansReg text-[14px] md:text-[16px] uppercase">
                    First Name
                  </h4>
                </label>
                <input
                  type="text"
                  className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-1 border-muted"
                />
              </div>
            </div>

            <div className="md:w-[50%] w-[100%]">
              <div className="mx-2">
                <label htmlFor="first_name">
                  <h4 className=" py-1  text-danger  font-WorkSansReg text-[14px] md:text-[16px] uppercase">
                    Last Name
                  </h4>
                </label>
                <input
                  type="text"
                  className="px-2 w-[100%] rounded border-[1px] py-1 outline-green-food border-muted"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="mx-2">
            <label htmlFor="first_name">
              <h4 className=" py-1  text-danger  font-WorkSansReg text-[14px] md:text-[16px] uppercase">
                Email
              </h4>
            </label>
            <input
              type="text"
              className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-1 border-muted"
            />
          </div>
        </div>

        <div className="py-2">
          <div className="mx-2">
            <label htmlFor="first_name">
              <h4 className=" py-1  text-danger  font-WorkSansReg text-[14px] md:text-[16px] uppercase">
                Message
              </h4>
            </label>
            <textarea
              className="px-2 outline-green-food  w-[100%] rounded border-[1px] py-1 border-muted"
              name=""
              rows="5"
              id=""
            ></textarea>
          </div>
        </div>

        <div className="py-2">
           <div className="mx-2">
              <button className="  font-WorkSansBold uppercase text-white  bg-danger w-[100%] rounded border-[1px] py-2">Submit</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

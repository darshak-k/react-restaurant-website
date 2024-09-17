import React, { useState } from "react";
import dots from "../images/dots.png";
import childadd from "../images/chidadd.png";
import { t } from "i18next";

const Childprofile = () => {
  let initialFormData = {
    firstname: "",
    lastname: "",
    schoolname: "",
    group: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log(formData);
    setFormData(initialFormData);
  };
  return (
    <section className="">
      <section className="bg-[#f99292] ">
        <form action="" onSubmit={handleSubmit}>
          <div className="w-[80%] py-12 flex flex-col justify-between  h-[100vh] m-auto">
            <div>
              <h1 className="text-white text-3xl font-WorkSansBoldItalic">
                {t('CHILD_PROFILE')}
              </h1>
            </div>
            <div>
              <div className="flex flex-wrap">
                <div className="w-[50%] ">
                  <div className="pe-5">
                    <div className="flex my-8">
                      <div className="w-[50%] h-[30px] flex flex-col justify-center">
                        <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                          {t('first_name')}*
                        </h1>
                      </div>
                      <div className="w-[50%]">
                        <input
                          type="text"
                          className="w-[100%] h-[30px] outline-none"
                          id="firstname"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pe-5">
                    <div className="flex my-8">
                      <div className="w-[50%] h-[30px] flex flex-col justify-center">
                        <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                          {t('last_name')}*
                        </h1>
                      </div>
                      <div className="w-[50%]">
                        <input
                          type="text"
                          className="w-[100%] h-[30px] outline-none"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] ">
                  <div className="pe-5">
                    <div className="flex my-8">
                      <div className="w-[50%] h-[30px] flex flex-col justify-center">
                        <h1 className="font-bold text-center font-WorkSansBoldItalic text-white text-[20px]">
                          School name*
                        </h1>
                      </div>
                      <div className="w-[50%]">
                        <input
                          type="text"
                          className="w-[100%] h-[30px] outline-none"
                          name="schoolname"
                          value={formData.schoolname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="pe-5">
                    <div className="flex my-8">
                      <div className="w-[50%] h-[30px] flex flex-col justify-center">
                        <h1 className="font-bold font-WorkSansBoldItalic text-center text-white text-[20px]">
                          {t('Group')}
                        </h1>
                      </div>
                      <div className="w-[50%]">
                        <input
                          type="text"
                          className="w-[100%] h-[30px] outline-none"
                          name="group"
                          value={formData.group}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex">
                <div>
                  <h2 className="font-WorkSansBold text-white text-2xl">
                    {t('ALLERGIES')} :
                  </h2>
                </div>
                <div className="mx-4">
                  <div className="flex ">
                    <div className="flex flex-col justify-center">
                      <img src={dots} className="h-[20px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                       
                      <h3 className="text-white text-[21px] font-WorkSansReg italic">
                        {t('Peanuts')}
                      </h3>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex flex-col justify-center">
                      <img src={dots} className="h-[20px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                       
                      <h3 className="text-white text-[21px] font-WorkSansReg italic">
                        {t('eggs')}
                      </h3>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex flex-col justify-center">
                      <img src={dots} className="h-[20px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                       
                      <h3 className="text-white text-[21px] font-WorkSansReg italic">
                        {t('Soya')}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="mx-4">
                  <div className="flex ">
                    <div className="flex flex-col justify-center">
                      <img src={dots} className="h-[20px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                       
                      <h3 className="text-white text-[21px] font-WorkSansReg italic">
                        {t('Sea_Food')}
                      </h3>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex flex-col justify-center">
                      <img src={dots} className="h-[20px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                       
                      <h3 className="text-white text-[21px] font-WorkSansReg italic">
                        {t('Sesame')}
                      </h3>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex flex-col justify-center">
                      <img src={dots} className="h-[20px]" alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                       
                      <h3 className="text-white text-[21px] font-WorkSansReg italic">
                        {t('Lactose')}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-8 w-[100%]">
                <button className="bg-[#fc221c] px-8 rounded-full font-bold   text-white p-2">
                  {t('SUBMIT')}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section className="bg-[#53D587]">
        <div className="h-[100vh] bg-[#53d587]">
          <div className="h-[100%] w-[80%] flex  flex-col justify-between py-12 m-auto">
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('FULL_NAME')}
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('Adress')}*
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('Daytimephone')}*
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('Email_adress')}*
                </h2>
              </div>
              <div>
                <h2 className="text-white text-2xl">{t('navitemthree')}</h2>
                <h3 className="text-white text-2xl w-[auto]">
                  {t('edit_profile')}
                </h3>
              </div>
            </div>
            <div>
              <h1 className="text-3xl text-white font-WorkSansBold">
                {t('MY_CHILDREN')}
              </h1>
              <div className="flex justify-between py-8">
                <div className="w-[400px] bg-[#12a3a8] p-8 flex flex-col justify-between  h-[180px]">
                  <div>
                    <h3 className="text-white font-WorkSansBoldItalic uppercase text-[18px]">
                      {t('NAME_OF_ADDED_CHILD')}
                    </h3>
                  </div>
                  <div className="flex  my-8 w-[100%]">
                    <button className="bg-[#fc221c] px-8 rounded-full font-bold   text-white p-2">
                      {t('ORDER_FOR_THIS_CHILD')}
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={childadd}
                    className="w-[400px] h-[180px] object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Childprofile;

import React, { useState } from "react";
import fileup from "../images/addfile.png";
import logofood from "../images/logo-ac.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.js";

const Persnolac = () => {
  let initialFormData = {
    firstname: "",
    lastname: "",
    adress: "",
    city: "",
    postalcode: "",
    daytimePhone: "",
    emailaddres: "",
    password: "",
    cnfpassword: "",
    newtrums: false,
  };
  const [currentLanguage, setCurrentLanguage] = useState ("en");
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState("");
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.cnfpassword)
      newErrors.cnfpassword = "Passwords do not match.";
    if (!formData.newtrums)
      newErrors.newtrums = "You must agree then submit.";

    setErrors(newErrors);
    console.log(errors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setErrors({});
    console.log(formData);
    setFormData(initialFormData);
  };

  const { t } = useTranslation();


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <section>
      <section className="bg-[#ea673c] min-h-[100vh]">
        <div className="w-[80%] flex flex-col justify-between py-8   h-[100%] m-auto ">
          <div className="flex justify-between ">
            <h2 className="font-WorkSansBoldItalic text-4xl text-white ">
              {t('CREATE_YOUR_ACCOUNT')}
            </h2>

            <h3 className="font-WorkSansBoldItalic text-2xl text-white ">
                 {t('Language')}
            </h3>

            <h3 className="font-WorkSansBoldItalic text-2xl text-white ">
              <span className=" cursor-pointer" onClick={() => changeLanguage("fs")} > French</span> OR  <span className=" cursor-pointer " onClick={() => changeLanguage("en")} >English</span>
            </h3>
          </div>
          <div className="">
            <form
              className="flex flex-wrap my-16"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="w-[50%] pe-5">
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
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                      {t('Address')}*
                    </h1>
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-[100%] h-[30px] outline-none"
                      id="adress"
                      name="adress"
                      value={formData.adress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                      {t('City')}*
                    </h1>
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-[100%] h-[30px] outline-none"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                     {t('Postal_code')}*
                    </h1>
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-[100%] h-[30px] outline-none"
                      id="postalcode"
                      name="postalcode"
                      value={formData.postalcode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[50%] ps-5">
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                      {t('DaytimePhone')}*
                    </h1>
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-[100%] h-[30px] outline-none"
                      name="daytimePhone"
                      value={formData.daytimePhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                      {t('Email_address')}*
                    </h1>
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="text"
                      className="w-[100%] h-[30px] outline-none"
                      name="emailaddres"
                      value={formData.emailaddres}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                      {t('Password')}*
                    </h1>
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="password"
                      className="w-[100%] h-[30px] outline-none"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex my-8">
                  <div className="w-[50%] h-[30px] flex flex-col justify-center">
                    <h1 className="font-bold font-WorkSansBoldItalic text-white text-[20px]">
                    {t('Confirm_your_password')}*
                    </h1>
                    
                  </div>
                  <div className="w-[50%]">
                    <input
                      type="password"
                      className="w-[100%] h-[30px] outline-none"
                      name="cnfpassword"
                      value={formData.cnfpassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.cnfpassword != "" && (
                      <div className="text-[red] ml-4 text-end w-[100%]">
                        {errors.cnfpassword}
                      </div> // Display error message
                    )}
              </div>

              <div className="flex justify-center my-4 w-[100%]">
                <button className="bg-[#fc221c] px-8 rounded-full font-bold   text-white p-2">
                  {t('SUBMIT')}
                </button>
              </div>
              {errors.newtrums != "" && (
                <div className="text-[red] ml-4 text-center w-[100%]">
                  {errors.newtrums}
                </div> // Display error message
              )}
            </form>
          </div>
          <div className="h-[100%] flex justify-center">
            <div className="flex h-[100%]">
              <div className="h-[100%] flex flex-col justify-center">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] outline-none"
                  name="newtrums"
                  checked = {formData.newtrums}
                
                  onChange={handleChange}
                />
              </div>
              <div className="flex h-[100%] flex-col justify-center">
                <h2 className="ms-4 font-WorkSansBoldItalic text-white text-2xl">
                 {t('agreement')}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[100vh] bg-[#53d587]">
          <div className="h-[100%] w-[80%] flex  flex-col justify-between py-12 m-auto">
            <div className="flex h-[100%] justify-between">
              <h1 className="font-WorkSansBoldItalic text-white text-4xl">
                {t('MY_ACCOUNT')}
              </h1>

              <h2 className="text-white text-2xl">{t('Menu')}</h2>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('FULL_NAME')}
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('Adress')}*
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('DaytimePhone')}*
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  {t('Email_address')}*
                </h2>
              </div>
              <div>
                <h3 className="text-white text-2xl ">
                  {t('edit_profile')}
                </h3>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col justify-center">
                <img src={fileup} width="350px" alt="" />
              </div>
              <div>
                <img
                  src={logofood}
                  width="280px"
                  className="h-auto object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Persnolac;

import React, { useState } from "react";
import fileup from "../images/addfile.png";
import logofood from "../images/logo-ac.png";

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
    newtrums:false
  }
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!formData.newtrums) {
      setError("You must agree to receive email alerts.");
      return; 
    }

    setError("");
    console.log(formData);
    setFormData(initialFormData);
  };

  return (
    <section>
      <section className="bg-[#ea673c] min-h-[100vh]">
        <div className="w-[80%] flex flex-col justify-between py-8   h-[100%] m-auto ">
          <div className="flex justify-between ">
            <h2 className="font-WorkSansBoldItalic text-4xl text-white ">
              CREATE YOUR ACCOUNT
            </h2>

            <h3 className="font-WorkSansBoldItalic text-2xl text-white ">
              Language
            </h3>

            <h3 className="font-WorkSansBoldItalic text-2xl text-white ">
               French OR  English
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
                      First name*
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
                      Last name*
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
                      Address*
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
                      City*
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
                      Postal code*
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
                      DaytimePhone*
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
                      Email address*
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
                      Password*
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
                      Confirm your password*
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
              </div>

              <div className="flex justify-center my-4 w-[100%]">
                <button className="bg-[#fc221c] px-8 rounded-full font-bold   text-white p-2">
                  SUBMIT
                </button>
                
              </div>
              {error && (
                  <div className="text-[red] ml-4 text-center w-[100%]">{error}</div> // Display error message
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
                  value={formData.newtrums}
                  onChange={handleChange}
                />
              </div>
              <div className="flex h-[100%] flex-col justify-center">
                <h2 className="ms-4 font-WorkSansBoldItalic text-white text-2xl">
                  I agree to receive email alerts announcing the availability of
                  a new menu.
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
                MY ACCOUNT
              </h1>

              <h2 className="text-white text-2xl">Menu</h2>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  FULL NAME{" "}
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  Adress*
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  Daytime phone*
                </h2>
                <h2 className="text-2xl font-WorkSansBoldItalic text-white">
                  Email adress*
                </h2>
              </div>
              <div>
                <h3 className="text-white text-2xl w-[100px]">
                  Edit My Profile
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

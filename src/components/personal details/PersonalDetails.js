import React, { useState, useRef } from "react";
import "./PersonalDetails.css";
import GeneratedResume from "../generated resume/GeneratedResume";
const PersonalDetails = () => {
  const imageRef = useRef();
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    country: "",
    pincode: "",
    mob: "",
    email: "",
  });
  const [err, setErr] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    city: "",
    country: "",
    pincode: "",
    mob: "",
    email: "",
  });

  const [img, setImg] = useState("");
  const [isErrorPresent, setErrorPresent] = useState(true);
  console.log("isErrorPresent", isErrorPresent);
  let arrErr = Object.values(err);

  const handleChange = (e) => {
    if (e.target.value) {
      setErr({ ...err, [e.target.name]: "" });
    }
    else setErrorPresent(true)
    setPersonal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (
      !err.city &&
      !err.country &&
      !err.email &&
      !err.firstName &&
      !err.lastName &&
      !err.mob &&
      !err.pincode &&
      !err.profession
    )
      setErrorPresent(false);
    else setErrorPresent(true);

    // arrErr.map((e) => {
    //   if (e.length !== 0) return setErrorPresent(true);
    // });
  };
  const handleClick = () => {
    if (!personal.city) {
      // setErr((prev) => ({ ...prev, city: "City field should not be empty" }));
      setErr({ ...err, city: "City field should not be empty" });
    }
    if (!personal.country) {
      setErr({ ...err, country: "Country field should not be empty" });
      // setErr((prev) => ({
      //   ...prev,
      //   country: "Country field should not be empty",
      // }));
    }
    if (!personal.email) {
      setErr((prev) => ({ ...prev, email: "Email field should not be empty" }));
    }
    if (!personal.city) {
      setErr((prev) => ({ ...prev, city: "City field should not be empty" }));
    }
    if (!personal.firstName) {
      setErr((prev) => ({
        ...prev,
        firstName: "First Name field should not be empty",
      }));
    }
    if (!personal.lastName) {
      setErr((prev) => ({
        ...prev,
        lastName: "last name field should not be empty",
      }));
    }
    if (!personal.mob) {
      setErr((prev) => ({
        ...prev,
        mob: "Mobile number field should not be empty",
      }));
    }
    if (!personal.pincode) {
      setErr((prev) => ({
        ...prev,
        pincode: "pincode field should not be empty",
      }));
    }
    if (!personal.profession) {
      setErr((prev) => ({
        ...prev,
        profession: "Profession field should not be empty",
      }));
    }

    console.log(personal, img);
  };
  console.log("err", err);
  const handleImg = () => {
    imageRef.current.click();
  };
  const convertImg = (file) => {
    setImg(URL.createObjectURL(file[0]));
  };
  return (
    <>
      <div className="d-flex  p-5 justify-content-between">
        <div>
          <div className="d-flex flex-column mt-4 ">
            <div className="w-100">
              <img
                src={!img ? "./empty-profile-picture.png" : img}
                alt="profile picture"
                height="100px"
                width="130px"
              />
            </div>

            <div>
              <button
                className="mt-3 p-2 rounded-3 photo-margin "
                onClick={handleImg}
              >
                Upload Photo
              </button>
              <input
                type="file"
                ref={imageRef}
                className="mt-3 p-2 rounded-3 photo-margin d-none "
                onChange={(e) => {
                  convertImg(e.target.files);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4  ">
          <div className="row g-4">
            <div className="col-6">
              <div className="">
                <label for="First Name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Eg : John"
                  className="border-1 w-100 input-width"
                  onChange={handleChange}
                  value={personal.firstName}
                />
              </div>
              {err.firstName && (
                <p className="text-danger error-font-size">{err.firstName}</p>
              )}
            </div>
            <div className="col-6">
              <div className="d-flex flex-column ">
                <label for="Last Name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Eg : Doe"
                  className="border-1 "
                  onChange={handleChange}
                  value={personal.lastName}
                />
              </div>
              {err.lastName && (
                <p className="text-danger error-font-size">{err.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <div className="d-flex flex-column mt-4">
              <label for="Profession " className="mt-3">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                placeholder="Eg : Doctor"
                className="border-1"
                onChange={handleChange}
                value={personal.profession}
              />
            </div>
            {err.profession && (
              <p className="text-danger error-font-size">{err.profession}</p>
            )}
          </div>

          <div className=" mt-4 row g-4">
            <div className="col-4">
              <div className="d-flex flex-column ">
                <label for="City">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder=""
                  className="border-1"
                  onChange={handleChange}
                  value={personal.city}
                />
              </div>
              {err.city && (
                <p className="text-danger error-font-size">{err.city}</p>
              )}
            </div>
            <div className="col-4">
              <div className="d-flex flex-column ">
                <label for="Country">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder=""
                  className="border-1"
                  onChange={handleChange}
                  value={personal.country}
                />
              </div>
              {err.country && (
                <p className="text-danger error-font-size">{err.country}</p>
              )}
            </div>
            <div className="col-4">
              <div className="d-flex flex-column ">
                <label for="Pincode">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder=""
                  className="border-1"
                  onChange={handleChange}
                  value={personal.pincode}
                />
              </div>
              {err.pincode && (
                <p className="text-danger error-font-size">{err.pincode}</p>
              )}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 ">
              <div className="d-flex flex-column">
                <label for="Mobile Number">Mobile Number</label>
                <input
                  type="text"
                  name="mob"
                  placeholder=""
                  className="border-1"
                  onChange={handleChange}
                  value={personal.mob}
                />
              </div>
              {err.mob && (
                <p className="text-danger error-font-size">{err.mob}</p>
              )}
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <label for="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Eg : johndoe@gmail.com"
                  className="border-1"
                  onChange={handleChange}
                  value={personal.email}
                />
              </div>
              {err.email && (
                <p className="text-danger error-font-size">{err.email}</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <img src="./sample resume.png" alt="sample resume" height="400px" />
        </div>
      </div>
      <div className="button-margin">
        <button className="border-3 rounded-3  p-2" onClick={handleClick}>
          NEXT:WORK HISTORY
        </button>
      </div>

<GeneratedResume personalDetails={personal} profileImg={img}/>
    
    </>
  );
};

export default PersonalDetails;

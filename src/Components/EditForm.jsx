/* eslint-disable react/prop-types */
import Profile_pic from "../assets/frontend/profile_pic.png";
import upload_area from "../assets/frontend/upload_area.png";
import { BsUpload } from "react-icons/bs";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
import "./Components.css";
export const EditForm = ({ setopenForm }) => {
  const { Registerdata } = useContext(AppContext);

  return (
    <>
      <div className=" EditformContainer">
        <div className=" flex justify-center">
          {Registerdata.profilePicture ? (
            <img
              src={Profile_pic}
              alt=""
              className="w-[150px] h-[150px] rounded-full"
            />
          ) : (
            <>
              <img
                src={upload_area}
                alt=""
                className="w-[150px] h-[150px] rounded-full"
              />
              <span className="w-[150px] h-[150px]   absolute flex justify-center items-center  ">
                <input
                  type="file"
                  name=""
                  id=""
                  className=" opacity-0  z-20 cursor-pointer absolute border border-blue-500 w-[200px] h-[200px] "
                />
                <BsUpload className=" text-[40px]" />
              </span>
            </>
          )}
        </div>
        <div className=" mt-[5vh] p-4">
          <h3 className=" font-semibold text-[20px] sm:text-[25px] uppercase">
            Contact Information
          </h3>
          <div className=" gap-4 sm:flex items-center  ">
            <label htmlFor="Emailid">Email : </label>
            <input
              type="text"
              value={Registerdata.email}
              name="email"
              className=" EditForminput"
            />
          </div>
          <div className=" gap-4 sm:flex items-center  ">
            <label htmlFor="Emailid">Phone : </label>
            <input
              type="text"
              value={Registerdata.Mobilenumner}
              name="Mobilenumner"
              className="EditForminput"
            />
          </div>
          <div className=" gap-4 sm:flex items-center  ">
            <label htmlFor="Emailid">Address : </label>
            <input
              type="text"
              value={Registerdata.Address}
              name="Address"
              className="EditForminput"
            />
          </div>
        </div>
        <div className=" mt-[5vh] p-4">
          <h3 className=" font-semibold text-[20px] sm:text-[25px] uppercase">
            Basic Information
          </h3>
          <div className=" gap-2 sm:flex items-center  ">
            <label htmlFor="Emailid">Gender : </label>

            <select name="Gender" id="">
              <option value="male">male</option>
              <option value="male">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className=" gap-4 sm:flex items-center  ">
            <label htmlFor="Emailid">BirthDay : </label>
            <input
              type="text"
              value={Registerdata.DOB}
              name="DOB"
              className=" EditForminput"
            />
          </div>
        </div>
        <div className=" flex justify-center m-[2vh]">
          <button
            className="  py-2 px-4 rounded-xl bg-blue-500 text-white "
            onClick={() => {
              setopenForm(false);
            }}
          >
            {" "}
            Save information
          </button>
        </div>
      </div>
    </>
  );
};

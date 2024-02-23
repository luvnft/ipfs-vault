import React from "react";
import upload from "../assets/upload.svg";

const UploadView = ({ files, setFiles }) => {
  const handleFileChange = (e) => {
    console.log(files);
    setFiles([...e.target.files]);
  };

  const handleClick = (e) => {
    e.target.blur();
  };

  return (
    <div className="w-full flex justify-center my-5">
      <div className="flex flex-col items-center h-56 p-5">
        <img className="h-28" src={upload} alt="upload" />
        <div className="flex">
          <label className="block">
            <input
              onChange={handleFileChange}
              type="file"
              multiple
              class="block w-full text-sm text-gray-300 cursor-pointer
            my-4 bg-[#121212] p-3 rounded-md
            file:me-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-green-600 file:text-white
            hover:file:bg-green-700
            file:disabled:opacity-50 file:disabled:pointer-events-none
            "
            />
          </label>
          <div className="flex items-center mx-4">
            <button
              onClick={handleClick}
              style={{
                scale: files.length === 0 ? "0" : "1",
                position: files.length === 0 ? "absolute" : "",
              }}
              className="duration-500 text-white bg-green-600 hover:bg-green-700 py-2 px-4 me-4 rounded-lg text-sm font-semibold focus:scale-110"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadView;

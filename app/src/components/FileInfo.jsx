import closeIcon from "../assets/close.svg";
import uploadIcon from "../assets/upload.svg";
import copy from "../assets/copy.svg";
import successIcon from "../assets/success.svg";
import checkIcon from "../assets/check.svg";
import { sizeUtility } from "../io/helper";
import { toast } from "react-hot-toast";

const FileInfo = ({ show, setShow, file, response }) => {
  if (!show) {
    return;
  }

  const closeWindow = (e) => {
    setShow(false);
  };

  const copyCID = (e) => {
    navigator.clipboard.writeText(response.cid);
    toast.success("Copied to clipboard.", {
      position: "bottom-center",
    });
  };
  const copyURL = (e) => {
    navigator.clipboard.writeText(response.fastUrl);
    toast.success("Copied to clipboard.", {
      position: "bottom-center",
    });
  };

  return (
    <div className="absolute rounded-md w-5/6 h-1/2 overflow-y-scroll bg-[#121212] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 scroll-smooth scroll-load">
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-end w-full">
          <img
            onClick={closeWindow}
            className="cursor-pointer"
            src={closeIcon}
            alt="close"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="h-20"
            src={response ? successIcon : uploadIcon}
            alt="info"
          />
          <div className="flex items-center">
            {response ? (
              <>
                <img className="mx-1" src={checkIcon} alt="check" />
                <span className="text-xl text-white font-heading font-semibold mx-1">
                  Success
                </span>
              </>
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  className="mx-1 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="text-xl text-white font-heading font-semibold mx-1">
                  Uploading
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center my-4">
          <span className="text-lg text-green-500 font-heading font-semibold">
            {file.name}
          </span>
          <span className="text-xs text-green-500 font-heading font-semibold">
            {sizeUtility(file.size)}
          </span>
        </div>

        {response && (
          <div className="flex flex-col w-full justify-center my-4">
            <span className="text-lg text-white font-heading font-semibold">
              File Info
            </span>
            <div className="flex text-xs lg:text-sm items-center my-1">
              <span className="font-bold text-white mr-1">CID :</span>
              <span className="font-bold text-green-500 mx-1">
                {response.cid}
              </span>
              <img
                src={copy}
                alt="copy"
                className="mx-1 h-3 w-3 cursor-pointer"
                onClick={copyCID}
              />
            </div>

            <div className="flex text-xs lg:text-sm items-center my-1">
              <span className="font-bold text-white mr-1">URL :</span>
              <span className="font-bold text-green-500 mx-1">
                {response.fastUrl}
              </span>
              <img
                src={copy}
                alt="copy"
                className="mx-1 h-3 w-3 cursor-pointer"
                onClick={copyURL}
              />
            </div>

            <span className="text-lg text-white font-heading font-semibold mt-4">
              Raw Response
            </span>
            <code className="w-full text-xs text-gray-300 bg-[#232323] my-1 p-1">
              {JSON.stringify(response, null, 5)}
            </code>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInfo;

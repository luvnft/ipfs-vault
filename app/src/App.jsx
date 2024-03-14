import { useState } from "react";
import { FileInfo, Footer, UploadView } from "./components";
import { upload } from "./io/io";
import { Toaster } from "react-hot-toast";

function App() {
  const [file, setFile] = useState();
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState(undefined);

  const uploadFile = () => {
    setResponse(undefined);
    upload(file, setResponse);
  };

  return (
    <div className="w-screen h-screen">
      <Toaster />
      <div className="flex flex-col justify-between w-full h-full">
        <div className="absolute inset-0 h-full w-full opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-20"></div>
        <nav className="flex justify-between py-5 mx-4">
          <div className="flex flex-col justify-center w-full">
            <div className="flex items-center">
              <svg
                fill="#22c55e"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17.313 5.998c.242.216.473.445.687.688l-1.165 1.166-.332-.356-.356-.331 1.166-1.167zm-2.653-1.56c.308.107.608.234.897.378l-.643 1.52c-.167-.088-.341-.168-.52-.239l-.373-.14.639-1.519zm-3.146-.438h.973v1.648l-.487-.018-.486.019v-1.649zm-2.125.419l.631 1.524-.416.153c-.165.067-.326.141-.483.22l-.63-1.524c.288-.142.59-.267.898-.373zm.716 6.829l1.045-1.045-1.463-1.466c.652-.464 1.451-.738 2.313-.738 2.21 0 4 1.791 4 4.001 0 2.209-1.79 3.999-4 3.999s-4-1.79-4-3.999c0-.813.242-1.567.658-2.199l1.447 1.447zm-3.418-5.25l1.167 1.166-.357.331-.332.357-1.165-1.166c.214-.243.445-.472.687-.688zm-1.871 2.443l1.52.641c-.087.168-.168.343-.238.52l-.14.376-1.52-.641c.109-.309.235-.608.378-.896zm-.816 3.07h1.649l-.019.485.019.486h-1.649v-.971zm.42 3.094l1.524-.63.153.417.219.48-1.524.632c-.141-.289-.266-.59-.372-.899zm2.13 3.527l-.688-.687 1.303-1.304.332.356.356.331-1.303 1.304zm2.79 1.43c-.308-.108-.608-.234-.897-.379l.643-1.52c.167.088.341.169.52.239l.375.14-.641 1.52zm3.146.438h-.973v-1.649l.486.019.486-.019v1.649zm2.124-.42l-.63-1.525.415-.152c.165-.066.326-.14.483-.22l.63 1.523c-.287.143-.589.268-.898.374zm2.703-1.586l-1.167-1.165.356-.331.332-.356 1.166 1.165c-.214.244-.445.473-.687.687zm1.871-2.441l-1.521-.643c.087-.168.169-.341.239-.518l.14-.378 1.52.642c-.109.307-.235.608-.378.897zm.816-3.071h-1.649l.019-.486-.019-.485h1.649v.971zm-1.944-2.464l-.153-.416-.219-.483 1.524-.629c.141.288.266.59.372.897l-1.524.631zm-6.056-8.018c5.514 0 10 4.486 10 10s-4.486 9.999-10 9.999-10-4.485-10-9.999 4.486-10 10-10zm0-2c-6.632 0-12 5.366-12 12 0 6.631 5.367 11.999 12 11.999 6.632 0 12-5.366 12-11.999 0-6.632-5.367-12-12-12z" />
              </svg>
              <h1 className="text-2xl text-green-500 font-extrabold mx-1">
               🔒 VAULT
              </h1>
            </div>
            <span className="font-semibold text-white">
              Storage made simple.
            </span>
          </div>

          <div className="flex items-center">
            <svg
              onClick={(e) => {
                location.href = "https://github.com/shivam1608/ipfs-vault";
              }}
              className="fill-white h-10 w-10 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        </nav>

        <UploadView
          setFile={setFile}
          file={file}
          setShow={setShow}
          uploadFile={uploadFile}
        />
        <FileInfo
          show={show}
          setShow={setShow}
          response={response}
          file={file}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;

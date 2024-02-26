import { useState } from "react";
import { SecureIcon, UploadFileIcon } from "../../Icons";
import "../../sections/panel.css";
export function CreateQuotation() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [progress, setProgress] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const newfileName =
      selectedFile.name.length > 13
        ? `${selectedFile?.name.substring(12)}...+${
            selectedFile?.name.split(".")[1]
          }`
        : selectedFile.name;
    setFileName(newfileName);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onprogress = (e) => {
      setFile(selectedFile);
      const percentLoaded = Number.parseInt((e.loaded * 100) / e.total);
      document.documentElement.style.setProperty(
        "--bar-width",
        `${percentLoaded}%`
      );
      console.log(e);
    };
    reader.onload = (e) => {
      document.documentElement.style.setProperty("--bar-width", "100%");
      console.log(e);
    };
  };
  const handleDelete = () => {
    setFile(false);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    // Aquí puedes realizar las operaciones necesarias con el archivo arrastrado
    setFile(file);
    console.log(file);
  };

  return (
    <main className="main-body w-full pt-20 flex flex-col  ">
      <section className="w-full max-w-[1310px] mx-auto p-4 flex flex-col justify-center items-center">
        <article className="w-full max-w-3xl">
          <h1 className="p-2 font-bold text-3xl sm:mb-4">
            Create a New Quotation
          </h1>
          <form className="bg-white h-[400px] rounded-lg shadow-sm">
            {!file ? (
              <label
                className="border-2 hover:bg-slate-200 transition-all duration-150 ease-in border-dashed bg-slate-100 border-blue-800 cursor-pointer h-[400px] flex flex-col gap-4 justify-center items-center rounded-md"
                draggable
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  className=""
                  multiple
                  onChange={handleChange}
                />
                <div className="text-center flex flex-col items-center gap-2 p-4">
                  <p>Drag & Drop Your Dessigns Or Browse</p>
                  <p>You can upload multiple files at once</p>
                  <UploadFileIcon />
                </div>
                <p className="max-w-[55ch] text-center">
                  Manual quote: STEP, STP, SLDPRT, STL, SAT, 3DXML, 3MF, PRT,
                  IPT, CATPART, X_T, PTC, X_B, DXF DWS, DWF, DWG, PDF All
                </p>
                <p className="text-gray-500 flex gap-2 items-center">
                  <SecureIcon /> uploads are secure and confidential
                </p>
              </label>
            ) : (
              <section className="flex  flex-col justify-center items-center w-full h-full gap-4">
                <div className="w-32 h-32 bg-red-600"></div>
                <p>{file ? fileName : ""}</p>
                <div id="load-bar" className="load-bar">
                  <span id="progress" className="progress"></span>
                </div>
                <div className="flex gap-6 capitalize">
                  <button
                    className="  hover:scale-110 transition-all duration-150 ease py-1 capitalize text-white bg-blue-700 font-bold px-4 rounded-sm"
                    onClick={handleDelete}
                  >
                    delete
                  </button>
                  <button className="  hover:scale-110 transition-all duration-150 ease py-1 capitalize text-white bg-blue-700 font-bold px-4 rounded-sm">
                    Next
                  </button>
                </div>
              </section>
            )}
          </form>
        </article>
      </section>
    </main>
  );
}

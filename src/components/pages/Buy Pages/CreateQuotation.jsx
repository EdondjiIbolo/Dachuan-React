import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PdfFileIcon, SecureIcon, UploadFileIcon } from "../../Icons";
import sendFileService from "../../../Hooks/login";
import "../../sections/panel.css";
export function CreateQuotation() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState(null);
  const [dragging, setDragging] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFileData(selectedFile);
    const newfileName =
      selectedFile.name.length > 10
        ? `${selectedFile?.name.slice(0, 5)}.${
            selectedFile?.name.split(".")[1]
          }`
        : selectedFile.name;
    setFileName(newfileName);
    console.log(newfileName);
    const imageURL = URL.createObjectURL(selectedFile);
    setFile(imageURL);
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onprogress = (e) => {
      const percentLoaded = Number.parseInt((e.loaded * 100) / e.total);
      document.documentElement.style.setProperty(
        "--bar-width",
        `${percentLoaded}%`
      );
      console.log(fileName);
    };
    reader.onload = () => {
      document.documentElement.style.setProperty("--bar-width", "100%");
    };
  };
  const handleDelete = () => {
    setFile(false);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
    console.log("entro");
    // console.log(dragging);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    // Aquí puedes realizar las operaciones necesarias con el archivo arrastrado

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFile(imageURL);
      console.log(file);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onprogress = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      file: fileData,
      name: fileName,
    };

    console.log(credentials);
    try {
      setLoading(true);
      const sendMachine = await sendFileService.sendFile();
      const response = await sendMachine;
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
        navigate("settings");
      }, 3500);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-body w-full pt-20 flex flex-col  ">
      <section className="w-full max-w-[1310px] mx-auto p-4 flex flex-col justify-center items-center">
        <article className="w-full max-w-3xl">
          <h1 className="p-2 font-bold text-3xl sm:mb-4">
            Create a New Quotation
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white h-[400px] rounded-lg shadow-sm"
            encType="multipart/form-data"
          >
            {!file ? (
              <label
                className={`border-2 hover:bg-slate-200 transition-all duration-150 ease-in border-dashed bg-slate-100  border-blue-800 cursor-pointer h-[400px] flex flex-col gap-4 justify-center items-center rounded-md ${
                  dragging ? "hover:bg-slate-200 cursor-move" : ""
                }`}
                draggable
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  name="machine"
                  className="hidden"
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
              <section
                className={`flex border-2 rounded-md border-dashed  border-blue-800  flex-col justify-center items-center w-full h-full gap-4 ${
                  error ? "border-red-600 border-4 animate-pulse" : ""
                }`}
              >
                {error && (
                  <p className="pt-3 font-semibold text-red-600 animate-pulse m-0">
                    Error Uploading the file , file must be valid
                  </p>
                )}
                <picture className="w-32 h-32 rounded-sm border-gray-300 flex justify-center items-center overflow-hidden border-2 shadow-sm">
                  {fileName.split(".")[1].toLowerCase() !== "pdf" ? (
                    <img
                      src={file}
                      alt={fileName}
                      className="w-32 h-32  object-cover"
                    />
                  ) : (
                    <PdfFileIcon />
                  )}
                </picture>
                <p>{file ? fileName : ""}</p>
                <div id="load-bar" className="load-bar rounded-lg">
                  <span id="progress" className="progress "></span>
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
      {loading && (
        <section className="absolute w-screen h-screen inset-0 z-40 flex justify-center items-center ">
          <div className="absolute w-screen h-screen inset-0 bg-black opacity-85 "></div>

          <span className="loader-setting"></span>
        </section>
      )}
    </main>
  );
}

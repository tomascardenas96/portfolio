import "../style/DownloadBtn.css";
import {GoDownload} from "react-icons/go";

function DownloadBtn() {
  return (
    <>
      <button><GoDownload className="home-page__download-icon"/> <p>Download!</p></button>
    </>
  );
}

export default DownloadBtn;

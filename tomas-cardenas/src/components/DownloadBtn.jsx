import "../style/DownloadBtn.css";
import { GoDownload } from "react-icons/go";
import cvTomas from "../assets/CV-Tomas-Cardenas.pdf";

function DownloadBtn() {
  return (
    <>
        <a
          href={cvTomas}
          download="cv-Tomas-Cardenas"
          target="_blank"
          rel="noopener noreferrer"
        >
      <button>
          <GoDownload className="home-page__download-icon" /> <p>Download!</p>
      </button>
        </a>
    </>
  );
}

export default DownloadBtn;

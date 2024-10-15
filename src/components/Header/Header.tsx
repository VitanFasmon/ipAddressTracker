import { useState } from "react";
import backgroundDesktop from "../../assets/images/pattern-bg-desktop.png";
import backgroundMobile from "../../assets/images/pattern-bg-mobile.png";
import arrowRight from "../../assets/icons/icon-arrow.svg";
import useIsMobile from "../../hooks/useIsMobile";
import InfoBar from "../InfoBar/InfoBar";
import IpValidationService from "../../services/IpValidationService";
import useIpAddress from "../../hooks/useIpAddress";

const Header = () => {
  const isMobile = useIsMobile();
  const [notValidatedIpAddress, setNotValidatedIpAddress] =
    useState<string>("");
  const { ipAddress, updateIpAddress } = useIpAddress();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (IpValidationService.validateIpAddress(notValidatedIpAddress)) {
      setError(null);
      updateIpAddress(notValidatedIpAddress);
    } else {
      setError("Please enter a valid IP address or domain.");
    }
  };

  return (
    <section
      style={{
        backgroundImage: isMobile
          ? `url(${backgroundMobile})`
          : `url(${backgroundDesktop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[250px] flex flex-col justify-start items-center gap-6"
    >
      <h1 className="text-3xl text-white font-bold  mt-6">
        IP Address Tracker
      </h1>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={notValidatedIpAddress}
          onChange={(e) => setNotValidatedIpAddress(e.currentTarget.value)}
          className={`w-[500px] rounded-l-lg p-4 ${
            error ? "border-red-500" : ""
          }`}
        />
        <button className="rounded-r-lg bg-black p-5">
          <img src={arrowRight} alt="search" className="" />
        </button>
      </form>
      {error && <p className="text-red-500 mt-2 text-xl font-bold">{error}</p>}
      <InfoBar ipAddress={ipAddress} />
    </section>
  );
};

export default Header;

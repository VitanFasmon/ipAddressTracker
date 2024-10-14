import backgroundDesktop from "../../assets/images/pattern-bg-desktop.png";
import backgroundMobile from "../../assets/images/pattern-bg-mobile.png";
import arrowRight from "../../assets/icons/icon-arrow.svg";
import useIsMobile from "../../hooks/useIsMobile";
import InfoBar from "../InfoBar/InfoBar";

const Header = () => {
  const isMobile = useIsMobile();
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
      <form className="flex">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="w-[500px] rounded-l-lg p-4"
        />
        <button type="submit" className="rounded-r-lg bg-black p-5">
          <img src={arrowRight} alt="search" className="" />
        </button>
      </form>
      <InfoBar />
    </section>
  );
};

export default Header;

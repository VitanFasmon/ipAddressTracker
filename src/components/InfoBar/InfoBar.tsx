const InfoBar = () => {
  const ipAddress = "192.212.172.101";
  const location = "Brooklyn, NY 10001";
  const timezone = "UTC-05:00";
  const isp = "SpaceX Starlink";
  return (
    <section className="relative">
      <div className="bg-white text-black p-10 rounded-xl flex gap-10 border md:flex-row flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1">
        <div className="md:border-r-2 md:pr-10">
          <p className="text-gray-400 font-bold">IP ADDRESS</p>
          <h2 className="text-2xl font-bold">{ipAddress}</h2>
        </div>
        <div className="md:border-r-2 md:pr-10">
          <p className="text-gray-400 font-bold">LOCATION</p>
          <h2 className="text-2xl font-bold">{location}</h2>
        </div>
        <div className="md:border-r-2 md:pr-10">
          <p className="text-gray-400 font-bold">TIMEZONE</p>
          <h2 className="text-2xl font-bold">{timezone}</h2>
        </div>
        <div>
          <p className="text-gray-400 font-bold">ISP</p>
          <h2 className="text-2xl font-bold">{isp}</h2>
        </div>
      </div>
    </section>
  );
};
export default InfoBar;

import { useEffect, useState } from "react";
import IpGeolocationService from "../../services/IpGeolocationService";
import { IpApiResponse } from "../../types/IpApiResponse";
import { usePositionStore } from "../../hooks/usePositionStore";

interface InfoBarProps {
  ipAddress: string | null;
}
const InfoBar = ({ ipAddress }: InfoBarProps) => {
  const [ipData, setIpData] = useState<IpApiResponse | null>(null);
  const { updatePosition } = usePositionStore();
  useEffect(() => {
    const fetchIpData = async () => {
      const ipService = new IpGeolocationService();
      const data = await ipService.getIpData(ipAddress);
      setIpData(data);
      data
        ? updatePosition([data.location.lat, data.location.lng])
        : updatePosition(null);
    };
    fetchIpData();
  }, [ipAddress]);

  return (
    <section className="relative z-10">
      {ipData && (
        <div className="bg-white text-black p-10 rounded-xl flex gap-10  md:flex-row flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1">
          <div className="md:border-r-2 md:pr-10">
            <p className="text-gray-400 font-bold">IP ADDRESS</p>
            <h2 className="text-2xl font-bold">{ipData && ipData.ip}</h2>
          </div>
          <div className="md:border-r-2 md:pr-10">
            <p className="text-gray-400 font-bold">LOCATION</p>
            <h2 className="text-2xl font-bold">
              {ipData && ipData.location.country},{" "}
              {ipData && ipData.location.region}
            </h2>
          </div>
          <div className="md:border-r-2 md:pr-10">
            <p className="text-gray-400 font-bold">TIMEZONE</p>
            <h2 className="text-2xl font-bold">
              {ipData && ipData.location.timezone}
            </h2>
          </div>
          <div>
            <p className="text-gray-400 font-bold">ISP</p>
            <h2 className="text-2xl font-bold">{ipData && ipData.isp}</h2>
          </div>
        </div>
      )}
    </section>
  );
};
export default InfoBar;

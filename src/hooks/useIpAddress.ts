import { useState } from "react";
const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState<string>("192.162.172.102");

  const updateIpAddress = (newIpAddress: string) => {
    setIpAddress(newIpAddress);
  };

  return { ipAddress, updateIpAddress };
};

export default useIpAddress;

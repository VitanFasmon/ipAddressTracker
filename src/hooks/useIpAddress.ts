import { useState } from "react";

const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);

  const updateIpAddress = (newIpAddress: string | null) => {
    setIpAddress(newIpAddress);
  };

  return { ipAddress, updateIpAddress };
};

export default useIpAddress;

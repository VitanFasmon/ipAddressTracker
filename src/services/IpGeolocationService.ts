import { IpApiResponse } from "../types/IpApiResponse";

class IpGeolocationService {
  private API_KEY: string;
  private BASE_URL: string;

  constructor() {
    this.API_KEY = "at_ibQX3FGbl4Hzakdb2R5rVRYMqPOat";
    this.BASE_URL = "https://geo.ipify.org/api/v2/country,city";
  }
  async getIpData(ipAddress: string | null): Promise<IpApiResponse | null> {
    const url = `${this.BASE_URL}?apiKey=${this.API_KEY}&ipAddress=${ipAddress}`;
    if (!ipAddress) {
      return null;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch IP data:", error);
      return null;
    }
  }
}

export default IpGeolocationService;

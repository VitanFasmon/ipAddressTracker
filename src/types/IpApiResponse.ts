export interface IpApiResponse {
  ip: string; // IP Address
  location: {
    country: string; // Country code (e.g., "US")
    region: string; // Region or state (e.g., "California")
    city: string;
    lat: number;
    lng: number;
    postalCode: number;
    timezone: string;
    geonameId: number;
  };
  domains: string[]; // Array of domains associated with the IP address
  as: {
    asn: number; // Autonomous System Number (ASN)
    name: string; // Name of the organization or entity (e.g., "Google LLC")
    route: string; // IP route (e.g., "8.8.8.0/24")
    domain: string; // Domain URL (e.g., "https://about.google/intl/en/")
    type: string; // Type of the AS (e.g., "Content")
  };
  isp: string; // Internet Service Provider (e.g., "Google LLC")
}

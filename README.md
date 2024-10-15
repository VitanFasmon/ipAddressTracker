# IP Address Tracker

## Description
The **IP Address Tracker** is a web application that allows users to input an IP address or domain name to get detailed information about its geographical location, including country, region, timezone, and ISP. The application utilizes geolocation services to fetch and display the data on an interactive map, providing a visual representation of the location associated with the IP address.

## Features
- Input validation for IP addresses and domain names.
- Geolocation data fetching using a third-party API.
- Interactive map displaying the location of the IP address.
- Responsive design for both desktop and mobile devices.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- TypeScript: A strict syntactical superset of JavaScript that adds static typing.
- Zustand: A small, fast, and scalable state management solution.
- React Leaflet: A library for rendering maps in React applications.
- CSS: For styling the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ip-address-tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ip-address-tracker
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Usage
- Enter an IP address name in the input field and click the search button.
- The application will validate the input and fetch the corresponding geolocation data.
- The map will update to show the location of the IP address.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [React](https://reactjs.org/) for the UI framework.
- [Leaflet](https://leafletjs.com/) for the interactive mapping library.
- [IP Geolocation API](https://ipgeolocation.io/) for providing geolocation data.

## Author
Vitan Fasmon

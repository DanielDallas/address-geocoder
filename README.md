# Address Geocoder Application

The Address Geocoder Application is a single-page application built using Next.js, TypeScript, and Tailwind CSS. It allows users to enter an address and retrieve its geolocation information, including latitude and longitude coordinates. The application uses a free forward geocoding API to provide accurate results.

## Setup - To run the application locally, follow these steps

1. Clone the repository: `git clone https://github.com/DanielDallas/address-geocoder.git`
2. Navigate to the project directory: `cd address-geocoder`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and access: `http://localhost:3000`

## Features

- **Address Input:** Users can enter an address in the UI's input field to search for its geolocation information.

- **URL Parameter:** Users can also provide an address as a URL parameter, which will be used for searching.

- **Geocoding API:** The application uses the OpenStreetMap Nominatim API for geocoding. It provides accurate location information based on the entered address.

- **Geolocation Display:** The application displays the retrieved geolocation information, including latitude and longitude coordinates.

## Future Improvements and Enhancements

While the Address Geocoder Application already provides core functionality, there are several potential improvements and enhancements that can be considered:

- **Autocomplete:** Implement address autocomplete functionality to assist users in entering accurate addresses.

- **Error Handling:** Enhance error handling to display appropriate messages when API requests fail or no results are found.

- **Map Integration:** Integrate a map library (such as Leaflet or Google Maps) to visually display the geolocation on a map.

- **User Feedback:** Provide user feedback during API requests, such as loading indicators or success/error messages.

- **Unit Testing:** Expand test coverage by writing unit tests for components, API calls, and user interactions.

- **Responsive Design:** Ensure the application is more responsive and well-designed across various screen sizes and devices using Tailwind CSS.

- **Deploy to Production [This I have done already]:** Deploy the application to a hosting platform (e.g., Vercel, Netlify) for public access.

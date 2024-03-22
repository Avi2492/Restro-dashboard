import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/auth/Auth0ProviderWithNavigate.jsx";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0ProviderWithNavigate>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Auth0ProviderWithNavigate>
    </React.StrictMode>
  </BrowserRouter>
);

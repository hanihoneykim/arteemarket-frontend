import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import router from './router';
import theme from './theme';
import '@fontsource/roboto';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <QueryClientProvider client={client}>
    <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
  </QueryClientProvider>
)



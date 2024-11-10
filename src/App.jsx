import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdvancedFilters from "./Home/advanced/page";
import Details from "./Home/details/page";
import Filters from "./Home/filters/page";
import Home from "./Home/page";
import NotfoundPage from "./Notfound";
import Structure from "./Structures/page";
import { theme } from "./theme";

export const MAIN_URL = "https://themealdb.com/api/json/v1/1/";

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Structure>
          <Routes>
            <Route path="*" element={<NotfoundPage />} />
            <Route path="/" element={<Home />}>
              <Route index element={<Filters />} />
              <Route path="/advanced-filters" element={<AdvancedFilters />} />
              <Route path="/view-details/:id" element={<Details />} />
            </Route>
          </Routes>
        </Structure>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

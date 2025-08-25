import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "@/pages/home";
import CoreLayout from "./components/ui/CoreLayout";
import About from "@/pages/about";
import Sermons from "@/pages/sermons";
import Events from "@/pages/events";
import Ministries from "@/pages/ministries";
import Give from "@/pages/give";
import Contact from "@/pages/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* main pages */}
        <Route path="/" element={<CoreLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

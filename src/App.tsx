import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Send } from "./Send";

// Create a Home component
const Home = () => {
  return <div>Home Page</div>;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/send/:address/:number" element={<Send />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

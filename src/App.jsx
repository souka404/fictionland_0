import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovelList from "./components/NovelList";
import Addnovel from "./components/pages/formAddNovel/FormAddNovel";
import Updatenovel from "./components/UpdateNovel";
import CoverNovel from "./components/CoverNovel";
import NavBar from "components/layouts/navbar/NavBar";
import Home from "components/pages/home/Home"
import NotFound from "components/pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novels" element={<NovelList />} />
          <Route path="/novels/:novelId" element={<CoverNovel />} />
          <Route path="/add-novel" element={<Addnovel />} />
          <Route path="/update-novel/:id" element={<Updatenovel />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

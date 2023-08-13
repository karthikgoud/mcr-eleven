import { Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import FilterBar from "./components/FilterBar/FilterBar";
import MainList from "./components/MainList/MainList";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import StarredPage from "./pages/StarredPage/StarredPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <FilterBar />
              <MainList />
            </Wrapper>
          }
        />

        <Route
          path="/movie/:Id"
          element={
            <Wrapper>
              <MovieDetailPage />
            </Wrapper>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Wrapper>
              <WatchListPage />
            </Wrapper>
          }
        />
        <Route
          path="/starred"
          element={
            <Wrapper>
              <StarredPage />
            </Wrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

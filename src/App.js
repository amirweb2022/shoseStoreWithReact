import LikeProvider from "./context/Provider/ProductLikeProvider";
import Layout from "./Layout/Layout";

function App() {
  return (
    <LikeProvider>
      <Layout />
    </LikeProvider>
  );
}

export default App;
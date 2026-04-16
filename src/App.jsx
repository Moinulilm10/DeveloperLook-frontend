import { useEffect, useState } from "react";
import "./App.css";
import PageSkeleton from "./components/Skeletons/PageSkeleton";
import Layout from "./layouts/Layout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading to ensure skeletons are seen and heavy assets ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Layout>
        <PageSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>hello world</h1>
    </Layout>
  );
}

export default App;

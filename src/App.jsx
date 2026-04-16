import { useEffect, useState } from "react";
import "./App.css";
import PageSkeleton from "./components/Skeletons/PageSkeleton";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";

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
       <Hero />
    </Layout>
  );
}

export default App;

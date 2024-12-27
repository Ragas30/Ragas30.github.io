import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  const fetchVisitorCount = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/visitor-count");
      const data = await response.json('message: "Visitor count fetched successfully"');
      setCount(data.count);
    } catch (error) {
      console.error("Error fetching visitor count:", error);
    }
  };

  const incrementVisitorCount = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/visitor-count", {
        method: "POST",
      });
      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
    }
  };

  useEffect(() => {
    incrementVisitorCount();
    fetchVisitorCount();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Visitor Counter</h1>
        <p className="text-lg text-center mb-6">
          Jumlah Pengunjung: <span className="font-bold text-blue-500">{count}</span>
        </p>
      </div>
    </div>
  );
};

export default VisitorCounter;

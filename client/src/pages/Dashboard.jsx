import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-6">
        Welcome 🎉
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;
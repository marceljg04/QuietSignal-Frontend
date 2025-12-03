import { Link } from "react-router-dom";
import Register from "../components/Auth/Register";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      <Register />

      <div className="flex flex-col justify-center ml-6">
        <Link
          to="/"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 text-center"
        >
          Return to login
        </Link>
      </div>
    </div>
  );
}

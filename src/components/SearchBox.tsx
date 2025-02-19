
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Search } from "lucide-react";

const SearchBox = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate(`/results?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg animate-fadeIn">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center px-4 py-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 bg-transparent outline-none"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              <Search className="w-4 h-4" />
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;

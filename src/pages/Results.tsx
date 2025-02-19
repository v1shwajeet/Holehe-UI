
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AccountList from "../components/AccountList";
import { Status } from "../types";

interface Account {
  domain: string;
  status: Status;
}

const Results = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    if (!email) {
      navigate("/");
      return;
    }

    // Simulated data - in a real app, this would be fetched from an API
    const mockData: Account[] = [
      { domain: "facebook.com", status: "ratelimit" },
      { domain: "adobe.com", status: "used" },
      { domain: "amazon.com", status: "used" },
      { domain: "github.com", status: "error" },
      { domain: "twitter.com", status: "unused" },
      // Add more accounts as needed
    ];

    setAccounts(mockData);
  }, [email, navigate]);

  const categorizedAccounts = {
    used: accounts.filter((a) => a.status === "used"),
    unused: accounts.filter((a) => a.status === "unused"),
    ratelimit: accounts.filter((a) => a.status === "ratelimit"),
    error: accounts.filter((a) => a.status === "error"),
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 group transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Search
        </button>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-8 animate-fadeIn">
          <h1 className="text-2xl font-bold mb-2">Results for</h1>
          <p className="text-lg text-gray-600">{email}</p>
        </div>

        <AccountList accounts={categorizedAccounts.used} title="Email Used" type="used" />
        <AccountList accounts={categorizedAccounts.unused} title="Email Not Used" type="unused" />
        <AccountList accounts={categorizedAccounts.ratelimit} title="Rate Limited" type="ratelimit" />
        <AccountList accounts={categorizedAccounts.error} title="Errors" type="error" />
      </div>
    </div>
  );
};

export default Results;

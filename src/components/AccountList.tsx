
import { Status } from "../types";

interface Account {
  domain: string;
  status: Status;
}

interface AccountListProps {
  accounts: Account[];
  title: string;
  type: Status;
}

const StatusIndicator = ({ type }: { type: Status }) => {
  const colors = {
    "used": "bg-status-success",
    "unused": "bg-status-unused",
    "ratelimit": "bg-status-ratelimit",
    "error": "bg-status-error",
  };

  return (
    <span className={`inline-block w-2 h-2 rounded-full ${colors[type]} mr-2`} />
  );
};

const AccountList = ({ accounts, title, type }: AccountListProps) => {
  if (accounts.length === 0) return null;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6 animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <StatusIndicator type={type} />
        {title}
        <span className="text-sm text-gray-500 ml-2">({accounts.length})</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((account) => (
          <div
            key={account.domain}
            className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            <StatusIndicator type={account.status} />
            <span className="text-gray-700">{account.domain}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountList;

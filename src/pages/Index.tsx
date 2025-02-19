
import SearchBox from "../components/SearchBox";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-8 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Email Account Finder</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Discover which platforms are associated with your email address
        </p>
      </div>
      <SearchBox />
    </div>
  );
};

export default Index;

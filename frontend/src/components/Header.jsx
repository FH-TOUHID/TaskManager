import { Check } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-white mb-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <Check 
              size={30}
              strokeWidth={3}
              className="text-white"
            />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Task<span className="text-blue-600">Manager</span>
          </h1>
        </div>


        {/* Navigation */}
        <nav className="flex gap-8 text-gray-600">
          <button className="text-blue-600 font-medium">
            All Tasks
          </button>

          <button>
            Pending
          </button>

          <button>
            Completed
          </button>
        </nav>


        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          A
        </div>

      </div>
    </header>
  );
};

export default Header;
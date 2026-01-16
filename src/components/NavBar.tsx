"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {

  const router = useRouter();

  const handleLogout = async () => {

    await fetch('api/auth/logout', {
      method: "POST"
    });

    router.push("/login")
  }

  return (
    <nav className="border-b bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-14 px-4">
        
        {/* Left: App Name */}
        <Link href="/" className="text-lg font-semibold">
          Track
        </Link>
        

        {/* Right: Actions */}
        <div className="flex items-center gap-4">

          <Link 
            href="/expenses"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Expenses
          </Link>
          
          {/* Logout button placeholder */}
          <button
  onClick={handleLogout}
  className="px-3 py-1.5 text-sm rounded-md border border-red-300 text-red-600 
             hover:bg-red-50 hover:text-red-700 transition-all"
>
  Logout
</button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

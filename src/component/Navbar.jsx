"use client";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

function Navbar() {
  const { user, setUser, logOut } = useContext(AuthContext);
  const pathname = usePathname();
  const handleLogOut = () => {
    logOut().then(() => alert("Log Out successful"));
    setUser(null);
  };

  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={pathname === "/" ? "text-red-500 underline" : "text-white"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/explore"}
          className={
            pathname === "/explore" ? "text-red-500 underline" : "text-white"
          }
        >
          Explore
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link
              href={"/dashboard"}
              className={
                pathname === "/dashboard"
                  ? "text-red-500 underline"
                  : "text-white"
              }
            >
              My Products
            </Link>
          </li>
          <li>
            <Link
              href={"/add-products"}
              className={
                pathname === "/add-products"
                  ? "text-red-500 underline"
                  : "text-white"
              }
            >
              Add Products
            </Link>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <Link
          href={"/about-us"}
          className={
            pathname === "/about-us" ? "text-red-500 underline" : "text-white"
          }
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href={"/contact-us"}
          className={
            pathname === "/contact-us" ? "text-red-500 underline" : "text-white"
          }
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar  backdrop-blur-md z-1000 shadow-sm sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-2xl text-red-600">
          F<span className="text-white">OO</span>DY
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                    height={40}
                    width={40}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-outline border-red-600 text-red-600"
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="btn btn-outline border-red-600 text-red-600"
          >
            Sign
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

"use client";

import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { signIn } from "@/features/auth/api/signIn";
import { signUp } from "@/features/auth/api/signUp";

interface LoginCardProps {
  onClose: () => void;
}

export default function LoginCard({ onClose }: LoginCardProps) {
  // --- LOGIN FORM STATE ---
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // --- REGISTER FORM STATE ---
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // --- LOGIN HANDLER ---
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signIn(loginEmail, loginPassword);
      onClose();
      window.location.reload(); // recargar navbar, etc.
    } catch (err: any) {
      alert(err.message);
    }
  }

  // --- REGISTER HANDLER ---
  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      await signUp(registerEmail, registerPassword);
      alert("Cuenta creada. Revisa tu correo para confirmar.");
      onClose();
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-[60%] space-y-4 px-8 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer hover:scale-105"
          >
            <XCircle />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-4">
          {/* -------------------------------- LOGIN -------------------------------- */}
          <div className="flex flex-col bg-blue-50 p-5 space-y-4">
            <h1 className="font-semibold text-xl">Registered Customers</h1>
            <p className="text-sm font-light">
              If you have an account, sign in with your email address.
            </p>

            <form
              className="w-full h-full flex flex-col gap-y-4"
              onSubmit={handleLogin}
            >
              <p className="text-sm font-semibold">
                Email <span className="text-red-600">*</span>
              </p>
              <input
                placeholder="Your email"
                className="bg-white border border-gray-400 rounded-md py-2 px-3"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />

              <p className="text-sm font-semibold">
                Password <span className="text-red-600">*</span>
              </p>
              <input
                placeholder="Your password"
                className="bg-white border border-gray-400 rounded-md py-2 px-3"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />

              <div className="flex gap-x-4">
                <button className="bluebtn">Sign in</button>
                <button type="button" className="text-blue-600 cursor-pointer text-sm">
                  Forgot Your Password?
                </button>
              </div>
            </form>
          </div>

          {/* -------------------------------- REGISTER -------------------------------- */}
          <div className="flex flex-col bg-blue-50 p-5 space-y-4">
            <h1 className="font-semibold text-xl">New Customer?</h1>
            <p className="text-sm font-light">
              Creating an account has many benefits:
            </p>

            <form
              className="w-full h-full flex flex-col gap-y-4"
              onSubmit={handleRegister}
            >
              <p className="text-sm font-semibold">
                Email <span className="text-red-600">*</span>
              </p>
              <input
                placeholder="Your email"
                className="bg-white border border-gray-400 rounded-md py-2 px-3"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />

              <p className="text-sm font-semibold">
                Password <span className="text-red-600">*</span>
              </p>
              <input
                placeholder="Your password"
                className="bg-white border border-gray-400 rounded-md py-2 px-3"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />

              <div className="flex gap-x-4">
                <button className="bluebtn">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import SigninForm from "@/components/forms/SigninForm";
import { Sparkles } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 opacity-30 filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-500 opacity-30 filter blur-[100px] animate-pulse delay-700" />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 ring-1 ring-white/20">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Welcome Back
            </h2>
            <p className="mt-3 text-gray-400 text-sm">
              Sign in to continue your journey
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/20">
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  );
}
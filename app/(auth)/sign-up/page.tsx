 import SignupForm from "@/components/forms/SignUpForm";
// import { Sparkles } from "lucide-react";

// export default function SignUpPage() {
//   return (
//     <div className="min-h-screen relative bg-black overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
//       {/* Gradient orbs */}
//       <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 opacity-30 filter blur-[100px] animate-pulse" />
//       <div className="absolute bottom-0 -right-4 w-96 h-96 bg-blue-500 opacity-30 filter blur-[100px] animate-pulse delay-700" />

//       <div className="relative min-h-screen flex items-center justify-center p-4">
//         <div className="w-full max-w-md">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-6">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 ring-1 ring-white/20">
//                 <Sparkles className="h-8 w-8 text-purple-400" />
//               </div>
//             </div>
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
//               Join the Future
//             </h2>
//             <p className="mt-3 text-gray-400 text-sm">
//               Create your account and start your journey
//             </p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/20">
//             <SignupForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Sparkles } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          backgroundPosition: "center",
          animation: "backgroundMove 20s linear infinite",
        }}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse delay-500" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6 scale-100 hover:scale-110 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 ring-1 ring-white/20 shadow-lg">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient-x pb-1">
              Join the Future
            </h1>
            <p className="mt-3 text-gray-400 text-sm max-w-sm mx-auto">
              Create your account and unlock a world of possibilities
            </p>
          </div>

          {/* Form Container */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Form */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-white/20 shadow-2xl">
              <SignupForm />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By signing up, you agree to our{" "}
              <a href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
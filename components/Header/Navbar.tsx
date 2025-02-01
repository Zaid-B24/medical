// "use client";

// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useMemo } from 'react';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.5,
//           ease: [0.43, 0.13, 0.23, 0.96],
//         },
//       }),
//     }),
//     []
//   );

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full border-b",
//         "bg-background/80 backdrop-blur-md",
//         "border-border/40 shadow-sm"
//       )}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             {session?.user && pathname !== '/home' && (
//               <Button
//                 onClick={() => router.back()}
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10"
//               >
//                 <ArrowLeft className="size-5" />
//               </Button>
//             )}
//             <Link href={'/'} className="flex items-center gap-3">
//             <div className="flex items-center space-x-2">
//             <FileText className="h-6 w-6 text-blue-600" />
//             <span className="font-bold text-xl text-gray-900">MediTrack Pro</span>
//           </div>
//             </Link>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
//                     {session?.user?.image && (
//                       <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
//                     )}
//                     <AvatarFallback className="bg-primary/5 text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/profile"))}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/settings"))}>
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
//                   Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// "use client"

// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';
// import { SidebarTrigger } from '../ui/sidebar';
// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText } from 'lucide-react';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.5,
//           ease: [0.43, 0.13, 0.23, 0.96],
//         },
//       }),
//     }),
//     []
//   );

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full border-b",
//         "bg-background/80 backdrop-blur-md",
//         "border-border/40 shadow-sm"
//       )}
//     >
//       <div className="mx-auto w-full px-4">
//         <div className="flex h-16 items-center justify-between">
//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             <SidebarTrigger />
//             {session?.user && pathname !== '/home' && (
//               <Button
//                 onClick={() => router.back()}
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10"
//               >
//                 <ArrowLeft className="size-5" />
//               </Button>
//             )}
//             <Link href={'/dashboard'} className="flex items-center gap-3">
//               <div className="flex items-center space-x-2">
//                 <FileText className="h-6 w-6 text-blue-600" />
//                 <span className="font-bold text-xl text-gray-900 dark:text-gray-100">MediTrack Pro</span>
//               </div>
//             </Link>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
//                     {session?.user?.image && (
//                       <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
//                     )}
//                     <AvatarFallback className="bg-primary/5 text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/profile"))}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/settings"))}>
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
//                   Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// "use client";

// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useMemo } from 'react';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.5,
//           ease: [0.43, 0.13, 0.23, 0.96],
//         },
//       }),
//     }),
//     []
//   );

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full border-b",
//         "bg-background/80 backdrop-blur-md",
//         "border-border/40 shadow-sm"
//       )}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             {session?.user && pathname !== '/home' && (
//               <Button
//                 onClick={() => router.back()}
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10"
//               >
//                 <ArrowLeft className="size-5" />
//               </Button>
//             )}
//             <Link href={'/'} className="flex items-center gap-3">
//             <div className="flex items-center space-x-2">
//             <FileText className="h-6 w-6 text-blue-600" />
//             <span className="font-bold text-xl text-gray-900">MediTrack Pro</span>
//           </div>
//             </Link>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
//                     {session?.user?.image && (
//                       <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
//                     )}
//                     <AvatarFallback className="bg-primary/5 text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/profile"))}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/settings"))}>
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
//                   Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// "use client"

// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';
// import { SidebarTrigger } from '../ui/sidebar';
// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText } from 'lucide-react';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.5,
//           ease: [0.43, 0.13, 0.23, 0.96],
//         },
//       }),
//     }),
//     []
//   );

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full border-b",
//         "bg-background/80 backdrop-blur-md",
//         "border-border/40 shadow-sm"
//       )}
//     >
//       <div className="mx-auto w-full px-4">
//         <div className="flex h-16 items-center justify-between">
//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             <SidebarTrigger />
//             {session?.user && pathname !== '/home' && (
//               <Button
//                 onClick={() => router.back()}
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10"
//               >
//                 <ArrowLeft className="size-5" />
//               </Button>
//             )}
//             <Link href={'/dashboard'} className="flex items-center gap-3">
//               <div className="flex items-center space-x-2">
//                 <FileText className="h-6 w-6 text-blue-600" />
//                 <span className="font-bold text-xl text-gray-900 dark:text-gray-100">MediTrack Pro</span>
//               </div>
//             </Link>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
//                     {session?.user?.image && (
//                       <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
//                     )}
//                     <AvatarFallback className="bg-primary/5 text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/profile"))}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/settings"))}>
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
//                   Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// "use client"

// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';
// import { SidebarTrigger } from '../ui/sidebar';
// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText } from 'lucide-react';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.5,
//           ease: [0.43, 0.13, 0.23, 0.96],
//         },
//       }),
//     }),
//     []
//   );

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full border-b",
//         "bg-background/80 backdrop-blur-md",
//         "border-border/40 shadow-sm"
//       )}
//     >
//       <div className="mx-auto w-full px-4">
//         <div className="flex h-16 items-center">
//           {/* Left section */}
//           <motion.div
//             className="flex items-center gap-4 flex-1"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             <SidebarTrigger />
//             {session?.user && pathname !== '/home' && (
//               <Button
//                 onClick={() => router.back()}
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10"
//               >
//                 <ArrowLeft className="size-5" />
//               </Button>
//             )}
//             <Link href={'/dashboard'} className="flex items-center gap-3">
//               <div className="flex items-center space-x-2">
//                 <FileText className="h-6 w-6 text-blue-600" />
//                 <span className="font-bold text-xl text-gray-900 dark:text-gray-100">MediTrack Pro</span>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Right section */}
//           <motion.div
//             className="flex items-center gap-4 ml-auto"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
//                     {session?.user?.image && (
//                       <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
//                     )}
//                     <AvatarFallback className="bg-primary/5 text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/profile"))}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/settings"))}>
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
//                   Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// "use client"

// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';

// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import { useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText } from 'lucide-react';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.5,
//           ease: [0.43, 0.13, 0.23, 0.96],
//         },
//       }),
//     }),
//     []
//   );

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 10,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full border-b",
//         "bg-background/80 backdrop-blur-md",
//         "border-border/40 shadow-sm"
//       )}
//     >
//       <div className="mx-auto w-full px-4">
//         <div className="flex h-16 items-center">
//           {/* Left section */}
//           <motion.div
//             className="flex items-center gap-4 flex-1"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             <SidebarTrigger className="h-7 w-7 hover:bg-accent hover:text-accent-foreground" />
//             <Link href={'/dashboard'} className="flex items-center gap-3">
//               <div className="flex items-center space-x-2">
//                 <FileText className="h-6 w-6 text-blue-600" />
//                 <span className="font-bold text-xl text-gray-900 dark:text-gray-100">MediTrack Pro</span>
//               </div>
//             </Link>
//           </motion.div>

//           {/* Right section */}
//           <motion.div
//             className="flex items-center gap-4 ml-auto"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
//                     {session?.user?.image && (
//                       <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
//                     )}
//                     <AvatarFallback className="flex h-full w-full items-center justify-center rounded-full bg-primary/5 text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/profile")}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer" onClick={() => router.push("/settings")}>
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
//                   Sign out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



// "use client";

// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useMemo } from 'react';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText, Settings, UserCircle, LogOut } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.4,
//           ease: 'easeOut',
//         },
//       }),
//     }),
//     []
//   );

//   const dropdownItemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
//     hover: { x: 5, transition: { duration: 0.2 } }
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 20,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full",
//         "bg-background/70 backdrop-blur-xl",
//         "border-b border-border/40",
//         "shadow-lg shadow-black/5"
//       )}
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             {session?.user && pathname !== '/home' && (
//               <Button
//                 onClick={() => router.back()}
//                 variant="ghost"
//                 size="icon"
//                 className="hover:bg-primary/10 transition-colors duration-200"
//               >
//                 <ArrowLeft className="size-5" />
//               </Button>
//             )}
//             <Link href={'/'} className="flex items-center gap-3 group">
//               <div className="flex items-center space-x-2">
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <FileText className="h-7 w-7 text-blue-600 transition-colors group-hover:text-blue-700" />
//                 </motion.div>
//                 <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//                   MediTrack Pro
//                 </span>
//               </div>
//             </Link>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button 
//                   variant="ghost" 
//                   className="rounded-full p-0 hover:bg-transparent focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
//                 >
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
//                     {session?.user?.image && (
//                       <AvatarImage 
//                         src={session.user.image} 
//                         alt={session.user.name || "User"}
//                         className="object-cover"
//                       />
//                     )}
//                     <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent 
//                 align="end" 
//                 className="w-56 p-2 bg-background/80 backdrop-blur-lg border border-border/40 shadow-xl"
//               >
//                 <motion.div variants={dropdownItemVariants} whileHover="hover">
//                   <DropdownMenuItem 
//                     className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary/10"
//                     onClick={() => router.push("/profile")}
//                   >
//                     <UserCircle className="size-4" />
//                     Profile
//                   </DropdownMenuItem>
//                 </motion.div>
                
//                 <motion.div variants={dropdownItemVariants} whileHover="hover">
//                   <DropdownMenuItem 
//                     className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary/10"
//                     onClick={() => router.push("/settings")}
//                   >
//                     <Settings className="size-4" />
//                     Settings
//                   </DropdownMenuItem>
//                 </motion.div>

//                 <DropdownMenuSeparator className="my-2 bg-border/40" />
                
//                 <motion.div variants={dropdownItemVariants} whileHover="hover">
//                   <DropdownMenuItem 
//                     className="flex items-center gap-2 p-2 cursor-pointer rounded-md text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
//                     onClick={() => signOut({ callbackUrl: '/' })}
//                   >
//                     <LogOut className="size-4" />
//                     Sign out
//                   </DropdownMenuItem>
//                 </motion.div>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



// "use client";

// import { signOut, useSession } from 'next-auth/react';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { useMemo } from 'react';
// import { Button } from '../ui/button';
// import { ArrowLeft, FileText, Settings, UserCircle, LogOut } from 'lucide-react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import ThemeToggler from '../Themes/ModeToggle';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { getInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuSeparator,
// } from "@/components/ui/dropdown-menu";
// import { cn } from '@/lib/utils';

// export const Navbar = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItemVariants = useMemo(
//     () => ({
//       hidden: { opacity: 0, y: -20 },
//       visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//           delay: i * 0.1,
//           duration: 0.4,
//           ease: 'easeOut',
//         },
//       }),
//     }),
//     []
//   );

//   const dropdownItemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
//     hover: { x: 5, transition: { duration: 0.2 } }
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         type: 'spring',
//         damping: 20,
//         stiffness: 100,
//       }}
//       className={cn(
//         "sticky top-0 z-[999] w-full",
//         "bg-background/70 backdrop-blur-xl",
//         "border-b border-border/40",
//         "shadow-lg shadow-black/5"
//       )}
//     >
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between pr-8">
//           <motion.div
//             className="flex items-center"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={0}
//           >
//             <div className="flex items-center">
//               {session?.user && pathname !== '/home' && (
//                 <Button
//                   onClick={() => router.back()}
//                   variant="ghost"
//                   size="icon"
//                   className="hover:bg-primary/10 transition-colors duration-200 ml-2"
//                 >
//                   <ArrowLeft className="size-5" />
//                 </Button>
//               )}
//               <Link href={'/'} className="flex items-center pl-8">
//                 <div className="flex items-center space-x-2">
//                   <motion.div
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <FileText className="h-7 w-7 text-blue-600 transition-colors group-hover:text-blue-700" />
//                   </motion.div>
//                   <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
//                     MediTrack Pro
//                   </span>
//                 </div>
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             className="flex items-center gap-4 pr-4"
//             initial="hidden"
//             animate="visible"
//             variants={navItemVariants}
//             custom={1}
//           >
//             <ThemeToggler />
            
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button 
//                   variant="ghost" 
//                   className="rounded-full p-0 hover:bg-transparent focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
//                 >
//                   <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
//                     {session?.user?.image && (
//                       <AvatarImage 
//                         src={session.user.image} 
//                         alt={session.user.name || "User"}
//                         className="object-cover"
//                       />
//                     )}
//                     <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-medium">
//                       {getInitials(session?.user?.name || "IN")}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent 
//                 align="end" 
//                 className="w-56 p-2 bg-background/80 backdrop-blur-lg border border-border/40 shadow-xl"
//               >
//                 <motion.div variants={dropdownItemVariants} whileHover="hover">
//                   <DropdownMenuItem 
//                     className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary/10"
//                     onClick={() => router.push("/profile")}
//                   >
//                     <UserCircle className="size-4" />
//                     Profile
//                   </DropdownMenuItem>
//                 </motion.div>
                
//                 <motion.div variants={dropdownItemVariants} whileHover="hover">
//                   <DropdownMenuItem 
//                     className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary/10"
//                     onClick={() => router.push("/settings")}
//                   >
//                     <Settings className="size-4" />
//                     Settings
//                   </DropdownMenuItem>
//                 </motion.div>

//                 <DropdownMenuSeparator className="my-2 bg-border/40" />
                
//                 <motion.div variants={dropdownItemVariants} whileHover="hover">
//                   <DropdownMenuItem 
//                     className="flex items-center gap-2 p-2 cursor-pointer rounded-md text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
//                     onClick={() => signOut({ callbackUrl: '/' })}
//                   >
//                     <LogOut className="size-4" />
//                     Sign out
//                   </DropdownMenuItem>
//                 </motion.div>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </motion.div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

"use client";

import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, FileText, Settings, UserCircle, LogOut, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggler from '../Themes/ModeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

interface NavbarProps {
  initialSession?: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
}

export const Navbar = ({initialSession}: NavbarProps) => {
  const { data: sessionData, status } = useSession();
  const session = sessionData || initialSession;
  
  
  const router = useRouter();
  const pathname = usePathname();

  const navItemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: -20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.4,
          ease: 'easeOut',
        },
      }),
    }),
    []
  );

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
    hover: { x: 5, transition: { duration: 0.2 } }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
      className={cn(
        "sticky top-0 z-[999] w-full",
        "bg-background/70 backdrop-blur-xl",
        "border-b border-border/50 opacity-50",
        "shadow-lg shadow-black/5"
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            custom={0}
          >
            <div className="flex items-center">
              {session?.user && pathname !== '/home' && (
                <Button
                  onClick={() => router.back()}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 transition-colors duration-200 ml-2"
                >
                  <ArrowLeft className="size-5" />
                </Button>
              )}
              <Link href={'/'} className="flex items-center pl-4 sm:pl-8">
                <div className="flex items-center space-x-2 group">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg"
                  >
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-colors group-hover:text-blue-700" />
                  </motion.div>
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
                    MediTrack Pro
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            custom={1}
          >
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-primary/10 transition-colors duration-200"
            >
              <Bell className="size-5" />
              <span className="absolute -top-1 -right-1 size-2 bg-blue-600 rounded-full" />
            </Button>
            
            <ThemeToggler />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="rounded-full p-0 hover:bg-transparent focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
                >
                  <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                    {session?.user?.image && (
                      <AvatarImage 
                        src={session.user.image} 
                        alt={session.user.name || "User"}
                        className="object-cover"
                      />
                    )}
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm font-medium">
                      {getInitials(session?.user?.name || "IN")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 p-2 bg-background/80 backdrop-blur-lg border border-border/40 shadow-xl z-[1000]"
              >
                {session?.user?.name || status==='loading' && (
                  <div className="px-2 py-1.5 mb-2">
                    <p className="text-sm font-medium truncate">{session?.user?.name || 'Loading...'}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {session?.user?.email || 'Loading...'}
                    </p>
                  </div>
                )}
                
                <motion.div variants={dropdownItemVariants} whileHover="hover">
                  <DropdownMenuItem 
                    className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary/10"
                    onClick={() => router.push("/profile")}
                  >
                    <UserCircle className="size-4" />
                    Profile
                  </DropdownMenuItem>
                </motion.div>
                
                <motion.div variants={dropdownItemVariants} whileHover="hover">
                  <DropdownMenuItem 
                    className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-primary/10"
                    onClick={() => router.push("/settings")}
                  >
                    <Settings className="size-4" />
                    Settings
                  </DropdownMenuItem>
                </motion.div>

                <DropdownMenuSeparator className="my-2 bg-border/40" />
                
                <motion.div variants={dropdownItemVariants} whileHover="hover">
                  <DropdownMenuItem 
                    className="flex items-center gap-2 p-2 cursor-pointer rounded-md text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
                    onClick={() => signOut({ callbackUrl: '/' })}
                  >
                    <LogOut className="size-4" />
                    Sign out
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
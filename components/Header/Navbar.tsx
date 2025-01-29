"use client";

import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { Button } from '../ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
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
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { data: session } = useSession();
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
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
        },
      }),
    }),
    []
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }}
      className={cn(
        "sticky top-0 z-[999] w-full border-b",
        "bg-background/80 backdrop-blur-md",
        "border-border/40 shadow-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            custom={0}
          >
            {session?.user && pathname !== '/home' && (
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="size-5" />
              </Button>
            )}
            <Link href={'/'} className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-900">MediTrack Pro</span>
          </div>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            custom={1}
          >
            <ThemeToggler />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-0 hover:bg-transparent">
                  <Avatar className="size-9 border-2 border-primary/20 transition-all duration-300 hover:border-primary/40">
                    {session?.user?.image && (
                      <AvatarImage src={session.user.image} alt={session.user.name || "User"} />
                    )}
                    <AvatarFallback className="bg-primary/5 text-sm font-medium">
                      {getInitials(session?.user?.name || "IN")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/profile"))}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => (router.push("/settings"))}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-destructive" onClick={() => signOut({ callbackUrl: '/' })}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
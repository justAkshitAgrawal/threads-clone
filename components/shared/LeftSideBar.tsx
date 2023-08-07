"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <motion.div
              key={link.label}
              layoutId="leftsidebar_link"
              whileHover={{ scale: 1.1 }}
              className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
            >
              <Link href={link.route} className="flex items-center space-x-4">
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  height={24}
                  width={24}
                />
                <p className="text-light-1 max-lg:hidden">{link.label}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton
            signOutCallback={() => {
              router.push("/sign-in");
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex cursor-pointer gap-4 p-4"
            >
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />

              <p className="text-light-2 max-lg:hidden">Logout</p>
            </motion.div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSideBar;

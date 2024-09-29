"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"; // assuming you use shadcn components

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-6 px-8 bg-black/20 backdrop-blur-lg rounded-lg">
      <div className="text-white text-lg font-bold">
        <Link href="/">A</Link>
      </div>
      <nav className="space-x-6">
        <Link href="/about" className="text-white hover:text-gray-400">
          About
        </Link>
        <Link href="/projects" className="text-white hover:text-gray-400">
          Projects
        </Link>
        {/* <Link href="/blog" className="text-white hover:text-gray-400">
          Blog
        </Link> */}
        <Link href="/guestbook" className="text-white hover:text-gray-400">
          Guestbook
        </Link>
      </nav>
      <div className="space-x-4 items-center hidden">
        <Button variant="ghost" onClick={handleOpen}>
          ⚙️
        </Button>
      </div>

      {/* Modal component */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-black text-white border-[1px] border-gray-500">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 bg-black">
            <p className="text-sm text-gray-500">Account</p>
            <Button variant="ghost">Sign in</Button>
            <p className="text-sm text-gray-500">General</p>
            <Button variant="ghost">Copy Link</Button>
            <Button variant="ghost">Source Code</Button>
            <p className="text-sm text-gray-500">Social</p>
            <Button variant="ghost">GitHub</Button>
            <Button variant="ghost">GitLab</Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;

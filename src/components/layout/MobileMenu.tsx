"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { mobileMenuVariants, mobileMenuItemVariants } from "@/lib/animations";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={mobileMenuVariants}
      className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl pt-20 md:hidden"
    >
      <nav className="flex flex-1 flex-col items-center justify-center gap-6">
        {NAV_LINKS.map((link, i) => (
          <motion.div key={link.href} custom={i} variants={mobileMenuItemVariants}>
            <Link
              href={link.href}
              onClick={onClose}
              className={cn(
                "text-2xl font-display font-bold transition-colors",
                pathname === link.href
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div custom={NAV_LINKS.length} variants={mobileMenuItemVariants}>
          <Link href="/contact" onClick={onClose}>
            <Button size="lg">Get Started</Button>
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "手术机器人中标情况",
  description: "手术机器人中标情况",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header>
              <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 relative overflow-hidden rounded-md">
                      <Image 
                        src="/images/6ba77633f8e98ea9e0caa82c4e3a9cb.jpg"
                        alt="MedRobot Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xl font-bold text-[#40E0F0]">
                      MedRobot
                    </div>
                  </div>
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="border-t py-6">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>© 2025 MedRobot Research Center</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

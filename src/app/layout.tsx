import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TRPCProvider from '@/trpc/TRPCProvider';
import { ThemeProvider } from '@/providers/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaSQuickStart',
  description:
    'Start Strong with Next.js, TailwindCSS, Prisma, Stripe: Your SaaS Quickstart',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('overflow-x-hidden', inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCProvider>{children}</TRPCProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

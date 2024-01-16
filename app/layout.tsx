import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import Head from 'next/head'
const font = Poppins({ weight:[ '100','200','300','400','500','600','700','800','900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mayur Portfolio',
  description: 'mayur portfolio',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/m.png" />
      </Head>
          <body className={cn(
          font.className,
          "bg-white dark:bg-[#0c0a09]"
        )}>
   <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-theme"
        >  
        {children} 
        <Toaster />
         </ThemeProvider>

         </body>
        
    </html>
  )
}

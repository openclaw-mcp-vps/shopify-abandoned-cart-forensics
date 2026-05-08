import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cart Forensics — Analyze Why Customers Abandon Carts',
  description: 'Track checkout behavior, identify friction points, and reduce cart abandonment with actionable insights for your Shopify store.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d93850ab-b22d-4fa6-bbeb-d1fd5e55e2b4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

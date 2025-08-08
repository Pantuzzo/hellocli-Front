import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hellocli.netlify.app/'),
  title: "HelloCli - Seu Atendente Virtual Inteligente para WhatsApp e Web",
  description:
    "Chatbot inteligente com IA generativa para pequenos negócios. Atendimento automático 24/7, integração WhatsApp, configuração em 5 minutos. Teste grátis!",
  keywords: "chatbot, whatsapp business, atendimento automatico, ia generativa, pequenos negocios, bot inteligente",
  authors: [{ name: "HelloCli Team" }],
  creator: "HelloCli",
  publisher: "HelloCli",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hellocli.com",
    title: "HelloCli - Seu Atendente Virtual Inteligente",
    description: "Chatbot inteligente com IA generativa para pequenos negócios. Atendimento automático 24/7.",
    siteName: "HelloCli",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HelloCli - Chatbot Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HelloCli - Seu Atendente Virtual Inteligente",
    description: "Chatbot inteligente com IA generativa para pequenos negócios.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`} suppressHydrationWarning>
         <Providers>{children}</Providers>
      </body>
    </html>
  )
}

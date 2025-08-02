"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, FileText, Github, HelpCircle, Linkedin, Mail, MapPin, MessageCircle, Phone, Shield } from "lucide-react"
import { ScrollReveal } from "../animations/scroll-reveal"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-2xl font-bold">HelloCli</span>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                O chatbot inteligente que conversa com seus clientes por você. Atendimento automático 24/7 para pequenos
                negócios.
              </p>

              {/* Trust badges */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-background/90">100% seguro - Dados criptografados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-background/90">Suporte brasileiro em horário comercial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-green-500 text-white text-xs">
                    99.9% Uptime
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500 text-white text-xs">
                    ISO 27001
                  </Badge>
                </div>
              </div>

              {/* Social */}
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background/70 hover:text-background hover:bg-background/10"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-background">Produto</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a href="#funcionalidades" className="hover:text-background transition-colors text-sm">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-background transition-colors text-sm">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-background transition-colors text-sm">
                    Demo ao Vivo
                  </a>
                </li>
                <li>
                  <a href="/login" className="hover:text-background transition-colors text-sm">
                    Começar Grátis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-background">Suporte</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a href="#faq" className="hover:text-background transition-colors text-sm flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat ao Vivo
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:suporte@hellocli.com"
                    className="hover:text-background transition-colors text-sm flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    suporte@hellocli.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5511999999999"
                    className="hover:text-background transition-colors text-sm flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (11) 99999-9999
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm">
                    Status do Sistema
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-background">Legal</h4>
              <ul className="space-y-3 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm">
                    LGPD
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors text-sm">
                    SLA
                  </a>
                </li>
              </ul>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-background/20">
                <div className="flex items-start space-x-2 text-xs text-background/70">
                  <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>HelloCli Tecnologia Ltda.</p>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} HelloCli. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-xs text-background/70">
              <span>Feito com ❤️ no Brasil</span>
              <span>•</span>
              <span>Powered by OpenAI</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}

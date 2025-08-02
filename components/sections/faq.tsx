"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "../animations/scroll-reveal"
import { motion } from "framer-motion"

export function FAQ() {
  const faqs = [
    {
      question: "Como funciona a configuração do HelloCli?",
      answer:
        "É muito simples! Após se cadastrar, você adiciona um código no seu site, configura suas perguntas frequentes e personaliza as mensagens. Todo o processo leva menos de 5 minutos.",
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer:
        "Não! O HelloCli foi desenvolvido para ser usado por qualquer pessoa. A interface é intuitiva e oferecemos suporte completo em português.",
    },
    {
      question: "Como funciona a integração com WhatsApp?",
      answer:
        "O chatbot coleta as informações iniciais do cliente e, quando necessário, direciona automaticamente para seu WhatsApp Business com todas as informações já organizadas.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento e continuar usando até o final do período pago.",
    },
    {
      question: "Que tipos de negócio podem usar o HelloCli?",
      answer:
        "Qualquer pequeno negócio que recebe clientes: clínicas, salões, consultórios, lojas, prestadores de serviço, e-commerces, etc.",
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 hover:shadow-md transition-shadow border border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}

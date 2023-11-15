import React from 'react'
import Styles from './styles'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import {
    IFaqQuestion,
    IFaqQuestionItem
} from '@/components/@interface/common-question.interface'
import AppAccordion, {
    useAppAccordionRef
} from '@/components/common/app-accordion'

const LPFaq: React.FC = () => {
    const questions: IFaqQuestion[] = [
        {
            title: `O que é geração de leads de forma orgânica?`,
            text: `Geração de leads de forma orgânica é o processo de atrair potenciais clientes (leads) por meio de esforços não pagos, como marketing de conteúdo, SEO, mídias sociais e outras estratégias que não envolvem publicidade paga.`
        },
        {
            title: `Como posso garantir que os leads gerados de forma orgânica sejam de qualidade?`,
            text: `Para atrair leads de qualidade, é importante segmentar seu público-alvo, oferecer conteúdo relevante, fornecer informações de valor, usar formulários de captura eficazes e nutrir os leads por meio de email marketing e outras táticas de engajamento.`
        },
        {
            title: `Como medir o sucesso na geração de leads orgânicos?`,
            text: `Você pode medir o sucesso na geração de leads orgânicos acompanhando métricas como o tráfego do site, taxas de conversão, geração de leads, engajamento nas mídias sociais e retorno sobre o investimento (ROI) das estratégias implementadas.`
        },
        {
            title: `Quais são os desafios mais comuns que enfrentamos ao tentar gerar leads de forma orgânica, e como podemos superá-los como empresa?`,
            text: `Você pode medir o sucesso na geração de leads orgânicos acompanhando métricas como o tráfego do site, taxas de conversão, geração de leads, engajamento nas mídias sociais e retorno sobre o investimento (ROI) das estratégias implementadas.`
        }
    ]

    const questionsResult: IFaqQuestionItem[] = questions.map(question => ({
        question,
        ref: useAppAccordionRef() // eslint-disable-line react-hooks/rules-of-hooks
    }))

    const onAcordionOpen = (index: number) => {
        questionsResult.forEach((item, itemIndex) => {
            if (index !== itemIndex) item.ref.current?.close()
        })
    }

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.faq}>
            <LPSectionTitle className="sm:mb-6" title="FAQs" />

            <Styles.Content>
                {questionsResult.map((item, index) => (
                    <AppAccordion
                        key={index}
                        ref={item.ref}
                        title={item.question.title}
                        onOpen={() => onAcordionOpen(index)}
                    >
                        {item.question.text}
                    </AppAccordion>
                ))}
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPFaq

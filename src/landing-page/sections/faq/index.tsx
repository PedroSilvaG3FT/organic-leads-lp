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
            text: ``
        },
        {
            title: `Como posso garantir que os leads gerados de forma orgânica sejam de qualidade?`,
            text: ``
        },
        {
            title: `Como medir o sucesso na geração de leads orgânicos?`,
            text: ``
        },
        {
            title: `Quais são os desafios mais comuns que enfrentamos ao tentar gerar leads de forma orgânica, e como podemos superá-los como empresa?`,
            text: ``
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

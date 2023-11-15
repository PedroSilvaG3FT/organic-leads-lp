import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSocialMedia from '../social-media'
import { scrollTo } from '@/functions/scroll-to.function'
import { SOCIAL_MEDIA } from '@/contants/social-media.constant'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface ILPFooterProps {
    openModal: Function
    openModalContact: Function
}

const LPFooter: React.FC<ILPFooterProps> = props => {
    const { openModal, openModalContact } = props
    const openURL = (url: string) => window.open(url, '_blank')

    const columns = [
        {
            title: `Mapa do site`,
            items: [
                {
                    title: `Topo do site`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.top)
                },
                {
                    title: `Fizemos a difereça`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.cases)
                },
                {
                    title: `Nosso time`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.team)
                },
                {
                    title: `Sobre nós`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.about)
                },
                {
                    title: `Nossa metodologia`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.methodology)
                },
                {
                    title: `Robôs/orgânico`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.capture)
                },
                {
                    title: `FAQs`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.faq)
                }
            ]
        },
        {
            title: `Institucional`,
            items: [
                {
                    title: `Sobre nós`,
                    action: () => scrollTo(LANDING_PAGE_NAVIGATION.about)
                },
                { title: `Arenas`, action: () => {} },
                { title: `Novidades`, action: () => {} },
                {
                    title: `Contato`,
                    action: () => openModalContact()
                }
            ]
        },
        {
            title: `Social`,
            items: SOCIAL_MEDIA.map(item => ({
                title: item.title,
                action: () => openURL(item.link)
            }))
        },
        {
            title: `Legal`,
            items: [
                { title: `Termos de uso`, action: () => {} },
                { title: `Privacidade`, action: () => {} },
                { title: `Cookies`, action: () => {} },
                { title: `Licenças`, action: () => {} }
            ]
        }
    ]

    const itemsContainerStyle: React.CSSProperties = {
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`
    }

    return (
        <>
            <Styles.Section id={LANDING_PAGE_NAVIGATION.socialMedia}>
                <Styles.Container>
                    <Styles.View>
                        <Styles.Image src={images.LogoWhite} />
                        <Styles.Text className="sm:text-center">
                            Nós semeamos soluções e <br /> cultivamos
                            relacionamentos <br />
                            para colher ótimos negócios!
                        </Styles.Text>
                    </Styles.View>

                    <Styles.ItemsContainer style={itemsContainerStyle}>
                        {columns.map((col, index) => (
                            <Styles.Item key={index}>
                                <Styles.Title className="mb-2">
                                    {col.title}
                                </Styles.Title>

                                {col.items.map((item, itemIndex) => (
                                    <Styles.TextBold
                                        key={itemIndex}
                                        onClick={item.action}
                                    >
                                        {item.title}
                                    </Styles.TextBold>
                                ))}
                            </Styles.Item>
                        ))}
                    </Styles.ItemsContainer>
                </Styles.Container>
            </Styles.Section>

            <Styles.Footer>
                <Styles.Text className="mr-auto sm:text-center sm:text-sm sm:mb-4">
                    ® 2023 organicleads.com.br | CNPJ: 00.182.874/0001-00 -
                    Todos os direitos reservados.
                </Styles.Text>

                <LPSocialMedia />
            </Styles.Footer>
        </>
    )
}

export default LPFooter

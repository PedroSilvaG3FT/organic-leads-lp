import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import AppButton from '@/components/common/@button/app-button'
import TypingText from '@/landing-page/components/typing-text'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import theme from '@/styles/ts/theme'
import images from '@/assets/images'
import { useWindowSize } from '@/hooks/window-size.hook'

interface IHeroProps {
    openModal: Function
}
const LPHero: React.FC<IHeroProps> = ({ openModal }) => {
    const { isMobile } = useWindowSize()
    const heroImage = isMobile ? landingPage.HeroMobile : landingPage.Hero

    return (
        <Styles.ContainerWrapper>
            <Styles.Container id={LANDING_PAGE_NAVIGATION.top}>
                <Styles.Nav>
                    <Styles.ImageLogo src={images.LogoGreen} />
                </Styles.Nav>

                <Styles.Small>Bem-vindo(a)</Styles.Small>

                <TypingText
                    highlights={['colher bons negócios']}
                    highlightColor={theme.colors.primary}
                    text="Nós semeamos soluções e cultivamos relacionamentos, para colher bons negócios!"
                    className="min-h-[98px] sm:h-[100px] leading-[3rem] text-[2.5rem] text-center font-bold sm:text-[1.2rem] sm:block sm:leading-normal sm:text-center sm:min-h-0"
                />

                <Styles.BackgroundImage src={heroImage} />

                <AppButton className="w-80 my-4" onClick={() => openModal()}>
                    Quero saber mais!
                </AppButton>

                <Styles.Image src={landingPage.Signatures} />
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPHero

import React from 'react'
import Styles from './styles'
import { useWindowSize } from '@/hooks/window-size.hook'
import AppButton from '@/components/common/@button/app-button'
import LPSectionTitle from '@/landing-page/components/section-title'
import CarouselLoop from '@/components/common/carousel-loop'
import landingPage from '@/assets/landing-page'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

interface ICasesProps {
    openContact: Function
}
const LPCases: React.FC<ICasesProps> = props => {
    const { openContact } = props
    const { isMobile } = useWindowSize()
    const slidesPerView = isMobile ? 2 : 6

    const data = [
        { title: `uxnocode`, image: landingPage.cases.uxnocode },
        { title: `MyOTB`, image: landingPage.cases.MyOTB },
        { title: `Nadine Magalhaes`, image: landingPage.cases.NadineMagalhaes },
        { title: `Bitworks`, image: landingPage.cases.Bitworks },
        {
            title: `Editora Brasileira`,
            image: landingPage.cases.EditoraBrasileira
        },
        {
            title: `Produtora Brasileira`,
            image: landingPage.cases.ProdutoraBrasileira
        }
    ]

    return (
        <Styles.ContainerWrapper id={LANDING_PAGE_NAVIGATION.cases}>
            <Styles.Container>
                <LPSectionTitle
                    className="mb-12"
                    title="Onde nós já fizemos a diferença"
                />

                <CarouselLoop stopOnHover slidesPerView={slidesPerView}>
                    {data.map((item, index) => (
                        <Styles.ImageContainer key={index}>
                            <Styles.Image
                                src={item.image}
                                alt={item.title}
                                title={item.title}
                            />
                        </Styles.ImageContainer>
                    ))}
                </CarouselLoop>

                <AppButton
                    className="w-80 mt-12 sm:mb-4"
                    onClick={() => openContact()}
                >
                    Quero saber mais!
                </AppButton>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPCases

import React from 'react'
import Styles from './styles'
import landingPage from '@/assets/landing-page'
import { AppButton } from '@/styles/ts/components'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPDifferentials: React.FC = () => {
    return (
        <Styles.ContainerWrapper id={LANDING_PAGE_NAVIGATION.capture}>
            <Styles.Container>
                <Styles.Title>
                    Veja a diferença entre a captação por robôs e{' '}
                    <br className="sm:hidden" />a captação orgânica de negócios
                </Styles.Title>

                <Styles.Small className="sm:hidden">
                    Conheça um pouco mais sobre esse time de especialistas{' '}
                    <br />
                    apaixonados pelas relações humanas e pela excelência.
                </Styles.Small>

                <Styles.Small className="hidden text-center text-base sm:block">
                    Veja a diferença da captação por robôs e quando trabalho é
                    feito organicamente, ou seja, por pessoas reais.
                </Styles.Small>

                <Styles.Image
                    className="hidden w-36 mt-4 sm:block"
                    src={landingPage.Users}
                />

                <Styles.Content>
                    <Styles.Image src={landingPage.capture.robot} />
                    <Styles.Image src={landingPage.capture.organic} />
                </Styles.Content>

                <Styles.Text>
                    Pare de pagar por números e comece a pagar por negócios
                    gerados!
                    <br />
                    <br className="hidden sm:block" />
                    Nós encontramos o cliente ideal e você só fecha o negócio
                </Styles.Text>

                <AppButton className="w-80">Quero saber mais</AppButton>
            </Styles.Container>
        </Styles.ContainerWrapper>
    )
}

export default LPDifferentials

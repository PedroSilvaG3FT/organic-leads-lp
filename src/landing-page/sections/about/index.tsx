import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPAbout: React.FC = () => {
    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.about}>
            <LPSectionTitle title="Sobre nós" />

            <Styles.Content>
                <Styles.Image src={images.LogoCard} />

                <Styles.View>
                    <Styles.Title>Organic Leads - Desde 2016</Styles.Title>

                    <Styles.Text>
                        Em meados do ano de 2016, a necessidade em desenvolver
                        relações pautadas na confiança, no respeito, no
                        entendimento e na relação humana, fez nascer a Organic.
                    </Styles.Text>

                    <Styles.Text>
                        Uma empresa com foco no Human to Human ou H2H.  Pensar
                        no negócio como um relacionamento humano, onde o
                        convívio diário alimentado por conversas sinceras,
                        ideias, questionamentos, compreensão e por vezes
                        debates, tem sido o diferencial na trajetória da Organic
                        e de seus clientes. 
                    </Styles.Text>

                    <Styles.Text>
                        Entender não só as necessidades reais envolvidas, mas
                        também as emoções que impulsionam a compra e a venda,
                        tornam a jornada mais tranquila e os negócios efetivos.
                    </Styles.Text>
                </Styles.View>
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPAbout

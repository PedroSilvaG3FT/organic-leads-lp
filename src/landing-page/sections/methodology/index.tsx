import React from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import icons from '@/assets/icons'

const LPMethodology: React.FC = () => {
    const data = [
        {
            title: `Semear`,
            icon: icons.Sunset,
            description: `Semear plantas em solo fértil nos dá tranquilidade, da mesma forma que o entendimento do negócio alimenta organicamente uma base de clientes próspera. Ambos os processos exigem tempo, paciência e dedicação para um crescimento sustentável.`
        },
        {
            title: `Cultivar`,
            icon: icons.Hourglass,
            description: `Cultivar relacionamentos é vital tanto na geração de negócios, quanto no crescimento das plantas. Assim como cuidar das sementes torna um jardim frutífero, cultivar conexões com clientes e parceiros em potencial promove a confiança, resultando em uma colheita abundante de oportunidades e sucesso a longo prazo.`
        },
        {
            title: `Colher`,
            icon: icons.HeartHand,
            description: `Uma colheita derivada do cultivo orgânico é estável e abundante.
Através de conexões autênticas,  garantimos a qualidade e a ausência de interferência externa e assim estabelecemos uma relação duradoura com clientes e parceiros.`
        }
    ]

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.methodology}>
            <LPSectionTitle title="Nossa metodologia" />

            <Styles.Content>
                {data.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.Icon src={item.icon} />
                        <Styles.Title>{item.title}</Styles.Title>
                        <Styles.Text>{item.description}</Styles.Text>
                    </Styles.Card>
                ))}
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPMethodology

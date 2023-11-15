import React, { useState } from 'react'
import Styles from './styles'
import images from '@/assets/images'
import { FaLinkedin } from 'react-icons/fa'
import landingPage from '@/assets/landing-page'
import LPSectionTitle from '@/landing-page/components/section-title'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'

const LPTeam: React.FC = () => {
    const [currentOpen, setCurrentOpen] = useState<null | number>(null)

    const data = [
        {
            name: `Juliana Dantas`,
            role: `Founder e CEO`,
            image: landingPage.team.JulianaDantas,
            description: `Especialista em geração de negócios inteligentes. Foco na dinâmica dos relacionamentos.
Empreendedora com mais de 25 anos atuando na área comercial, conhecendo cada fase do processo de vendas, da captação do lead até sua conversão e a satisfação do cliente.
Educadora ambiental, Monitora ambiental, Técnica em Meio Ambiente, Gestora da Qualidade e Teóloga, é amante de livros e boa música, aventureira, apaixonada por viagens, aspirante do Jiu-Jitsu, mãe de dois e tutora do Pitoque e da Lily (os filhotinhos mais bonitos!).
`,
            linkedinURL: ``
        },
        {
            name: `Jeniffer Coutinho`,
            role: `Co-founder e COO`,
            image: landingPage.team.JenifferCoutinho,
            description: `Especialista em gestão estratégica e operações. Foco no aprimoramento de processos.
Empreendedora há mais de 8 anos, atuando nas áreas de gestão e operação, com expertise em implementação de governança corporativa, planejamento estratégico e captação de recursos.
Apaixonada por desenvolvimento em FlutterFlow, culinária, confeitaria, literatura e música. Mãe de dois meninos lindos e tutora de uma buldogue desavisada (sério, ela é terrível!).
`,
            linkedinURL: ``
        }
    ]

    const toggleOpen = (index: number) => {
        if (currentOpen == index) setCurrentOpen(null)
        else setCurrentOpen(index)
    }

    return (
        <Styles.Container id={LANDING_PAGE_NAVIGATION.team}>
            <LPSectionTitle title="Nosso time" />

            <Styles.Text className="hidden mt-4 text-center font-light sm:flex">
                Conheça um pouco mais sobre esse time de especialistas
                apaixonados pelas relações <br /> humanas e pela excelência.
            </Styles.Text>

            <Styles.Content>
                {data.map((item, index) => (
                    <Styles.Card key={index}>
                        <Styles.ImageContainer>
                            <Styles.CardImage src={item.image} />
                            <Styles.Row>
                                <Styles.View>
                                    <Styles.Title>{item.name}</Styles.Title>
                                    <Styles.Small>{item.role}</Styles.Small>
                                    <Styles.SmallDetail
                                        onClick={() => toggleOpen(index)}
                                    >
                                        {currentOpen === index
                                            ? `Ver menos`
                                            : `Ver mais...`}
                                    </Styles.SmallDetail>
                                </Styles.View>

                                <Styles.Link>
                                    <FaLinkedin />
                                </Styles.Link>
                            </Styles.Row>
                        </Styles.ImageContainer>

                        <Styles.CardBody
                            className={
                                currentOpen === index
                                    ? 'sm:!flex body-animated'
                                    : ''
                            }
                        >
                            <Styles.Title>Sobre mim</Styles.Title>
                            <Styles.Small>
                                {item.name.split(' ')[0]}
                            </Styles.Small>

                            <Styles.Divider />

                            <Styles.Text>{item.description}</Styles.Text>
                            <Styles.Image src={images.LogoGold} />
                        </Styles.CardBody>
                    </Styles.Card>
                ))}
            </Styles.Content>
        </Styles.Container>
    )
}

export default LPTeam

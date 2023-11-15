import { AppContainer } from '@/styles/ts/components'
import landingPage from '@/assets/landing-page'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    ${tw`sm:mt-0 sm:!bg-none`}

    background: #d9d9d9;
    background: ${() => `url("${landingPage.HeroBG}")`};
    background-size: cover;
    min-height: 680px;
    margin-top: ${({ theme }) =>
        `calc(${theme.spacing.landing_page_header_height} + 12px)`};
`

const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center relative sm:pt-8`}
`

const BackgroundImage = styled.img``

const Image = styled.img`
    ${tw`absolute w-52 right-20 bottom-0 sm:hidden`}
`

const Nav = styled.nav`
    ${tw`hidden w-full pb-4 mb-4 sm:block`}
    border-bottom: 1px solid rgba(13, 36, 33, 0.20);
`

const ImageLogo = styled.img`
    ${tw`w-36`}
`

const Small = styled.small`
    ${tw`hidden font-light sm:block`}
`

export default {
    ContainerWrapper,
    BackgroundImage,
    Container,
    ImageLogo,
    Image,
    Small,
    Nav
}

import landingPage from '@/assets/landing-page'
import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Section = styled.article`
    ${tw`py-8`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: ${() => `url("${landingPage.Pattern}")`};
`

const Container = styled(AppContainer)`
    ${tw`grid gap-8 grid-cols-[30% 1fr] sm:gap-12 sm:items-center sm:grid-cols-1!`}
`

const View = styled.div`
    ${tw`sm:flex sm:flex-col sm:items-center`}
`

const Footer = styled(AppContainer)`
    ${tw`py-8 flex items-center justify-end sm:flex-col`}
`

const Text = styled.p`
    ${tw`font-light`}
`

const Title = styled.h5`
    ${tw`font-light text-sm`}
`

const TextBold = styled.h5`
    ${tw`font-semibold mb-3 cursor-pointer`}

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

const Image = styled.img`
    ${tw`w-44 mb-6`}
`

const ItemsContainer = styled.article`
    ${tw`grid sm:grid-cols-1! sm:gap-4 sm:px-5`}
`

const Item = styled.div``

export default {
    Text,
    View,
    Item,
    Title,
    Image,
    Footer,
    Section,
    TextBold,
    Container,
    ItemsContainer
}

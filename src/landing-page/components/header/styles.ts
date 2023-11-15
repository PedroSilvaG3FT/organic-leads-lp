import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.header`
    ${tw`w-full fixed top-0 left-0 z-[3] sm:hidden`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    height: ${({ theme }) => theme.spacing.landing_page_header_height};
`

const Container = styled(AppContainer)`
    ${tw`py-0 h-full flex items-center justify-between sm:justify-start`}
`

const Image = styled.img`
    ${tw`h-12 sm:ml-auto sm:h-8`}
`

const Group = styled.section`
    ${tw`sm:hidden`}
`

const Link = styled.a`
    ${tw`ml-4 cursor-pointer relative text-sm`}
`

const Button = styled.button`
    ${tw`hidden text-lg sm:block sm:ml-auto`}
`

export default {
    Container,
    Header,
    Button,
    Image,
    Group,
    Link
}

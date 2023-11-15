import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section`
    background: #d9d9d9;
`

const Container = styled(AppContainer)`
    ${tw`py-16! flex flex-col items-center sm:pb-8!`}
`

const Title = styled.h1`
    ${tw`text-xl text-center font-semibold mb-8 sm:text-lg`}
    color: ${({ theme }) => theme.colors.primary};
`

const Small = styled.small``

const Content = styled.article`
    ${tw`grid grid-cols-[68% 32%] gap-8 my-8 sm:grid-cols-1`}
`

const Text = styled.p`
    ${tw`text-center p-4 mb-4`}
    border-radius: 7.132px;
    border: 1.4px dashed #636360;
`

const Image = styled.img`
    ${tw`h-full`}
`

export default {
    Text,
    Image,
    Title,
    Small,
    Content,
    Container,
    ContainerWrapper
}

import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`mb-12 flex flex-col items-center`}
`

const Content = styled.article`
    ${tw`mt-12 grid grid-cols-3 gap-12 sm:grid-cols-1`}
`

const Card = styled.article`
    ${tw`rounded-md !font-extralight shadow-lg p-4 py-12`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Icon = styled.img`
    ${tw`w-9 h-9`}
`

const Title = styled.h1`
    ${tw`font-medium text-lg my-4`}
`

const Text = styled.p`
    ${tw`font-light`}
`

export default {
    Text,
    Card,
    Icon,
    Title,
    Content,
    Container
}

import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`mb-12 flex flex-col items-center`}
`

const Content = styled.article`
    ${tw`mt-8 grid grid-cols-2 gap-8 sm:grid-cols-1 sm:mt-6 sm:gap-4`}
`

const View = styled.article`
    ${tw`sm:flex sm:flex-col sm:items-center`}
`

const Title = styled.h1`
    ${tw`font-medium text-xl mb-8 sm:text-base sm:w-full sm:mb-2`}
`

const Text = styled.p`
    ${tw`mb-4 font-light text-[1.225rem] sm:text-base`}
`

const Image = styled.img``

export default {
    Text,
    View,
    Image,
    Title,
    Content,
    Container
}

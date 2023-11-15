import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const ContainerWrapper = styled.section``

const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center`}
`

const ImageContainer = styled.figure`
    ${tw`mr-16`}
`

const Image = styled.img`
    ${tw`h-24  object-contain`}
`

export default {
    ContainerWrapper,
    ImageContainer,
    Container,
    Image
}

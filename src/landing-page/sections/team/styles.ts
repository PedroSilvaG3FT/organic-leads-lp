import { fadeIn } from '@/styles/animation'
import { AppContainer } from '@/styles/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled(AppContainer)`
    ${tw`mb-8 flex flex-col items-center sm:mb-0`}
`

const Content = styled.section`
    ${tw`mt-12 grid grid-cols-2 gap-4 sm:flex sm:w-full sm:!overflow-x-auto sm:mt-0 sm:py-5`}
    scroll-snap-type: x mandatory;

    > * {
        ${tw`transition-all duration-500`}
    }
`

const Card = styled.article`
    ${tw`p-2 grid grid-cols-2 gap-4 rounded-xl relative sm:p-0 sm:grid-cols-1 sm:min-w-[80vw]`}
    color: ${({ theme }) => theme.colors.bgSecondary};
    background: ${({ theme }) => theme.colors.primary};

    &::after {
        content: '';
        ${tw`absolute h-[100px] bottom-0 w-full rounded-xl z-[0]`}
        background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(10,10,10,1) 80%);
    }
`

const Title = styled.h5`
    ${tw`font-semibold text-[1.25rem]`}
`

const Small = styled.small``

const SmallDetail = styled.small`
    ${tw`mt-2 hidden sm:block`}
    color: ${({ theme }) => theme.colors.secondary};
`

const Text = styled.p`
    ${tw`text-[0.9rem]`}
`

const ImageContainer = styled.figure`
    ${tw`relative`}
`

const CardImage = styled.img`
    ${tw`rounded-xl`}
`

const Image = styled.img`
    ${tw`w-24 mt-4 z-[1] sm:hidden`}
`

const View = styled.div``

const Row = styled.section`
    ${tw`absolute bottom-0 w-full flex justify-between items-center p-4 z-[1]`}
`

const Divider = styled.hr`
    ${tw`my-4`}
    background: #FFFFFF;
`

const CardBody = styled.div.attrs(fadeIn)`
    ${tw`flex flex-col justify-center sm:hidden sm:absolute sm:bg-[#000000cc] sm:rounded-xl sm:h-full sm:p-4`}

    &.body-animated {
        animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

        @-webkit-keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
`

const Link = styled.a`
    ${tw`text-xl cursor-pointer sm:absolute sm:right-2 sm:bottom-2`}
    color: #fff;

    &:hover {
        transform: scale(0.96);
    }
`

export default {
    Content,
    Container,
    Card,
    Title,
    Small,
    Text,
    CardImage,
    Image,
    View,
    Row,
    Link,
    Divider,
    CardBody,
    SmallDetail,
    ImageContainer
}

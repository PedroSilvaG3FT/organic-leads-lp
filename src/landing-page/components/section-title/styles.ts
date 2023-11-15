import styled from 'styled-components'
import { rgba } from 'polished'
import tw from 'twin.macro'
import { fadeIn } from '@/styles/animation'

export type ShadowModeType = 'primary' | 'secondary'

const Container = styled.section`
    ${tw`flex justify-center items-center relative font-semibold`}
`

interface IShadowTitleProps {
    mode: ShadowModeType
}
const ShadowTitle = styled.h1.attrs(fadeIn.down)<IShadowTitleProps>`
    ${tw`absolute bottom-0.5 z-[0] text-xl text-[4.063rem] whitespace-nowrap select-none sm:text-lg`}
    color: ${({ theme, mode }) => {
        const colors = {
            primary: theme.colors.bgSecondary,
            secondary: theme.colors.bgPrimary
        }

        return rgba(colors[mode], 0.28)
    }};
`

const Title = styled.h2.attrs(fadeIn.down)`
    ${tw`text-xl z-[1] select-none text-center relative sm:text-[1.2rem] z-[0]`}
    color: ${({ theme }) => theme.colors.primary};

    &::after {
        content: '';
        filter: blur(8px);
        ${tw`absolute top-6 sm:top-2 inset-x-0 -left-4 bottom-0 h-2 rounded-full w-[116%] z-[-1]`}
        background: ${({ theme }) => theme.colors.secondary};
    }
`

export default {
    Title,
    Container,
    ShadowTitle
}

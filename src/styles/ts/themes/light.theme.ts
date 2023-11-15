import common from './_common'

const spacing = { ...common.spacing }
const colors = { ...common.colors, text: '#636360' }

const background = {
    bgPrimary: '#F5F5F5',
    bgSecondary: '#FFFFFF'
}

const theme = {
    spacing,
    colors: { ...colors, ...background }
}

export default theme

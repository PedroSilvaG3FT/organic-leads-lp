import React, { useState } from 'react'
import Styles from './styles'
import images from '@/assets/images'
import LPSideMenu from '../side-menu'
import { FaGripLines } from 'react-icons/fa'
import { scrollTo } from '@/functions/scroll-to.function'
import useScrollPosition from '@/hooks/scroll-position.hook'
import { LANDING_PAGE_NAVIGATION } from '@/contants/landing-page.contant'
import { ILandingPageMenuItem } from '@/components/@interface/landing-page-menu.interface'

interface ILPHeaderProps {
    openModal: Function
}

const LPHeader: React.FC<ILPHeaderProps> = props => {
    const { openModal } = props
    const [showSideMenu, setShowSideMenu] = useState(false)

    const items: ILandingPageMenuItem[] = [
        {
            icon: <></>,
            title: 'Topo',
            id: LANDING_PAGE_NAVIGATION.top
        },
        {
            icon: <></>,
            title: 'Nosso time',
            id: LANDING_PAGE_NAVIGATION.team
        },
        {
            icon: <></>,
            title: 'Sobre nós',
            id: LANDING_PAGE_NAVIGATION.about
        },
        {
            icon: <></>,
            title: 'Metodologia',
            id: LANDING_PAGE_NAVIGATION.methodology
        },
        {
            icon: <></>,
            title: 'Fizemos a diferença',
            id: LANDING_PAGE_NAVIGATION.cases
        },
        {
            icon: <></>,
            title: 'Robôs/Orgânico',
            id: LANDING_PAGE_NAVIGATION.capture
        },
        {
            icon: <></>,
            title: 'FAQs',
            id: LANDING_PAGE_NAVIGATION.faq
        },
        {
            icon: <></>,
            title: 'Redes sociais',
            id: LANDING_PAGE_NAVIGATION.socialMedia
        }
    ]

    const toggleSideMenuOpen = () => setShowSideMenu(!showSideMenu)

    const handleClickLogo = () => scrollTo(LANDING_PAGE_NAVIGATION.top)

    const handleClickItem = (item: ILandingPageMenuItem) => {
        if (item.action) item.action()
        else if (item.id) scrollTo(item.id)

        if (showSideMenu) toggleSideMenuOpen()
    }

    return (
        <>
            <Styles.Header>
                <Styles.Container>
                    <Styles.Image
                        src={images.LogoGreen}
                        onClick={handleClickLogo}
                    />

                    <Styles.Group>
                        {items.map((item, index) => (
                            <Styles.Link
                                key={index}
                                onClick={() => handleClickItem(item)}
                            >
                                {item.title}
                            </Styles.Link>
                        ))}
                    </Styles.Group>

                    <Styles.Button onClick={() => toggleSideMenuOpen()}>
                        <FaGripLines />
                    </Styles.Button>
                </Styles.Container>
            </Styles.Header>

            <LPSideMenu
                items={items}
                show={showSideMenu}
                onClose={() => setShowSideMenu(false)}
                onSelect={item => handleClickItem(item)}
            />
        </>
    )
}

export default LPHeader

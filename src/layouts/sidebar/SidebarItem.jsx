import React from 'react'
import { any, arrayOf, func, string } from 'prop-types'
import { Column, Row } from 'simple-flexbox'
import { createUseStyles, useTheme } from 'react-jss'
import { useSidebar } from '../../context/SidebarContext'
// import theme from '../resources/theme'

const useStyles = createUseStyles({
    activeContainer: {
        backgroundColor: ({ theme }) => theme.color.paleBlueTransparent,
    },
    container: {
        display: 'flex',
        height: 56,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: ({ theme }) => theme.color.paleBlueTransparent,
        },
        paddingLeft: 32,
        transition: 'all 0.2s ease-in-out',
    },
    leftBar: {
        borderLeft: ({ theme }) => `3px solid ${theme.color.darkGrayishBlue}`,
    },
    title: {
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: ({ theme, isSelected }) =>
            isSelected ? theme.color.paleBlue : theme.color.grayishBlue,
        marginLeft: 24,
    },
})

const SidebarItem = ({
    children,
    icon: Icon,
    id,
    onClick,
    title,
    items = [],
}) => {
    const theme = useTheme()
    const { isSelected, onItemClick, expanded } = useSidebar({
        item: id,
        items,
    })
    const classes = useStyles({ theme, isSelected })
    const columnClass = isSelected ? classes.leftBar : ''
    const containerClass = [
        classes.container,
        isSelected && classes.activeContainer,
    ].join(' ')
    const iconColor = isSelected
        ? theme.color.paleBlue
        : theme.color.grayishBlue2

    const onClicked = () => {
        if (onClick) {
            onClick(e)
        }
        onItemClick()
    }

    return (
        <Column key={id} className={columnClass}>
            <Row
                vertical="center"
                onClick={onClicked}
                className={containerClass}
            >
                <Icon color={iconColor} opacity={!isSelected && '0.4'} />
                <span className={classes.title}>{title}</span>
            </Row>
        </Column>
    )
}

SidebarItem.defaultProps = {}

SidebarItem.protoTypes = {
    children: any,
    icon: func,
    id: string,
    onClick: func,
    items: arrayOf(string),
    title: string,
}

export default SidebarItem

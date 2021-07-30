import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'
import { Column, Row } from 'simple-flexbox'
import SidebarComponent from '../layouts/sidebar/Sidebar'
import SidebarContext from '../layouts/sidebar/SidebarContext'
import Nav from '../layouts/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import URL from '../resources/url'
import StoreList from '../pages/store/List/StoreList'
import StoreForm from '../pages/store/Form/StoreForm'
import DorayakiList from '../pages/dorayaki/DorayakiList'
import DorayakiForm from '../pages/dorayaki/DorayakiForm'

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850,
    },
    mainBlock: {
        marginLeft: 255,
        padding: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0,
        },
    },
    contentBlock: {
        marginTop: 54,
        // height: '100%',
        // minHeight: '100vh',
        // boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
    },
})

const Main = () => {
    const theme = useTheme()
    const classes = useStyles(theme)

    return (
        <SidebarContext>
            <Row className={classes.container}>
                <SidebarComponent />
                <Column flexGrow={1} className={classes.mainBlock}>
                    <Nav />
                    <div className={classes.contentBlock}>
                        <Switch>
                            <Route
                                exact
                                path={URL.dashboard}
                                render={() => <div>Dashboard</div>}
                            />
                            <Route
                                exact
                                path={'/stores'}
                                // render={() => <div>Dashboard</div>}
                                component={StoreList}
                            />
                            <Route
                                exact
                                path={URL.variant}
                                component={DorayakiList}
                            />
                            <Route
                                exact
                                path={'/stocks/:id'}
                                component={StoreForm}
                            />
                            <Route
                                exact
                                path={'/variant/create'}
                                component={DorayakiForm}
                            />
                            <Redirect to={URL.store} />
                        </Switch>
                    </div>
                </Column>
            </Row>
        </SidebarContext>
    )
}

export default Main

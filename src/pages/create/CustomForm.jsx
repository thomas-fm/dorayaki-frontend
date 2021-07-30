import React from 'react'
import { AppBar, Tabs, Box, Typography, Tab } from '@material-ui/core'
import FormDorayaki from './DorayakiForm'
import FormStore from './StoreForm'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const Forms = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div style={{ width: '100%' }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label="Tambah Dorayaki" {...a11yProps(0)} />
                    <Tab label="Tambah Toko" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <FormDorayaki />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FormStore />
            </TabPanel>
        </div>
    )
}
export default Forms

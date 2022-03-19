import React from "react";
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import styles from '../Header/styles.module.css'

const Header = ( { setCoordinates, onLoad, onPlaceChanged }) => {
    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                <Typography variant="h5" className={styles.title}>
                    Travel Advisor
                </Typography>
                <Box className={styles.searchBox}>
                    <Typography variant="h6" className={styles.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={styles.searchDiv}>
                            <div>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..."/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
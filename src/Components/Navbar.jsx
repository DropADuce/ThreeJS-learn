import React from 'react';
import {AppBar, Box, styled, Toolbar, Typography} from "@mui/material";
import StyledLink from "../styles/StyledLink";

const StyledNavbar = styled(AppBar)`
  background-color: #282a36;
  color: #f8f8f2;
`

const Navbar = ({isMain}) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <StyledNavbar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {isMain ? 'Главная станица моего проекта'
                            : <StyledLink to={'/'}>
                                На главную
                            </StyledLink>}
                    </Typography>
                </Toolbar>
            </StyledNavbar>
        </Box>
    );
};

export default Navbar;
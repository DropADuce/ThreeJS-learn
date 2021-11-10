import React from 'react';
import {AppBar, Box, Collapse, IconButton, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import StyledLink from "../styles/StyledLink";
import SideNavPannel from "./SideNavPannel";

const StyledNavbar = styled(AppBar)`
  background-color: #282a36;
  color: #f8f8f2;

  & span {
    cursor: default;
  }
`

const Navbar = ({isMain, openNav, setOpenNav}) => {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <StyledNavbar position="static">
                    <Toolbar>
                        <IconButton size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setOpenNav(prev => ({
                                            ...prev, openNav: !prev.openNav
                                        }))
                                    }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {isMain ? <span>Главная станица моего проекта</span>
                                : <StyledLink to={'/'}>
                                    На главную
                                </StyledLink>}
                        </Typography>
                    </Toolbar>
                </StyledNavbar>
            </Box>
    <Collapse in={openNav}>
        <SideNavPannel />
    </Collapse>
</div>
)
    ;
};

export default Navbar;
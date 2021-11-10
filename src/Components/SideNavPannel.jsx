import React from 'react';
import {List, ListItem, styled} from "@mui/material";
import StyledLink from "./Styled/StyledLink";
import {routes} from "../Routes/Routes";

const StyledList = styled(List)`
  background-color: #282a36;
  color: #f8f8f2;
  max-width: 300px;
  position: absolute;
  z-index: 999;
`

const SideNavPannel = () => {
    return (
        <StyledList component="nav" aria-label="nav-drop-down">
            {routes.filter(r => !r.isMain).map(r => (
                <StyledLink to={r.path}>
                    <ListItem button key={r.path}>
                        {r.name}
                    </ListItem>
                </StyledLink>
            ))}
        </StyledList>
    );
};

export default SideNavPannel;
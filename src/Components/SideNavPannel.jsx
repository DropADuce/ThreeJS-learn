import React from 'react';
import {List, ListItem, styled} from "@mui/material";
import StyledLink from "../styles/StyledLink";
import {routes} from "../Routes/Routes";

const StyledList = styled(List)`
  background-color: #282a36;
  color: #f8f8f2;
  max-width: 300px;
  position: absolute;
`

const SideNavPannel = () => {
    return (
        <StyledList component="nav" aria-label="mailbox folders">
            {routes.filter(r => !r.isMain).map(r => (
                <ListItem button key={r.path}>
                    <StyledLink to={r.path}>{r.name}</StyledLink>
                </ListItem>
            ))}
        </StyledList>
    );
};

export default SideNavPannel;
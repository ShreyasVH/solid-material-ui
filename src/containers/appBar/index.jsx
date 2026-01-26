import MenuIcon from "@suid/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItem,
    ListItemText
} from "@suid/material";
import { createSignal } from "solid-js";

function AppBarComponent() {
    const [ open, setOpen ] = createSignal(false);

    const toggleDrawer = () => setOpen(!open())

    const closeDrawer = () => setOpen(false)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer open={open()} onClose={closeDrawer}>
                    <List sx={{width: 256}}>
                        <ListItemButton>
                            <ListItem>
                                <ListItemText>Action 1</ListItemText>
                            </ListItem>
                        </ListItemButton>

                        <ListItemButton>
                            <ListItem>
                                <ListItemText>Action 2</ListItemText>
                            </ListItem>
                        </ListItemButton>
                    </List>
                </Drawer>
            </Box>
        </>
    )
}

export default AppBarComponent

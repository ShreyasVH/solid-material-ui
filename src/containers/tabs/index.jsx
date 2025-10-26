import { BottomNavigation, BottomNavigationAction, Box } from "@suid/material"
import { createSignal } from "solid-js";
import Buttons from "../buttons";

export default function Tab () {
    const [value, setValue] = createSignal(0);

    return (
        <div>
            <Box>
                <BottomNavigation
                    showLabels
                    value={value()}
                    onChange={(event, newValue) => {
                        console.log(newValue);
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Buttons" />
                    <BottomNavigationAction label="Avatars" />
                    <BottomNavigationAction label="Checkboxes" />
                    <BottomNavigationAction label="Table" />
                </BottomNavigation>

                <Box>
                    {value() === 0 && <div><Buttons /></div>}
                    {value() === 1 && <div>Avatars</div>}
                    {value() === 2 && <div>Checkboxes</div>}
                    {value() === 3 && <div>Table</div>}
                </Box>
            </Box>
        </div>
    );
}
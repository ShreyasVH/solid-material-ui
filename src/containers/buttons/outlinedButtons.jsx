import { Button, Stack } from "@suid/material";

export default function OutlinedButtons () {
    return (
        <div>
            <h2>
                Outlined:
            </h2>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
                <Button variant="outlined">
                    Button
                </Button>

                <Button variant="outlined" color="secondary">
                    Button
                </Button>

                <Button variant="outlined" color="success">
                    Button
                </Button>

                <Button variant="outlined" color="error">
                    Button
                </Button>

                <Button variant="outlined" color="warning">
                    Button
                </Button>

                <Button variant="outlined" color="info">
                    Button
                </Button>

                <Button variant="outlined" disabled>
                    Button
                </Button>
            </Stack>
        </div>
    );
}
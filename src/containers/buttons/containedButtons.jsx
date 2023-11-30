import { Button, Stack } from "@suid/material";

export default function ContainedButtons () {
    return (
        <div>
            <h2>
                Contained:
            </h2>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
                <Button variant="contained">
                    Button
                </Button>

                <Button variant="contained" color="secondary">
                    Button
                </Button>

                <Button variant="contained" color="success">
                    Button
                </Button>

                <Button variant="contained" color="error">
                    Button
                </Button>

                <Button variant="contained" color="warning">
                    Button
                </Button>

                <Button variant="contained" color="info">
                    Button
                </Button>

                <Button variant="contained" disabled>
                    Button
                </Button>
            </Stack>
        </div>
    );
}
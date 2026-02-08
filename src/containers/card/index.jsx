import { Card, CardContent, CardActions, Typography, Button } from "@suid/material";

export default function CardComponent () {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography variant="h5" component="h5">
                    Basic Card
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    SUID Material
                </Typography>

                <Typography variant="body2">
                    This is a simple card built using SUID (Material UI for SolidJS).
                    It follows the Basic Card pattern.
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
    );
}
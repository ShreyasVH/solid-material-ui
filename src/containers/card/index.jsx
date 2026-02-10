import { Card, CardContent, CardActions, Typography, Button, Grid } from "@suid/material";

export default function CardComponent () {
    return (
        <>
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

            <br />

            <Card sx={{ maxWidth: 300, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant="h5" component="h5">
                        Jack Kallis
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        South Africa
                    </Typography>

                    <img src={'https://res.cloudinary.com/dyoxubvbg/image/upload/v1577106216/artists/default_m.jpg'} />

                    <Typography variant="body2">
                        <Grid container sx={{textAlign: 'left'}}>
                            <Grid item lg={6}>
                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Innings:</strong>
                                    25
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Runs:</strong>
                                    25786
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Balls:</strong>
                                    25786
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Average:</strong>
                                    45.46
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Not Outs:</strong>
                                    72
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Highest:</strong>
                                    172
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>50/100:</strong>
                                    25/10
                                </Typography>
                            </Grid>

                            <Grid item lg={6}>
                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Catches:</strong>
                                    123
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Wickets:</strong>
                                    123
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Balls:</strong>
                                    12302
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Runs:</strong>
                                    12302
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Fifers:</strong>
                                    12
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>Economy:</strong>
                                    7.85
                                </Typography>

                                <Typography variant={'h7'} sx={{display: 'block'}}>
                                    <strong>DOB:</strong>
                                    24/01/1967
                                </Typography>
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
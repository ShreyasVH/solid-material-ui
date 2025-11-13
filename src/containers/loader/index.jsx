import { Button, Dialog, CircularProgress } from "@suid/material";
import { createSignal } from "solid-js";

export default function LoaderComponent () {
    const [ visible, setVisible ] = createSignal(false);

    window.addEventListener('show-loader', function(event) {
        setVisible(true);
    });

    window.addEventListener('hide-loader', function(event) {
        setVisible(false);
    });

    const showLoader = (event) => {
        event.preventDefault();

        const myEvent = new CustomEvent('show-loader', {});
        window.dispatchEvent(myEvent);
    };

    const hideLoader = (event) => {
        event.preventDefault();

        const myEvent = new CustomEvent('hide-loader', {});
        window.dispatchEvent(myEvent);
    };

    return (
        <div>
            <Button variant="contained" onClick={showLoader}>
                Show Loader
            </Button>

            {
                visible() && <div onClick={hideLoader}>
                    <Dialog open={true} sx={{ "& .MuiDialog-paper": {
                            backgroundColor: "transparent",
                            boxShadow: "none"
                        } }}>
                        <CircularProgress />
                    </Dialog>
                </div>
            }
        </div>
    );
}
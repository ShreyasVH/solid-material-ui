import { Button, Alert } from "@suid/material";
import IconButton from "@suid/material/IconButton";
import CloseIcon from "@suid/icons-material/Close";
import { createSignal, onMount, onCleanup } from "solid-js";

export default function SnackbarComponent (props) {
    const timeOut = props.hasOwnProperty('timeOut') ? props.timeOut : 5000;
    const [ visible, setVisible ] = createSignal(false);
    const [ message, setMessage ] = createSignal('');
    const [ type, setType ] = createSignal('');
    let timer;

    const handleShowSnackbar = (event) => {
        setMessage(event.detail.message);
        setType(event.detail.type);
        setVisible(true);

        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }

        timer = setTimeout(() => {
            hideSnackbar();
        }, timeOut);
    };

    const handleHideSnackbar = () => {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }

        setVisible(false);
    };

    onMount(() => {
        window.addEventListener('show-snackbar', handleShowSnackbar);
        window.addEventListener('hide-snackbar', handleHideSnackbar);
    });

    onCleanup(() => {
        window.removeEventListener('show-snackbar', handleShowSnackbar);
        window.removeEventListener('hide-snackbar', handleHideSnackbar);
    });

    const showSnackbar = (event, data) => {
        event.preventDefault();

        const myEvent = new CustomEvent('show-snackbar', { detail: { message: data.message, type: data.type }});
        window.dispatchEvent(myEvent);
    };

    const hideSnackbar = () => {
        const myEvent = new CustomEvent('hide-snackbar', {});
        window.dispatchEvent(myEvent);
    };

    return (
        <div>
            <Button variant="contained" onClick={() => showSnackbar(event, { message: 'Success', type: 'success' })}>
                Show Success
            </Button>
            &nbsp;
            <Button variant="contained" onClick={() => showSnackbar(event, { message: 'Error', type: 'error' })}>
                Show Error
            </Button>
            &nbsp;
            <Button variant="contained" onClick={() => showSnackbar(event, { message: 'Info', type: 'info' })}>
                Show Info
            </Button>
            &nbsp;
            <Button variant="contained" onClick={() => showSnackbar(event, { message: 'Warning', type: 'warning' })}>
                Show Warning
            </Button>

            {
                visible() && <div
                    style={{
                        position: "fixed",
                        bottom: "24px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        "z-index": 2000,
                    }}
                >
                    <Alert severity={type()} action={
                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={hideSnackbar}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }>
                        {message()}
                    </Alert>
                </div>
            }
        </div>
    );
}
import TextButtons from './textButtons';
import ContainedButtons from "./containedButtons";
import OutlinedButtons from "./outlinedButtons";
import IconButtons from "./iconButtons";

export default function Buttons () {
    return (
        <div>
            <TextButtons />

            <ContainedButtons />

            <OutlinedButtons />

            <IconButtons />
        </div>
    );
}
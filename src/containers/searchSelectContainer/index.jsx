import SearchSelect from '../../components/searchSelect.jsx';
import { createSignal } from 'solid-js';

export default function SearchSelectContainer() {
    const [selectedItem, setSelectedItem] = createSignal('');

    const handleSelect = (event, item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <SearchSelect onSelect={handleSelect} />

            {selectedItem()}
        </>
    )
}

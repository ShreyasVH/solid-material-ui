import { Table, TableHead, TableBody, TableRow, TableCell } from "@suid/material"

export default function TableComponent () {
    const columns = [
        'Country',
        'Capital',
        'Currency',
        'Continent'
    ];

    const data = [
        {
            country: 'India',
            capital: 'New Delhi',
            currency: 'Rupee',
            continent: 'Asia'
        },
        {
            country: 'United Kingdom',
            capital: 'London',
            currency: 'Pound',
            continent: 'Europe'
        }
    ];

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell sx={{'fontWeight': '600'}}>
                                {column}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map(row => (
                        <TableRow>
                            {columns.map(column => (
                                <TableCell>
                                    {row[column.toLowerCase()]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
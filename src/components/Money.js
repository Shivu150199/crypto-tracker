import React, { useEffect, useState } from 'react';
import TableRow from './Tablerow';
import '../styles/style.css'; // Import the CSS file

const Money = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th> {/* Corrected class name */}
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <TableRow key={index} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Money;

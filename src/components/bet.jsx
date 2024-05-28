import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

const bet = () => {
    const [rows, setRows] = useState([{ id: 1, combination: '', amount: '', time: '2pm', rambolito: false }]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [rowId, setRowId] = useState(2);

    useEffect(() => {
        calculateTotal();
    }, [rows]);

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const addRow = () => {
        setRows([...rows, { id: rowId, combination: '', amount: '', time: '2pm', rambolito: false }]);
        setRowId(rowId + 1);
    };

    const removeRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const handleReturn = () => {
        // Handle return action (e.g., navigate to another page)
        alert('Return button clicked');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (e.g., collect data and send to server)
        alert('Form submitted');
    };

    const calculateTotal = () => {
        const total = rows.reduce((sum, row) => sum + (parseFloat(row.amount) || 0), 0);
        setTotalAmount(total);
    };

    const checkFields = () => {
        let allFieldsFilled = true;

        rows.forEach((row) => {
            if (!row.combination.trim() || row.combination.length !== 3 || !row.amount.trim()) {
                allFieldsFilled = false;
            }
        });

        return allFieldsFilled;
    };

    const generateCombinations = (index) => {
        const combination = rows[index].combination;
        if (combination.length !== 3) {
            alert("Please enter exactly 3 numbers for the combination.");
            return;
        }

        const updatedRows = [...rows];
        updatedRows[index].rambolito = !updatedRows[index].rambolito;
        setRows(updatedRows);

        if (updatedRows[index].rambolito) {
            const permutations = getPermutations(combination);
            sendPermutationsToSystem(permutations);
        } else {
            console.log('Rambolito canceled for combination:', combination);
        }
    };

    const getPermutations = (input) => {
        if (input.length <= 1) {
            return [input];
        }

        const permutations = [];
        const chars = input.split('');

        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const remainingChars = chars.slice(0, i).concat(chars.slice(i + 1)).join('');
            const remainingPermutations = getPermutations(remainingChars);

            for (const permutation of remainingPermutations) {
                permutations.push(char + permutation);
            }
        }

        return Array.from(new Set(permutations));
    };

    const sendPermutationsToSystem = (permutations) => {
        // Implement the logic to send permutations to the system
        console.log('Sending permutations to the system:', permutations);
        // For example, send an AJAX request to your server with the permutations data
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <Banner />
            <div className="form-container">
                <form id="data-form" onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Combination</th>
                                <th>Amount</th>
                                <th>Time</th>
                                <th>Rambolito</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="form-rows">
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="combination[]"
                                            placeholder="Enter combination"
                                            maxLength={3}
                                            value={row.combination}
                                            onChange={(e) => handleInputChange(index, 'combination', e.target.value)}
                                            onInput={checkFields}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="amount[]"
                                            placeholder="Enter amount"
                                            value={row.amount}
                                            onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                                            onInput={() => { checkFields(); calculateTotal(); }}
                                        />
                                    </td>
                                    <td>
                                        <select
                                            name="time[]"
                                            value={row.time}
                                            onChange={(e) => handleInputChange(index, 'time', e.target.value)}
                                        >
                                            <option value="2pm">2pm</option>
                                            <option value="5pm">5pm</option>
                                            <option value="9pm">9pm</option>
                                        </select>
                                    </td>
                                    <td>
                                        <span className="rambolito-check">{row.rambolito ? '✔️' : ''}</span>
                                        <button type="button" onClick={() => generateCombinations(index)}>
                                            Rambolito
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={addRow}>
                                            Add new
                                        </button>
                                        <button type="button" onClick={() => removeRow(index)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total-amount" id="total-amount">
                        Total Amount: {totalAmount}
                    </div>
                    <div className="form-buttons">
                        <button type="button" onClick={handleReturn}>
                            Return
                        </button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default bet;

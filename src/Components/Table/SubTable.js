import './SubTable.css'
const SubTable = () => {
    return ( 
        <div className="subtable">
            <table cellSpacing="0">
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>account Number</th>
                        <th>External  Reference</th>
                        <th>Account Balance </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test Ventures/RASHEED</td>
                        <td>80168688256</td>
                        <td>AC_123456</td>
                        <td>N23,000.00</td>
                    </tr>
                    <tr>
                        <td>Test Ventures/RASHEED</td>
                        <td>80168688256</td>
                        <td>AC_123456</td>
                        <td>N23,000.00</td>
                    </tr>
                    <tr>
                        <td>Test Ventures/RASHEED</td>
                        <td>80168688256</td>
                        <td>AC_123456</td>
                        <td>N23,000.00</td>
                    </tr>
                    <tr>
                        <td>Test Ventures/RASHEED</td>
                        <td>80168688256</td>
                        <td>AC_123456</td>
                        <td>N23,000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
 
export default SubTable;
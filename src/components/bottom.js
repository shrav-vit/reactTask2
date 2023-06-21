import { Button } from "./button";

export function Bottom() {
    return (
        <div id="bottom">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="4" align="right">
                            <Button val="Delete" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button val="7" />
                        </td>
                        <td>
                            <Button val="8" />
                        </td>
                        <td>
                            <Button val="9" />
                        </td>
                        <td>
                            <Button val="/" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button val="4" />
                        </td>
                        <td>
                            <Button val="5" />
                        </td>
                        <td>
                            <Button val="6" />
                        </td>
                        <td>
                            <Button val="*" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button val="1" />
                        </td>
                        <td>
                            <Button val="2" />
                        </td>
                        <td>
                            <Button val="3" />
                        </td>
                        <td>
                            <Button val="-" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button val="0" />
                        </td>
                        <td>
                            <Button val="." />
                        </td>
                        <td>
                            <Button val="=" />
                        </td>
                        <td>
                            <Button val="+" />
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}


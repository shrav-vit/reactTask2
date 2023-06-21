export function Button(props) {
    const checkVal = event => {
        const val = event.target.value;
        let input = document.getElementById('ip')
        let output = document.getElementById('op')
        if (output.value != "") {
            output.value = ""
        }
        if (val == "=") {
            const expression = input.value;
            input.value = ""
            try {
                if (eval(expression)) {
                    document.getElementById('op').value = eval(expression);
                }
            } catch (err) {
                console.log(err);
            }
        } else if (val == "Delete") {
            input.value = input.value.slice(0, -1);
        } else {
            input.value += val
        }
    }
    return (
        <input type="button" value={props.val} onClick={checkVal} />
    )
}
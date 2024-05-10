
export const calculate = async (sign: string, a: number, b: number): Promise<number> => {
    const isDev = import.meta.env.DEV

    return isDev ? Promise.resolve(calculateLocal(sign, a, b)) : await calculateFromApi(sign, a, b);
}

const calculateFromApi = async (sign: string, firstNumber: number, secondNumber: number): Promise<number> => {
    let url: string;

    switch (sign) {
        case '+':
            url = '/api/add';
            break;
        case '-':
            url = '/api/subtract'
            break;
        case 'X':
            url = '/api/multiply'
            break;
        default:
            url = '/api/divide'
            break;
    }

    const requetBody = {
        firstNumber,
        secondNumber
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requetBody)
    })

    if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
    }

    const data = await response.json();

    return data.result
}


const calculateLocal = (sign: string, a: number, b: number): number => {
    if (sign === '+') {
        return a + b;
    }

    else if (sign === '-') {
        return a - b;
    }

    else if (sign === 'X') {
        return a * b;
    }

    else {
        return a / b
    }
}


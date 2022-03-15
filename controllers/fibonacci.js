export const Fibonacci = async (req, res) => {
    const { n } = req.body;
    if (!n) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: 'n is required'
        })
    }
    const result = await fibonacci(n);
    res.status(200).json({
        status: 200,
        code: '200',
        data: { "result": result },
        message: 'success'
    });
}

function fibonacci(n) {
    let a = 0, b = 1, temp, result = [];
    for (let i = 0; i < n; i++) {
        temp = a;
        a = a + b;
        b = temp;
        result.push(b);
    }

    return result.toString().replace(/,/g, ' ');
}

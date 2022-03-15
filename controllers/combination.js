export const Combination = async (req, res) => {
    const { n, r } = req.body;
    if (!n || !r) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: 'n or r are required'
        })
    }
    const result = await combination(n, r);
    res.status(200).json({
        status: 200,
        code: '200',
        data: { "result": result },
        message: 'success'
    });
}

function combination(n, r) {

    if (n == r || r == 0) {
        return 1;
    }
    else {
        r = (r < n - r) ? n - r : r;
        console.log(r + " nilai r")
        return combRange(r + 1, n) / combRange(1, n - r);
    }

}

function combRange(a, b) {
    var prd = a, i = a;

    while (i++ < b) {
        prd *= i;
    }
    return prd;
}
import axios from "axios";

export const getCountry = async (req, res) => {
    try {
        const response = await axios.get('https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json');
        const data = response.data;

        const result = data.map(item => {
            return {
                name: item.name,
                region: item.region,
                timezones: item.timezones
            }
        })

        res.status(200).json({
            status: 200,
            code: '200',
            data: result,
            message: 'success'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: "something when wrong"
        })
    }
}

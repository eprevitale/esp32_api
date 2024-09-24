const getAllSensorData = (req, res) => {
    // req
    const body = req.body;
    print(body);

    // res
    const json = JSON.stringify({
        'received': true,
        'hello': 'world'
    });
    res.status(200).send(json);
}

export default {
    getAllSensorData
}
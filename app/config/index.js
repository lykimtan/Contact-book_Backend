const config = {
    app: {
        port: process.env.PORT || 3000,
        // lấy giá trị từ biến môi trường PORT, nếu không có thì gán giá trị là 3000
    }
};

module.exports = config;
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// สร้าง Express App
const app = express();
const PORT = 3000; // พอร์ตของเซิร์ฟเวอร์

// สร้าง HTTP Server
const server = http.createServer(app);

// สร้าง Socket.IO Server
const io = new Server(server);

// จัดการการเชื่อมต่อของไคลเอนต์
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    // รับข้อความจากไคลเอนต์
    socket.on('message', (message) => {
        console.log(`Message from client: ${message}`);
        socket.emit('message', `Echo: ${message}`);
    });

    // เมื่อไคลเอนต์ตัดการเชื่อมต่อ
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

// เส้นทาง HTTP พื้นฐาน
app.get('/', (req, res) => {
    res.send('Socket.IO Server is running!');
});

// เริ่มต้นเซิร์ฟเวอร์
server.listen(PORT, () => {
    console.log(`Server is running on -- http://localhost:${PORT}`);
});

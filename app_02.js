const io = require('socket.io-client');

// เชื่อมต่อไปยัง Socket.IO Server
const socket = io('http://localhost:3000');

// ส่งข้อความเมื่อเชื่อมต่อสำเร็จ
socket.on('connect', () => {
    console.log('Connected to server');
    socket.emit('message', 'Hello from Node.js Client!');
});

// รับข้อความจากเซิร์ฟเวอร์
socket.on('message', (data) => {
    console.log('Message from server:', data);
});

// เมื่อเซิร์ฟเวอร์ตัดการเชื่อมต่อ
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

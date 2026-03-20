# 📊 Nifty 50 Live Dashboard

A real-time Nifty 50 dashboard built using Next.js that displays simulated live market data with auto-refresh and dynamic UI updates.

---

## 📸 Preview
![Dashboard Screenshot](./public/screenshot.png)

---

## 🚀 Live Demo
🔗 https://nifty-50-dashboard-ruby.vercel.app

---

## ✨ Features
- 📈 Live Nifty 50 index display  
- 🔄 Auto-refresh every 5 seconds  
- ⏱ Real-time clock updates  
- 📊 Top 15 stock prices displayed  
- 🟢🔴 Color-coded price indicators (gain/loss)  
- 🎨 Clean and responsive UI  
- ⚡ Deployed on Vercel  

---

## 🛠 Tech Stack
- Frontend: Next.js (React)  
- Backend: Next.js API Routes  
- Deployment: Vercel  

---

## ⚙️ How It Works
- Fetches market data from `/api/market`  
- Data refreshes every 5 seconds using `setInterval`  
- Clock updates every second  
- UI dynamically renders stock prices and highlights changes  

---

## 📁 Project Structure
/app  
  /api/market/route.ts → API for market data  
  /page.tsx → Main dashboard UI  
/public  
  screenshot.png → Dashboard preview image  

---

## ▶️ Run Locally
git clone https://github.com/Bhukyasandhya/nifty-50-dashboard.git  
cd nifty-50-dashboard  
npm install  
npm run dev  

Open: http://localhost:3000

---

## 📌 Notes
- Uses simulated market data  
- Designed to mimic real-time dashboard behavior  

---

## 💡 Future Improvements
- Integrate real stock market API  
- Add charts and graphs  
- Add search and filtering  
- Improve mobile responsiveness  

---

## 👩‍💻 Author
Bhukya Sandhya  

---

## ⭐ Acknowledgement
This project was built as part of an assignment to demonstrate real-time dashboard development using modern web technologies.

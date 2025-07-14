Sure! Here's the complete `README.md` written in the same format you provided:

---

# 📝 PasteVault – A Simple Paste Sharing App

PasteVault is a fast and modern web app to create, view, manage, and share text or code snippets online. Built with React, Vite, Redux, and Tailwind CSS – and deployable on Vercel.

---

## 🚀 Features

* ✅ Create and update text/code pastes
* 🔍 Search pastes by title
* 📋 Copy content to clipboard
* 👀 View-only mode for shared links
* 🔗 Share paste via native share or URL
* 🗑️ Delete single or all pastes
* ☁️ Data stored in Redux + localStorage

---

## 🛠️ Built With

* ⚛️ [React](https://reactjs.org/)
* ⚡ [Vite](https://vitejs.dev/)
* 🎨 [Tailwind CSS](https://tailwindcss.com/)
* 📦 [Redux Toolkit](https://redux-toolkit.js.org/)
* 🔁 [React Router](https://reactrouter.com/)
* 🔔 [react-hot-toast](https://react-hot-toast.com/)

---

## 🧑‍💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/pastevault.git
cd pastevault
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app in your browser.

---

## 🌐 Deployment on Vercel

This project is fully deployable on [Vercel](https://vercel.com/).

### ➕ Add `vercel.json` to support client-side routing:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

Push to GitHub and import the project on Vercel to deploy automatically.

---

## 📁 Folder Structure

```
src/
├── components/         # Reusable UI components
├── pages/              # Page views like Paste and ViewPaste
├── redux/              # Redux slice for managing pastes
├── App.jsx             # App-level routes
├── main.jsx            # Entry point
tailwind.config.js      # Tailwind CSS config
vite.config.js          # Vite config
```

---

## 📸 Screenshots

![Create Paste View](https://github.com/HarshJajaniya/pasteapp/blob/main/1.png)
![Create Paste View](https://github.com/HarshJajaniya/pasteapp/blob/main/2.png)



---

## 💡 Future Enhancements

* 🔐 Authentication for private pastes
* 🧾 Expiry timers for temporary pastes
* 🖍️ Code syntax highlighting
* ☁️ Firebase or Supabase integration

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [React Hot Toast](https://react-hot-toast.com/)

---

Let me know if you want a version with badges or want to auto-generate this as a file inside your project.

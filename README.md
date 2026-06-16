# 🔐 Password Toggle Visibility

A clean login/signup form built with vanilla HTML, CSS, and JavaScript that allows users to show or hide their password by clicking the eye icon.

---

## 📸 Preview

> Open `index.html` in your browser to see the live form.

---

## 🚀 Features

- Toggle password visibility on both **Password** and **Confirm Password** fields
- Eye icon switches between `bi-eye-slash` (hidden) and `bi-eye` (visible)
- Clean dark-themed UI with smooth hover transitions
- Form submission handled with `preventDefault()`
- Fully responsive card layout

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and form elements |
| CSS3 | Styling, layout, dark theme |
| JavaScript (Vanilla) | Password toggle logic and form handling |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Eye / Eye-slash icons |
| [Google Fonts – Inter](https://fonts.google.com/specimen/Inter) | Typography |

---

## 📁 Project Structure

```
password-toggle/
├── index.html   → form structure (email, password, confirm password)
├── style.css    → dark themed styling
├── app.js       → toggle logic + form submit handler
└── README.md    → project documentation
```

---

## ⚙️ How It Works

### 1. HTML
- Password input wrapped in `.input-wrapper` with a `<i>` eye icon inside
- Two separate eye icons with unique ids — `#eye-icon` and `#eye-icon2`

```html
<div class="input-wrapper">
  <input type="password" id="password" />
  <i class="bi bi-eye-slash" id="eye-icon"></i>
</div>
```

### 2. JavaScript — Toggle Logic
When the eye icon is clicked:
- `getAttribute("type")` checks if input is `"password"` or `"text"`
- `setAttribute("type", ...)` switches between them
- `classList.toggle("bi-eye")` swaps the icon

```js
eyeIcon.addEventListener("click", (e) => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  e.target.classList.toggle("bi-eye");
  e.target.classList.toggle("bi-eye-slash");
});
```

### 3. CSS — Dark Theme
- Background: `#1d293d` (dark navy)
- Card: `#62748e` (slate blue)
- Box shadow: soft glow effect using `box-shadow`
- Smooth hover transitions on button and eye icon

---

## 🧠 DOM Concepts Used

| Concept | Where |
|---|---|
| `querySelector` | selecting input fields and icons |
| `addEventListener('click')` | detecting eye icon click |
| `getAttribute / setAttribute` | reading and changing input type |
| `classList.toggle` | swapping eye icon classes |
| `addEventListener('submit')` | preventing default form submission |

---

## 🔧 How to Run

1. Clone or download the repository
2. Make sure all 3 files are in the same folder
3. Open `index.html` in any browser

```bash
git clone https://github.com/Sandeep-Talla-07/password-toggle.git
cd password-toggle
open index.html
```

---

## 📌 Known Improvements

- [ ] Add `bi-eye-slash` toggle alongside `bi-eye` for correct icon swap
- [ ] Add password strength indicator
- [ ] Add form validation (empty fields, password match check)
- [ ] Make it mobile responsive

---

## 👨‍💻 Author

**Rockwell (Sandeep Talla)**
GitHub: [@Sandeep-Talla-07](https://github.com/Sandeep-Talla-07)

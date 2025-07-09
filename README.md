# 🎬 OneMovieSlider

A simple auto-scrolling movie slider built with React.  
It displays movies from a data source, cycles through them every 5 seconds, and includes manual navigation with previous/next buttons.

---

## 🚀 Features

- Auto-play slideshow with 5-second interval  
- Manual navigation using left/right arrows  
- Smooth transitions between slides  
- Fully responsive and styled with CSS  
- Built using functional components and React hooks  

---

## 🛠 Tech Stack

- **React** (Functional Components, Hooks)  
- **CSS** (Custom styling)  
- **react-icons** (For arrow icons)  

---

## ⚙️ How It Works

The component uses two `useEffect` hooks:

1. One to wrap the index if it goes out of bounds (looping).  
2. One to auto-advance the index every 5 seconds.  

Slide behavior is handled with conditional CSS classes:

- `active-slide` – the currently visible slide  
- `last-slide` – the previous slide (for transition effect)  
- `next-slide` – the next slide (off-screen right)  

Buttons with `FaArrowLeft` and `FaArrowRight` icons let users manually navigate through the slides.

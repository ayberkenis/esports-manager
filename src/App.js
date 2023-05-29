import 'tailwindcss/tailwind.css';
import AppRouter from "./Router";
import Home from "./layouts/home";
import Footer from "./layouts/footer";


function App() {
  return (
    <div className="App">
        <AppRouter></AppRouter>
        <Home></Home>
        <Footer></Footer>
    </div>
  );
}

export default App;

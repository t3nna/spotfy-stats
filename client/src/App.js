import './styles/index.scss'
import Login from "./components/Login";
import Footer from "./components/Footer";
import Account from "./components/Account";


const code = new URLSearchParams(window.location.search).get('code')
function App() {
    return (
        <main className={'main'}>
            {
                code? <Account code={code}/> :

                <Login/>}
            <Footer/>
        </main>
    );
}

export default App;

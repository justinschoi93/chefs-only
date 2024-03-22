import reactLogo from '../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'

const Footer = () => {
    return (
        <footer>
            <div className="logos">
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </footer>
    );
}

export default Footer;
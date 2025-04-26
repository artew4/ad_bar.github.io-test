import { Link } from 'react-router-dom';

function Algebra() {
    return (
        <div class="container">
            <h1>Страница по алгебре</h1>
            <div class="buttons">
                <Link to="/">Домой</Link>
            </div>
        </div>
    );
}

export default Algebra;
import "../styles/Home.scss"
import Example from "../components/typical.jsx";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div class="container">

            <div class="social-links">
                <a href="lessons.html" >Родителям (О занятиях)</a>
                <a href="portfolio_artem.html" >Обо мне</a>
            </div>

            <a href="https://docs.google.com/spreadsheets/d/1mQlW1CC0opUDcVStqgjhaQYXxaEzl_Y--YvAM2p8ksk/edit?gid=2071383807#gid=2071383807" target="_blank">
                <img src="../images/photo.jpg" alt="Моё фото" class="profile-photo"></img>
            </a>

        <h1><Example /></h1>

        <hr></hr>
        <div class="buttons">
            <Link to="/algebra">Алгебра (Математика)</Link>
            <Link to="/algebra">Физика</Link>
            <Link to="/algebra">Геометрия</Link>
            <Link to="/algebra">Информатика</Link>
            <Link to="/algebra">Русский язык</Link>
        </div>

        <hr></hr>

        <div class="buttons">
            <a href="https://drive.google.com/drive/folders/1sm6-l75BYi0YjjDguOF9RwStJgrBxhBV?usp=drive_link"
               style={{'background-color': '#F08080'
                }}>Реальные варианты ЕГЭ</a>
            <a href="https://drive.google.com/drive/folders/13gR0CSQt7MvG7Jh7K9xHkPFbGXn8fpwT?usp=drive_linkhttps://drive.google.com/drive/folders/13gR0CSQt7MvG7Jh7K9xHkPFbGXn8fpwT?usp=drive_link"
               style={{'background-color': '#F08080'
                }}>Реальные варианты ОГЭ</a>

            <a href="https://docs.google.com/spreadsheets/u/0/" target="_blank">
            <img src="../images/google-sheets.jpg" alt="Моё фото" class="gsheets-photo"></img></a>
        </div>

        <hr></hr>

        <p>Я преподаю математику и физику онлайн. Помогаю ученикам разобраться в сложных темах, подготовиться к экзаменам и просто полюбить точные науки.</p>
        <p>На моём канале "Level Science" вы найдёте полезные разборы, лайфхаки и объяснения сложных тем простыми словами.</p>
        <a href="lessons.html" class="lessons-link">Подробнее о занятиях</a>

        <a href="https://vk.com/level.science?w=wall-224816033_9" target="_blank" class="lessons-link">
            Комментарии и обратная связь (Vk)</a>
        <div class="social-links">
            <a href="https://www.youtube.com/@Level-science/featured" target="_blank">YouTube</a>
            <a href="https://vk.com/level.science" target="_blank">Вк</a>
            <a href="https://github.com/artew4" target="_blank">GitHub</a>
        </div>



        </div>
    );
}

export default Home;
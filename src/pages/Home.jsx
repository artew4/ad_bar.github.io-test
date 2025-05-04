import "../styles/Home.scss";
import ExampleComponent from "../components/typing.jsx";
import NavigationLinks from "../components/NavigationLinks.jsx";
import ExamLinks from "../components/ExamLinks.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import HeaderMenu from "../components/HeaderMenu.jsx";
import Header from "../components/Header.jsx";
import NewsBlock from "../components/NewsBlock";
import ExamSchedule from "../components/ExamSchedule";
import HolidayCard from "../components/cards/HolidayCard";


function Home() {
  return (
    <div className="container">
      
      <Header/>

      {/* <div className="profile-wrapper">
        <a 
          href="https://docs.google.com/spreadsheets/d/1mQlW1CC0opUDcVStqgjhaQYXxaEzl_Y--YvAM2p8ksk/edit#gid=2071383807" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={`${process.env.PUBLIC_URL}/images/photo.jpg`} 
            alt="Моё фото" 
            className="profile-photo" 
          />
        </a>
      </div> */}
      <div className='cards-grid'>
      <HolidayCard text="С Днём Великой Победы!<br />Помним, гордимся, чтим!" />
      </div>

      <div className="example_wrapper">
        <ExampleComponent />
        
      </div>

      {/* <NavigationLinks /> */}
      <ExamLinks />

      <div className='cards-grid'>
      <ExamSchedule
  text={`26 мая (понедельник) — Информатика

    3 июня (вторник) — Математика

    9 июня (понедельник) — Русский язык
    
    16 июня (понедельник) — физика`}
  exam="OGE 2025"
/>

      <ExamSchedule
        text={`26 мая (понедельник) — Математика

      29 мая (четверг)      — Русский язык

      2 июня (понедельник) — Физика
      
      11 июня (среда) — Информатика`}
        exam='EGE 2025'
      />
      </div>

      <div className="about-section">
        
        <p>
          Я преподаю математику и физику онлайн. Помогаю ученикам разобраться в сложных темах, подготовиться к экзаменам и просто полюбить точные науки.
        </p>
        <p>
          На моём канале "Level Science" вы найдёте полезные разборы, лайфхаки и объяснения сложных тем простыми словами.
        </p>
        <div className="about-links">
          <a href="lessons.html" className="lessons-link">Подробнее о занятиях</a>
          <a href="https://vk.com/level.science?w=wall-224816033_9" target="_blank" rel="noopener noreferrer" className="lessons-link">
            Комментарии и обратная связь (Vk)
          </a>
        </div>
      </div>

      <SocialLinks />

    </div>
  );
}

export default Home;

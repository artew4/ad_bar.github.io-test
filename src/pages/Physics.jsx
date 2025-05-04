import { Link } from 'react-router-dom';
import "../styles/pages/Physics.scss";
import Header from "../components/Header.jsx";

const physicsSections = [
  { title: 'Справочные данные', images: ['phys/1.PNG', 'phys/2.PNG', 'phys/3.PNG'] },
  { title: 'Плотность вещества', images: ['phys/4.PNG', 'phys/5.PNG'] },
  { title: 'Удельные', images: ['phys/6.PNG', 'phys/7.PNG', 'phys/8.PNG'] },
  { title: 'Температура плавления', images: ['phys/9.PNG', 'phys/10.PNG', 'phys/11.PNG'] },
];

function Physics() {
  return (
    <div className="container">
        <Header/>
      {physicsSections.map((section, index) => (
        <div key={index}>
          <h2>{index === 0 ? section.title : <h3>{section.title}</h3>}</h2>
          {section.images.map((img, idx) => (
            <img
              key={idx}
              src={`${process.env.PUBLIC_URL}/images/${img}`}
              alt={`Таблица ${idx + 1}`}
              className="table-img-phys"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Physics;

import { Link } from 'react-router-dom';
import "../styles/pages/Informatics.scss";
import Header from "../components/Header.jsx";
import InfoCard from "../components/InfoCard";
import PythonCard from "../components/PythonCard";
import PythonCardSwitcher from "../components/PythonCardSwitcher";


function Informatics() {
  return (
    <div className="container">
        <Header/>
<h2 data-aos="fade-down">📚 Полезные материалы по программированию</h2>

    <div className="cards-grid">
      <InfoCard 
        icon="🐍" 
        text="Основы Python — мой курс в ВК" 
        link="https://vkvideo.ru/playlist/-224816033_1" 
        animation="fade-right"
      />
      <InfoCard 
        icon="👨‍💻" 
        text="Stepik: “Поколение Python”" 
        link="https://stepik.org/course/58852/info" 
        animation="zoom-in" 
        delay={100}
      />
      <InfoCard 
        icon="🌐" 
        text="Основы HTML и CSS" 
        link="https://basicweb.ru" 
        animation="fade-left" 
        delay={200}
      />
    </div>
    <h2 data-aos="fade-down">📚 Логика</h2>
    <img 
            src={`${process.env.PUBLIC_URL}/images/prog/1.PNG`} 
            alt="Моё фото" 
            className="table-img-inform"
    />
    <PythonCardSwitcher
  title="📌 Перевод систем счисления"
  programs={[
    {
      title: "Классический",
      code: `x = 777  # число, которое переводим
n = 5     # например в пятиричную
result = ''
while x > 0:
    result += str(x % n)
    x = x // n
result = result[::-1]`
    },
    {
      title: "В 12-ую (С учетом 10 = A, 11 = B, итд.)",
      code: `x = 777 # число, которое переводим
n = 12 # например в пятиричную
result = ''
while x > 0 :
    if x%n == 10: result += 'A'
    elif x%n == 11: result += 'B'
    elif x%n == 12: result += 'C'
    else: result += str(x%n)
    x = x//n
result = result[::-1]`,
    },
    {
      title: "Встроенные функции",
      code: `a = bin(x)[2:] # двоичная
b = oct(x)[2:] # восьмеричная
c = int(x)     # десятичная
d = hex(x)[2:] # шестнадцатеричная`,
    },
  ]}
/>
 
    </div>
  );
}

export default Informatics;

 

{/* 

     <PythonCard
  title="Перевод систем счисления"
  code={`a = bin(x)[2:] # двоичная
b = oct(x)[2:] # восьмеричная
c = int(x)     # десятичная
d = hex(x)[2:] # шестнадцатеричная`}
/>

    <PythonCard
  title="Перевод в любую систему счисления до 9-ой"
  code={`x = 777  # число, которое переводим
n = 5     # например в пятиричную
result = ''
while x > 0:
    result += str(x % n)
    x = x // n
result = result[::-1]`}
/>

<PythonCard
  title="Пример перевода в 12-ую (С учетом 10 = A, 11 = B, итд.)"
  code={`x = 777 # число, которое переводим
n = 12 # например в пятиричную
result = ''
while x > 0 :
    if x%n == 10: result += 'A'
    elif x%n == 11: result += 'B'
    elif x%n == 12: result += 'C'
    else: result += str(x%n)
    
    x = x//n
result = result[::-1]`}
/> */}

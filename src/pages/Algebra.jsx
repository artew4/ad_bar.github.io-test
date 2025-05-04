import React, { useState } from 'react';
import '../styles/pages/Algebra.scss';
import { BlockMath, InlineMath } from 'react-katex';
import Header from "../components/Header.jsx";

const formulas = {
  8: (
    <>
      <h3>Теорема Виета</h3>
      <BlockMath math="ax^2 + bx + c = 0" />
      <BlockMath math="x_1 + x_2 = -\frac{b}{a}" />
      <BlockMath math="x_1 \cdot x_2 = \frac{c}{a}" />
      <div className="centered-link">
      <a
        href="https://drive.google.com/drive/folders/1m3G_5car4_EC3Hzt2xCtMKt--WRPzLj3?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="class-materials-link"
    >
        
    Перейти к материалам 8 класса
    </a>
    </div>

    </>
  ),
  9: <p>Здесь появятся формулы 9 класса.</p>,
  10: <p>Здесь появятся формулы 10 класса.</p>,
  11: <p>Здесь появятся формулы 11 класса.</p>,
};

const Algebra = () => {
  const [activeClass, setActiveClass] = useState(null);

  return (
    <div className="container">
        <Header/>
      <h1>Алгебра</h1>
      <div className="cards">
        {[8, 9, 10, 11].map((grade) => (
          <div
            key={grade}
            className="class-card"
            onClick={() => setActiveClass(grade)}
          >
            <h2>{grade} класс</h2>
          </div>
        ))}
      </div>

      {activeClass && (
        <div className="modal-overlay" onClick={() => setActiveClass(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveClass(null)}>×</button>
            {formulas[activeClass]}
          </div>
        </div>
      )}
    </div>
  );
};

export default Algebra;

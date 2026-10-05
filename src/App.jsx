import { useEffect, useState } from 'react';
import { API_URL, guests } from './data';
import './styles.css';

export default function App() {
  const [original, setOriginal] = useState([]);
  const [characters, setCharacters] = useState([]);
  // const [namesLine, setNamesLine] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setOriginal(data.results);
        setCharacters(data.results);
      });
  }, []);

  // ЗАДАЧА: написать 10 функций, по одной на каждую кнопку.
  //
  // Не мутируют: map, filter, slice, concat, join
  // Мутируют:    push, pop, splice, sort, reverse
  //
  // ПРАВИЛО: мутирующие методы вызывать ТОЛЬКО на копии:
  //   const copy = [...characters];
  //   copy.pop();
  //   setCharacters(copy);
  //
  // «Исходных: 20» в шапке не должно меняться никогда.
  // Кнопка «Сбросить» обязана возвращать исходный список.

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Лаборатория методов</h1>

        <span className="header__count">
          Исходных: {original.length} · Сейчас: {characters.length}
        </span>

        <button className="btn btn--reset">Сбросить</button>
      </header>

      <section className="group">
        <h2 className="group__title">Не мутируют</h2>

        <div className="group__buttons">
          <button className="btn">map: КАПСОМ</button>
          <button className="btn">filter: только Alive</button>
          <button className="btn">slice: первые 5</button>
          <button className="btn">concat: +гости</button>
          <button className="btn">join: имена строкой</button>
        </div>
      </section>

      <section className="group">
        <h2 className="group__title">Мутируют (только на копии!)</h2>

        <div className="group__buttons">
          <button className="btn btn--danger">push: добавить гостя</button>
          <button className="btn btn--danger">pop: убрать последнего</button>
          <button className="btn btn--danger">splice: вставить в середину</button>
          <button className="btn btn--danger">sort: по имени</button>
          <button className="btn btn--danger">reverse: наоборот</button>
        </div>
      </section>

      {/* строка из join: <p className="names">{namesLine}</p> */}

      <ul className="list">{/* карточки через .map() */}</ul>
    </div>
  );
}

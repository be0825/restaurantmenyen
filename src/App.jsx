import { Fragment, useState } from "react";
import Menu from "./components/Menu.jsx";
import Card from "./components/Card.jsx";
import styles from "./App.module.css";

const meny = [
  {
    id: 1,
    tittel: "Spaghetti Bolognese",
    pris: "159 kr",
    ingredienser: "Spaghetti, kjøttsaus, parmesan",
    kategori: "Hovedrett",
  },
  {
    id: 2,
    tittel: "Kremet Kyllingsuppe",
    pris: "129 kr",
    ingredienser: "Kylling, fløte, gulrøtter, selleri",
    kategori: "Forrett",
  },
  {
    id: 3,
    tittel: "Margarita Pizza",
    pris: "169 kr",
    ingredienser: "Tomatsaus, mozzarella, basilikum",
    kategori: "Hovedrett",
  },
  {
    id: 4,
    tittel: "Sushi Mix",
    pris: "229 kr",
    ingredienser: "Laks, tunfisk, reker, ris",
    kategori: "Hovedrett",
  },
  {
    id: 5,
    tittel: "Cæsarsalat",
    pris: "139 kr",
    ingredienser: "Romanosalat, kylling, parmesan, dressing",
    kategori: "Forrett",
  },
  {
    id: 6,
    tittel: "Brownie med Is",
    pris: "89 kr",
    ingredienser: "Brownie, vaniljeis, sjokoladesaus",
    kategori: "Dessert",
  },
  {
    id: 7,
    tittel: "Taco Tallerken",
    pris: "199 kr",
    ingredienser: "Kjøttdeig, mais, ost, guacamole",
    kategori: "Hovedrett",
  },
  {
    id: 8,
    tittel: "Pannekaker med Syltetøy",
    pris: "99 kr",
    ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
    kategori: "Dessert",
  },
  {
    id: 9,
    tittel: "Reker med Sitron",
    pris: "149 kr",
    ingredienser: "Reker, sitron, dill, brød",
    kategori: "Forrett",
  },
  {
    id: 10,
    tittel: "Entrecôte med Grønnsaker",
    pris: "289 kr",
    ingredienser: "Entrecôte, asparges, poteter, peppersaus",
    kategori: "Hovedrett",
  },
];

function App() {
  return (
    <>
      <div className={styles.dishGrid}>
        {meny.map((dish) => {
          return <Menu data={dish} key={dish.id}></Menu>;
        })}
      </div>
      <div className={styles.dishCard}>
        {meny.map((dish) => {
          return <Card data={dish} key={dish.id}></Card>;
        })}
      </div>
    </>
  );
}

export default App;

/*     Hovedkomponenten (App): Denne komponenten importerer menydata og sender dem videre som props til en underkomponent.
    Listekomponent (Menu): Denne komponenten mottar matrettene som props og viser dem i en liste.
    Kortkomponent (Dish): Denne komponenten mottar data for én matrett som props og viser dem i et kortformat. Bruk feltene for tittel, pris, ingredienser og kategori i visningen.

 */

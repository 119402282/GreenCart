import { useEffect, useState } from "react";
import { Badge } from "~Badge";
import { Main } from "~Main";
import { Nav } from "~Nav";
import { useStorage } from "@plasmohq/storage/hook"


import * as style from "./style.module.css"



function IndexPopup() {

  const [greenCartData, setGreenCartData] = useStorage( "greenCartData", {
    userId: "",
    name: "",
    token: "",
    preference: "",
    stats: [
      {
        name: "tree",
        emissions: {
          CO2: 0.1,
          price: 0.2,
          text: "Trees",
          value: 0,
        },
      },
      {
        name: "solar",
        emissions: {
          CO2: 0.1,
          price: 0.2,
          text: "kWh",
          value: 12324,
        },
      },
      {
        name: "wind",
        emissions: {
          CO2: 0.1,
          price: 0.2,
          text: "kWh",
          value: 12324,
        },
      },
      {
        name: "methane",
        emissions: {
          CO2: 0.1,
          price: 0.2,
          text: "Kgs",
          value: 12324,
        },
      },
      {
        name: "carbon",
        emissions: {
          CO2: 0.1,
          price: 0.2,
          text: "Kgs",
          value: 12324,
        },
      },
    ],
  });

  useEffect(() => {
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "true";
    document.head.appendChild(preconnect2);

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap";
    document.head.appendChild(font);
  }, []);

  

  return (
    <div style={{
      width: 400,
      display: "flex",
      flexDirection: "column",
      padding: 0
    }}>
      <Nav />
      <Main onClick={() => {
        // greenCartData.stats[0].emissions.value += 1;
        // greenCartData.stats[0].emissions.CO2 += 0.1;
        // greenCartData.stats[0].emissions.price += 0.2;
        // setGreenCartData({...greenCartData});
      }} offsetKg={greenCartData.stats.reduce(
        (acc, curr) => acc + curr.emissions.CO2, 0
      )} totalEuro={
        greenCartData.stats.reduce(
          (acc, curr) => acc + curr.emissions.price, 0
        )
      } />
      <div className={style.badges}>
        {greenCartData.stats.map((badge) => (
          <Badge name={badge.name} emissions={badge.emissions} key={badge.name}></Badge>
        ))}
        <a href="https://www.eic.co.uk/4-types-of-carbon-offset-projects/" target={"_blank"}>
          <div 
            className={style.badge} style={{
            background: "#D9F7EA",
            color: "#007840",
            fontSize: "2.75rem",
            fontWeight: 400,
            inlineSize: "10rem",
            fontFamily: "Varela Round",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "10rem",
            
          }} >
            <h2 style={{
              fontWeight: 600,
              fontSize: "2.75rem",
              height: "5rem",
              lineHeight: "2.75rem",
              verticalAlign: "middle",
              textAlign: "center",
              marginTop: "2.25rem",
              marginBottom: "0",
              }}>More Info</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default IndexPopup;

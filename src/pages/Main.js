import "../assets/style/Main.scss";
import { useState } from "react";

const Main = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState();

  const [error, setError] = useState("");

  const calculator = (event) => {
    setError();
    setResult();
    event.preventDefault();
    if (weight && height) {
      if (!isNaN(weight) && !isNaN(height)) {
        if (weight.length < 4 && !height.length < 4) {
          let meters = height / 100;
          let imc = weight / meters ** 2;
          setResult(imc);
        } else {
          setError("données incorrect !");
        }
      } else {
        setError("Veuillez donner des chiffres !");
      }
    } else {
      setError("veuillez remplir tous les champs !");
    }
  };

  return (
    <div className="main">
      <div className="main-items">
        <div className="main-items-header">
          <h2> COMMENT CALCULER MON IMC ? </h2>
          <p>
            il se calcule simplement divisant le poids (en kg) par le carré de
            la taille (m). Un IMC normal se situe entre 18,25 et 25.Pour
            Connaitre votre IMC, pas besoin de sortir votre calculette, il vous
            suffit de compléter les champs ci-dessous !
          </p>
        </div>

        <form className="form-calculator">
          <input
            type="text"
            placeholder="Poids (kg)"
            onChange={(event) => {
              setWeight(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Taille (cm)"
            onChange={(event) => {
              setHeight(event.target.value);
            }}
          />
          <button id="submit" onClick={calculator}>
            Envoyer
          </button>
        </form>
        {error ? (
          <div className="error">
            <h3> {error} </h3>
          </div>
        ) : null}
        {result ? (
          <div className="result">
            {result < 18.5 || result > 25 ? (
              <h3 Style="color:red;"> {result} </h3>
            ) : (
              <h3 Style="color:green;"> {result} </h3>
            )}
          </div>
        ) : null}

        <div className="clue">
          <div className="clue-right">
            <p>Indice de masse corporelle (IMC)</p>
            <p>moins de 18,5</p>
            <p> 18,5 à 25</p>
            <p> 25 à 30 </p>
            <p> 30 à 35 </p>
            <p> 35 à 40 </p>
            <p> plus de 40</p>
          </div>
          <div className="clue-left">
            <p> Interprétation (d'après l'OMS)</p>
            <p> Insuffisance pondérale (maigreur) </p>
            <p> Corpulence normale </p>
            <p> Surpoids </p>
            <p> Obésité modérée </p>
            <p> Obésité sévère </p>
            <p> Obésité morbide ou massive </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

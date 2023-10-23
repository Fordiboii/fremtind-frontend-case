import { FC } from "react";
import Form from "../components/form";

const header = "Kjøp bilforsikring";
const description = "Det er fire forskjellige forsikringer å velge mellom. Ansvarsforsikring er lovpålagt om kjøretøyet er registrert og skal brukes på veien. I tillegg kan du utvide forsikringen avhengig av hvor gammel bilen din er og hvordan du bruker den.";

const CarInsurancePage: FC = () => {  
  return (
    <>
      <h1 className="jkl-title mb-24">{header}</h1>
      <p className="jkl-body mb-24">
        {description}
      </p>
      <Form />
    </>
  )
}

export default CarInsurancePage;

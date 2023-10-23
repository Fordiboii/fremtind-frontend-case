import { useState, FC, ChangeEventHandler } from "react";
import { Select } from "@fremtind/jkl-select-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { useForm } from "react-hook-form";
import { FormErrorMessageBox } from "@fremtind/jkl-message-box-react";
import { PrimaryButton, SecondaryButton } from "@fremtind/jkl-button-react";
import { isValidEpost, isValidFodselsnummer, isValidName, isValidRegistreringsnummer } from "@fremtind/jkl-validators-util";

type FormValues = {
  registreringsnummer: undefined | string;
  bonus: undefined | string;
  fornavn: undefined | string;
  etternavn: undefined | string;
  fodselsnummer: undefined | string;
  epost: undefined | string;
};

const selectValues = [
  { value: "Forsikring 1", label: "Forsikring 1" },
  { value: "Forsikring 2", label: "Forsikring 2" },
  { value: "Forsikring 3", label: "Forsikring 3" },
  { value: "Forsikring 4", label: "Forsikring 4" }
];
const labelProps = { variant: "large" };

const Form: FC = () => {
  const [value, setValue] = useState(selectValues[0].value);

  const onChangeHandler: ChangeEventHandler = (e) => {
    setValue(e.target.value);
  }

  const { formState, handleSubmit, register } = useForm<FormValues>({
    shouldFocusError: false,
});

  /** Gjør klar props til oppsummeringen */
  const { errors: hookFormErrors, isSubmitted, isValid } = formState;
  const errors = Object.entries(hookFormErrors).flatMap(([, error]) =>
      Array.isArray(error) ? error.map((e) => e.message) : [error.message],
  );

  const onSubmit = () => {};
  
  return (
    <>
      {(isSubmitted && isValid)
        ? (<h2 className="pt-32 jkl-title-small">Pris: 500 NOK</h2>)
        : (
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormErrorMessageBox
            className="jkl-portal-paragraph"
            errors={errors}
            isSubmitted={isSubmitted}
            isValid={isValid}
        />
        <TextInput
          className="jkl-body mb-24"
          {...register("registreringsnummer", {
              validate: {
                isValidRegnummer: (value: string) =>
                  isValidRegistreringsnummer(value, { vehicle: 'bil' }) ||
                  'Registreringsnummer må bestå av to bokstaver og fire sifre',
              },
              required: 'Du må skrive inn registreringsnummer',
          })}
          label="Bilens registreringsnummer"
          labelProps={labelProps}
          placeholder="F.eks. AB12345"
        />
        <Select
          required
          className="mb-24"
          id="bonus"
          name="bonus"
          variant="small"
          label="Din bonus"
          labelProps={labelProps}
          helpLabel="Hjelpetekst/feilmeldingstekst"
          items={selectValues}
          value={value}
          onChange={onChangeHandler}
          className="mb-24"
        />
        <TextInput
          className="mb-24"
          label="Fødselsnummer"
          labelProps={labelProps}
          placeholder="11 siffer"
          {...register("fodselsnummer", {
            validate: {
              isValidFodsels: (value: string) =>
                isValidFodselsnummer(value) ||
                'Må være gyldig fødselsnummer',
            },
            required: 'Du må skrive inn fødselsnummer',
          })}

        />
        <div className="lg:flex lg:flex-col">
          <TextInput
            className="mb-24 mr-24"
            label="Fornavn"
            labelProps={labelProps}
            {...register("fornavn", {
              validate: {
                isValidFornavn: (value: string) =>
                  isValidName(value) ||
                  'Navn kan ikke inneholde spesialtegn.'
              },
              required: 'Du må skrive inn fornavn',
            })}
          />
          <TextInput
            className="mb-24"
            label="Etternavn"
            labelProps={labelProps}
            {...register("etternavn", {
              validate: {
                isValidEtternavn: (value: string) =>
                  isValidName(value) ||
                  'Navn kan ikke inneholde spesialtegn.'
              },
              required: 'Du må skrive inn etternavn',
            })}
          />
        </div>
        <TextInput
          className="mb-32"
          label="E-post"
          labelProps={labelProps}
          {...register("epost", {
            validate: {
              isValidEmail: (value: string) =>
                isValidEpost(value) ||
                'Må være gyldig e-post på formen \'<din-epost>@<ditt-domene>\'',
            },
            required: 'Du må skrive inn en E-post',
          })}
        />
        <div className="mb-20 flex flex-col">
          <PrimaryButton className="mr-24" type="submit">Gå videre</PrimaryButton>
          <SecondaryButton>Avbryt</SecondaryButton>
        </div>
      </form>
      )}
    </>
  )
}

export default Form;
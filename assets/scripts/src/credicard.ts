import queryStringToJSON from "./functions/queryStringToJSON";
import setFormValues from "./functions/setFormValues";

const page = document.querySelector("#schedules-payment") as HTMLElement;

if (page) {
  const form = page.querySelector("form") as HTMLFormElement;

  setFormValues(form, queryStringToJSON());
}
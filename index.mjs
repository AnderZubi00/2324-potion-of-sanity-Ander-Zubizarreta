import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";

const execute = async () => {
    try
    {
        const data = await getData();

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        showIngrediets(ingredients);
    }
    catch
    {
        //ERROR
    }
}

function showIngrediets(ingredients){
    if (ingredients.length > 0) {
        ingredients.forEach(ingredient => {
            console.log(ingredient);
        });
    } else {
        console.log("No hay ingredientes cargados.");
    }
}

execute();
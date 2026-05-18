import { inventory } from "./inventory.js";

export class Machines{
    constructor(name){
        this.name = name;
        //Da pra acrescentar tempo de processamento, eficiencia de item, etc
    }

    crafting(recipe=null, input=null){
        if(recipe != null || input != null){
            if(recipe.machine === this.name){
                if(input.name === recipe.input.name && input.qnt >= recipe.input.qnt){
                    inventory.use_item(input.name, recipe.input.qnt);
                    const output = {
                        name: recipe.output.name,
                        qnt: recipe.output.qnt,
                    }
                    inventory.add_item(output.name, output.qnt);
                    return output;
                } else{
                    if(input.qnt < recipe.input.qnt){
                        const needs = {qnt: recipe.input.qnt};
                        console.log(`Quantidade invalida! Tente inserir mais ${needs.qnt - input.qnt}`);
                        return needs;
                    }else if(input.name !== recipe.input.name){
                        const needs = {name: recipe.input.name};
                        console.log(`Item invalido! Tente inserir ${needs.name} ao invez de ${input.name} `);
                        return needs;
                    }
                }
            }
        }
    }
}
//Funcionamento tem que ser: Enviar como parametro a receita que quer fazer, nao o item da receita
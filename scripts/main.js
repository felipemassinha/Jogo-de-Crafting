import { Machines } from "./machines.js";
import { inventory } from "./inventory.js";
import { recipes } from "./recipes.js";

// saw_machine.crafting(recipe_certa, inventory.madeira_bruta(que tem name e qnt))
//Criacao das maquinas
const saw_machine = new Machines('Saw Machine');
const crafting_table = new Machines('Crafting Table');
const furnace = new Machines('Furnace');
const items = inventory.itens;

// Separando as maquinas das acoes, da pra ter um controle do que entra em cada maquina com ifs

// Sessao de executar as funcoes

inventory.mostrar_inventario();
saw_machine.crafting(recipes.madeira_processada, items.madeira_bruta);
saw_machine.crafting(recipes.madeira_processada, items.madeira_bruta);
saw_machine.crafting(recipes.madeira_processada, items.madeira_bruta);
saw_machine.crafting(recipes.madeira_processada, items.madeira_bruta);
inventory.mostrar_inventario();
crafting_table.crafting(recipes.bau, items.madeira_processada);
inventory.mostrar_inventario();
furnace.crafting(recipes.vidro, items.areia);
inventory.mostrar_inventario();
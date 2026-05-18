class Recipes{
    constructor(){
        this.recipes = {
            madeira_processada: {

                name: 'Madeira Processada',
                machine: 'Saw Machine',
                input: {
                    name: 'Madeira Bruta',
                    qnt: 1,
                },
                output: {
                    name: 'Madeira Processada',
                    qnt: 2,   
                }
            },
            bau: {
                name: 'Bau',
                machine: 'Crafting Table',
                input: {
                    name: 'Madeira Processada',
                    qnt: 8,
                },
                output: {
                    name: 'Bau',
                    qnt: 1,   
                }
            },
            vidro: {
                name: 'Vidro',
                machine: 'Furnace',
                input: {
                    name: 'Areia',
                    qnt: 4,
                },
                output: {
                    name: 'Vidro',
                    qnt: 1,   
                }
            },
        }
    }
}
// Tem que ter Input de item(Custo) e Output(Resultado) Em qual maquina ela funciona
export const recipes = new Recipes().recipes

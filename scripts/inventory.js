class Invetory{
    constructor(){
        this.itens = {
            madeira_bruta: {
                name: 'Madeira Bruta',
                qnt: 10,
            },
            madeira_processada: {
                name: 'Madeira Processada',
                qnt: 0,
            },
            bau: {
                name: 'Bau',
                qnt:     0,
            },
            areia: {
                name: 'Areia',
                qnt: 10,
            },
        }
    }

    mostrar_inventario(){
        console.log('------')
        // a variavel e a chave
        for(let item in this.itens){
            console.log(`Quantidade de ${this.itens[item].name}: ${this.itens[item].qnt}`);
        }
        console.log('------')
    }

    // create_iten(item, nome,){
    //     this.items[item] = {
    //         name: nome,
    //         qnt: 0
    //     }
    // }

    add_item(item, add_qnt){
        for(let iten in this.itens){
            if (this.itens[iten].name === item){
                this.itens[iten].qnt += add_qnt;
                console.log(`${add_qnt} ${item} foram adicionados ao inventario!`);
            }
        }
        return;
    }

    use_item(item, use_qnt){
        for(let iten in this.itens){
            if (this.itens[iten].name === item){
                this.itens[iten].qnt -= use_qnt;
                console.log(`${use_qnt} ${item} foram usados!`);
            }
        }
        return;
    }
}

export const inventory = new Invetory()
// toMachtObject() - Comparar os objetos e ver se tem similaridades entre eles 

const carroDesejado ={
    portas: 4,
    cor: 'Vermelho',
    mecanica: {
        motorizacao: [4.0, 'Turbo', '200 cv']
    }, 
    tetoSolar: true
}

const carroAVenda = {
    portas: 4,
    cor: 'Rosa',
    mecanica: {
        motorizacao: [1.0, 'aspirado', '60 cv']
    },
    tetoSolar: false, 
    cambio:'manual', 
}

const carroOlx = {
    portas: 4,
    cor: 'Vermelho',
    mecanica: {
        motorizacao: [4.0, 'Turbo', '200 cv'],
        cambio:'automatico',
        tracao: '4x4'
    }, 
    tetoSolar: true,
    ano: 2024,
    wifi: true,
    assistenteDeEstacionamento: true,
    centralMultimídia: true,
}

test('Características do carro desejado', () => {
    expect(carroOlx).toMatchObject(carroDesejado)
})

const boloDeCenoura = {
     lactose : false                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}
const boloDeChocolate = {
    lactose: true
}
const boloDeMorango ={
    lactose: false
}

test('Se tem ou não lactose', () => {
    expect(boloDeCenoura).toMatchObject(boloDeMorango)
})

                                                                                              
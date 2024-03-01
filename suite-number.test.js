

test("Verificar palavra dentro e um array", () =>{
    const cestaDeFrutas = ['Pera', 'Uva', 'Maçã',
    'Manga', 'Melancia']

    expect(cestaDeFrutas).toContain('Uva')
})

test('Verificar se não há cargo de gerente entre os funcionários', () => {
    const cargos = ['Auxiliar', 'Assistente', 'Analista', 'Encarregado', 'Coodenador']

    expect(cargos).not.toContain('Gerente')
})

test("Verifica se há a palavra 'Senai'", () => {
    const frase = "O senai é o melhor lugar do mundo para passar nossas manhãs!"

    expect(frase).toMatch(/senai/)
})

test("Verificar a função que recebe email", () =>{
    const email = 'myllennyv@gmail.com'
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    expect(verificarEmail).toBe(regex)
})
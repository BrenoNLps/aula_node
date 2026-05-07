async function verificarArmazenamento() {
    // Verifica o espaço disponível no navegador
    const estimativa = await navigator.storage.estimate()

    console.log(estimativa.quota)  // espaço total disponível em bytes
    console.log(estimativa.usage)  // espaço já usado em bytes

    const porcentagem = (estimativa.usage / estimativa.quota * 100).toFixed(2)
    console.log(`Usando ${porcentagem}% do armazenamento`)

    // Pede armazenamento persistente ao navegador
    const persistido = await navigator.storage.persist()

    if (persistido) {
        console.log('Armazenamento permanente garantido')
    } else {
        console.log('Navegador pode limpar os dados quando precisar de espaço')
    }
}

verificarArmazenamento()

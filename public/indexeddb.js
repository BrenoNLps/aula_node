const request = indexedDB.open('meu-banco', 1)


request.onupgradeneeded = (event) => {
    const db = event.target.result
    db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true })
}



// onsuccess roda quando o banco abre com sucesso
request.onsuccess = async (event) => {
    const db = event.target.result

    // Busca os usuários da API
    const resposta = await fetch('/api/usuario')
    const usuarios = await resposta.json()

    // Salva cada usuário no IndexedDB
    const txEscrita = db.transaction('usuarios', 'readwrite')
    usuarios.forEach(usuario => txEscrita.objectStore('usuarios').add(usuario))

    // Busca todos os usuários salvos localmente
    const txLeitura = db.transaction('usuarios', 'readonly')
    const store = txLeitura.objectStore('usuarios')
    const getAllRequest = store.getAll()

    getAllRequest.onsuccess = () => {
        console.log(getAllRequest.result) // array com todos os usuários
    }
}

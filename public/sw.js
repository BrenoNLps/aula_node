// "install" roda quando o Service Worker é instalado pela primeira vez
self.addEventListener('install', async (event) => {
    const cache = await caches.open('meu-cache-v1')
    // Busca a rota /api/usuario e salva a resposta no cache
    await cache.add('/api/usuario')
})

// "fetch" roda toda vez que o navegador faz uma requisição
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(resposta => {
        if (resposta) return resposta // tem no cache — retorna sem ir ao servidor
        return fetch(event.request)  // não tem no cache — busca no servidor normalmente
        })
    )
})

// "activate" roda quando o Service Worker é atualizado
self.addEventListener('activate', async () => {
    await caches.delete('meu-cache-v1')
})


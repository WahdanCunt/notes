// Twitter dan Github menggunakan pendekatan yang sama dalam menampilkan halaman profil. 
// Mereka memanfaatkan username sebagai bagian dari path
server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: (request, h) => {
        const { username } = request.params;
        return `Hello, ${username}!`;
    },
});
// fungsi dari h? 
// memang lebih baik Anda langsung kembalikan dengan nilai 
// secara eksplisit. Namun, ketahuilah bahwa dengan cara tersebut status response selalu bernilai 200 OK. 
// Ketika Anda butuh mengubah nilai status response, di situlah Anda membutuhkan parameter h.
server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});
// Parameter h tidak hanya berfungsi untuk menetapkan status kode respons. 
// Melalui h, Anda juga bisa menetapkan header response, content type, content length, dan masih banyak lagi. 

// Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('Custom-Header', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('Custom-Header', 'some-value');
};
100-199 : informational responses.
200 - 299 : successful responses.
300-399 : redirect.
400-499 : client error.
500-599 : server errors.
https://hapi.dev/api/?v=20.1.0#response-toolkit
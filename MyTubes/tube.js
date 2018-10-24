var arrayTubes = new Array(
    {
        id: 'UCXao7aTDQM',
        title: 'Tháng Tư Là Lời Nói Dối Của Em',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Người Tình Mùa Đông',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Tình Thôi Xót Xa',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Tái Bút Anh Yêu Em',
        author: 'Hà Anh Tuấn'
    }
);
var idTubes = document.getElementById('myTubes');
for (var i = 0; i < arrayTubes.length; i++) {
    idTubes.innerHTML = '<div class="tube-item">\n' +
        '        <iframe width="660" height="355" src="https://www.youtube.com/embed/' +arrayTubes[i].id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
        '        <h3> '+ arrayTubes[i].title +'</h3>\n' +
        '        <p>' + arrayTubes[i].author+'</p>\n' +
        '    </div>'
}
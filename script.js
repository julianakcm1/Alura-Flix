var listaFilme = []
listaFilme.push('https://images.justwatch.com/poster/240010474/s592/um-principe-em-nova-york.jpg')
listaFilme.push('https://images.justwatch.com/poster/255888081/s592/o-impossivel.jpg')
listaFilme.push('https://images.justwatch.com/poster/301689406/s718/o-jogo-da-imitacao.%7Bformat%7D.jpg')
listaFilme.push('https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg')
listaFilme.push('https://m.media-amazon.com/images/I/710j0HLuwuL.jpg')
listaFilme.push('https://www.cafecomfilme.com.br/media/k2/items/cache/e832229497fb2577ef7a5704e6a736dd_L.jpg?t=20200128_185835')
listaFilme.push('https://br.web.img3.acsta.net/medias/nmedia/18/95/66/26/20421252.jpg')
listaFilme.push('https://images.justwatch.com/poster/300463322/s718/a-procura-da-felicidade.%7Bformat%7D')
listaFilme.push('https://br.web.img3.acsta.net/medias/nmedia/18/87/31/82/19874259.jpg')
listaFilme.push('https://br.web.img3.acsta.net/pictures/14/12/02/22/15/327211.jpg')
listaFilme.push('https://media.fstatic.com/a2Zrn_FkIy4m_MdMYm3D4xAaaIw=/322x478/smart/filters:format(webp)/media/movies/covers/2013/10/como-estrelas-na-terra_t9872.JPG')
listaFilme.push('https://i0.wp.com/blogdamaricalegari.com.br/wp-content/uploads/2017/08/lion.jpg?resize=452%2C639&ssl=1')

var index = 0

while(index < listaFilme.length) {
  console.log(index)
  
  document.write('<img src = ' + listaFilme[index] + '>')
  index++
}
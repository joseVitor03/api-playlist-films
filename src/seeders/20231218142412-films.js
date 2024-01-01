'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('films', [
    { name: 'A Viagem de Chihiro', year: 2001, poster: 'https://media.fstatic.com/NddzHzKpa37DFBS6XhZuvQa_oSM=/322x478/smart/filters:format(webp)/media/movies/covers/2014/08/a-viagem-de-chihiro_t1246_15.jpg' },
    { name: 'O Rei Leão', year: 1994, poster: 'https://media.fstatic.com/ULXVv6UqvCXuHeG1Q8poY8ac8i4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/c4715acea24bbe9b793cb4ac5a35763e.jpg' },
    { name: 'Túmulo dos Vagalumes', year: 1988, poster: 'https://media.fstatic.com/m834Z7hPJO0raAJT4fAEqwhXxCM=/322x478/smart/filters:format(webp)/media/movies/covers/2014/08/tumulo-dos-vagalumes_t8294_10.jpg' },
    { name: 'WALL-E', year: 2008, poster: 'https://media.fstatic.com/0pq_nIM_LLqo0zEJwzIw_EPUmAQ=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/e40e82c7b899f7150144cdbaade79700.jpg' },
    { name: 'Princesa Mononoke', year: 1997, poster: 'https://media.fstatic.com/d5Hj_oupgunSy4RmKK6bnLvahFk=/322x478/smart/filters:format(webp)/media/movies/covers/2011/02/edb728568b4c6d459fc918b30b1b0629.jpg' },
    { name: 'Up: Altas Aventuras', year: 2009, poster: 'https://media.fstatic.com/hc3AblRUBrpZKsNGhJTk6UQCCqQ=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/6668f8a62108dfdb3cd17f9ee57a9028.jpg' },
    { name: 'Toy Story', year: 1995, poster: 'https://media.fstatic.com/lIOkPj_SHOZrjraFh4LRKmpTc28=/322x478/smart/filters:format(webp)/media/movies/covers/2010/12/1976bb35b69a00c294eb5decf0047db4.jpg' },
    { name: 'Toy Story', year: 2010, poster: 'https://media.fstatic.com/FDAaTXsuAYHxHEURh7qzy_GxLJ4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/adc86e33fb905dba7da2ba276ca08a29_1.jpg' },
    { name: 'Divertida Mente', year: 2015, poster: 'https://media.fstatic.com/fiQkQtofGohQ5XFgN5h1rCMCzRw=/322x478/smart/filters:format(webp)/media/movies/covers/2015/03/divertida-mente_t62633.jpg' },
    { name: 'Procurando Nemo', year: 2003, poster: 'https://media.fstatic.com/xLT_zQOtyIplry1vStdd81-Yod4=/322x478/smart/filters:format(webp)/media/movies/covers/2011/10/ca80ab4c9a947523a2c29e241552fa5d.jpg' },
    { name: 'O Catelo Animado', year: 2004, poster: 'https://media.fstatic.com/W7D8J1lid1GhXuy60LqIGRmiurI=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/9b4a2be3be4cb5ace0c43e577962a713.jpg' },
    { name: 'Como Treinar o seu Dragão', year: 2010, poster: 'https://media.fstatic.com/x_WoZENLfoD1VaSxF50fHeapcJw=/322x478/smart/filters:format(webp)/media/movies/covers/2014/06/como-treinar-o-seu-dragao_t11196_4.jpg' },
    { name: 'Meu Amigo Totoro', year: 1988, poster: 'https://media.fstatic.com/GA4w38mmjMqXDki_Oq9gDLgeG10=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/a39edaf8e62258fb6c5e6fb356875ea3.jpg' },
    { name: 'A Canção do Oceano', year: 2014, poster: 'https://media.fstatic.com/NgJWAVPocxry3_NnASvZ4qigZ-o=/322x478/smart/filters:format(webp)/media/movies/covers/2014/05/song-of-the-sea_t97115.jpg' },
    { name: 'Mary e Max: Uma Amizade Diferente', year: 2009, poster: 'https://media.fstatic.com/t9opSgptSUvcY-_1ebB6iENsjpA=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/37e7e03253a73ea41228f2891cb0cbf8.jpg' },
    { name: 'Zootopia: Essa Cidade é o Bicho', year: 2016, poster: 'https://media.fstatic.com/p3hAkG-x6uyVkuwNWaEE2T2XDJs=/322x478/smart/filters:format(webp)/media/movies/covers/2016/03/zootopia-essa-cidade-e-o-bicho_t84397_NvVcalS.jpg' },
    { name: 'Monstros S.A.', year: 2001, poster: 'https://media.fstatic.com/LHyewCWY-fFsDdqiXTfQiiVmpOg=/322x478/smart/filters:format(webp)/media/movies/covers/2019/07/monstros.jpg' },
    { name: 'Akira', year: 1988, poster: 'https://media.fstatic.com/sdYpyxjWtTP3bODJSVe4GAFdFSM=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/49358d3fd9e364e361235f747e775ed2.jpg' },
    { name: 'O Castelo no Céu', year: 1986, poster: 'https://media.fstatic.com/Sfjk4ubz3Xfy6QmoeUKFfrAuqnI=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/711e57fab3fc07ca61f4ed450de35690.jpg' },
    { name: 'Nausicaä do Vale do Vento', year: 1984, poster: 'https://media.fstatic.com/fnSlLeJV5JPpbVwg6UyZ-Nt4GaE=/322x478/smart/filters:format(webp)/media/movies/covers/2014/08/nausicaa-do-vale-do-vento_t12977_33.jpg' },
    { name: 'O Estranho Mundo de Jack', year: 1993, poster: 'https://media.fstatic.com/9JHYZTe8R0OTRqhheMyvPZ49lh8=/322x478/smart/filters:format(webp)/media/movies/covers/2011/06/6bce5c0d0b537eadd5c7c5804ff97d04.jpg' },
    { name: 'A Bela e a Fera', year: 1991, poster: 'https://media.fstatic.com/lisAxl34Yci-fI-tBfi4g3hG5C8=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/2dae7ce1c26abee2851176aee2353d02.jpg' },
    { name: 'Os Incríveis', year: 2004, poster: 'https://media.fstatic.com/NNQllv7a5FUjf04OeFTIFHTM1Ts=/322x478/smart/filters:format(webp)/media/movies/covers/2011/10/6a81b9776a96206b2ab0c514e0d27697.jpg' },
    { name: 'Ratatouille', year: 2007, poster: 'https://media.fstatic.com/Xbncpc1kSzPbn_w5KXwZuXIuo3c=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/19d7018d97b7d3e03d08adc1d27960e5.jpg' },
    { name: 'Aladdin', year: 1992, poster: 'https://media.fstatic.com/o5lQamb5MujdHBiLvqyPy_qWy_Q=/322x478/smart/filters:format(webp)/media/movies/covers/2011/07/d96e600d93c4859bf0974eaf8122f5be.jpg' },
    { name: 'Gigante de Ferro', year: 1999, poster: 'https://media.fstatic.com/qb0RF6kLqcJGZOJ2p2nlT2O7nZs=/322x478/smart/filters:format(webp)/media/movies/covers/2016/07/iron_giant_ver4.jpg' },
   ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('films', null, {});
  }
};

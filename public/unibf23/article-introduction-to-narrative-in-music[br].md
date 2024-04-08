# MOTIVO CONDUTOR, DESENHO DE SOM, RE-SEQUENCIAMENTO HORIZONTAL E RE-ORQUESTRAÇÃO VERTICAL

## Introdução sobre narrativa em música

## UNIÃO BRASILEIRA DE FACULDADES – UNIBF

DESENVOLVIMENTO DE JOGOS DIGITAIS

### GUILHERME YURI BERMÊO COSTA

BRASÍLIA 2023

Trabalho de Conclusão do Curso, apresentado
para obtenção de certificado no Curso de Especialização – Latu Sensu em Desenvolvimento de Jogos Digitais da União Brasileira de Faculdades, UNIBF.

Orientador: Prof. Esp. Carlos Hoegen

## RESUMO

Este estudo tem como tema principal discutir a importância e a evolução do papel dos elementos narrativos na música e como tais elementos influenciaram os jogos digitais. Através de uma pesquisa variada que vai do estudo do motivo condutor na música como papel narrativo desde Scheherazade (1888) a obras de música popular contemporânea, passando por aplicação de técnicas de sound design na história do cinema e na obra Duna (2021), culminando no surgimento de ferramentas que possibilitaram re-sequenciamento e re-orquestração em tempo real em jogos digitais através de inputs do jogador e estados do jogo e avatares. Por fim, uma exploração final de jogos digitais contemporâneos que se utilizaram de todo esse conjunto de técnicas para uma melhor construção narrativa e/ou imersão do jogador, como The Legend of Zelda: Breath of the Wild (2017) e Journey (2012).

Palavras-chave: Motivo Condutor; Re-orquestração Vertical; Re-sequenciamento Horizontal; Narrativa; Trilha Sonora; Scheherazade.

## ABSTRACT

The main theme of this study is to discuss the importance and evolution of narrative elements in music and how these elements have influenced digital games. Through varied research that ranges from the study of the leitmotif in music as a narrative role since Scheherazade (1888) to contemporary popular music works, including the application of sound design techniques in the history of cinema and in the film Dune (2021), culminating in the emergence of tools that have enabled real-time re-sequencing and re-orchestration in digital games through player inputs, game states, and avatars. Finally, a final exploration of contemporary digital games that have used all these techniques for a better narrative construction and/or player immersion, such as The Legend of Zelda: Breath of the Wild (2017) and Journey (2012).

Keywords: Leitmotif. Vertical Re-orchestration. Horizontal Re-sequencing. Narrative. Soundtrack. Scheherazade.

## SUMÁRIO

1. [INTRODUÇÃO](#1-introdução)
2. [DESENVOLVIMENTO](#2-desenvolvimento)
    1. [NARRATIVA EM MÚSICA](#21-narrativa-em-música)
    2. [TRILHA SONORA EM CINEMA](#22-trilha-sonora-em-cinema)
    3. [MÚSICA ADAPTATIVA EM JOGOS DIGITAIS](#23-música-adaptativa-em-jogos-digitais)
3. [REVISÃO BIBLIOGRÁFICA](#3-revisão-bibliográfica)
4. [METODOLOGIA](#4-metodologia)
5. [ANÁLISE DOS RESULTADOS](#5-análise-dos-resultados)
6. [CONSIDERAÇÕES FINAIS](#6-considerações-finais)
7. [REFERÊNCIAS BIBLIOGRÁFICAS](#7-referências-bibliográficas)

## LISTA DE FIGURAS

- [Figura 1: Temas do Sultão e Scheherazade, respectivamente.](https://www.bermeo.dev/unibf23/img/fig1.jpg)
- [Figura 2: Tema de Scheherazade, segundo movimento compassos de 1 a 4.](https://www.bermeo.dev/unibf23/img/fig2.jpg)
- [Figura 3: Tema de Scheherazade, quarto movimento compassos de 8 a 9.](https://www.bermeo.dev/unibf23/img/fig3.jpg)
- [Figura 4: Tema de Scheherazade, quarto movimento compassos de 659 a 665.](https://www.bermeo.dev/unibf23/img/fig4.jpg)
- [Figura 5: As seis artes de capa de Everywhere At The End Of Time.](https://www.bermeo.dev/unibf23/img/fig5.jpg)
- [Figura 6: Comparação entre o tema de Star Wars e o tema de Siegfried.](https://www.bermeo.dev/unibf23/img/fig6.jpg)
- [Figura 7: Interface do FMOD onde é possível visualizar 6 trechos musicais que podem tocar em uma sequência definida via parâmetro, de forma dinâmica em tempo real. No trecho em destaque está tocando uma transição 10 entre as seções 4 e 0.](https://www.bermeo.dev/unibf23/img/fig7.jpg)
- [Figura 8: Tema Field (day) original, e parte das fragmentações usadas no jogo como trilha.](https://www.bermeo.dev/unibf23/img/fig8.jpg)
- [Figura 9: Gráfico explicativo da sobreposição vertical na música do segundo cenário de Journey.](https://www.bermeo.dev/unibf23/img/fig9.jpg)

## 1. INTRODUÇÃO

A música parte fundamental das mídias de entretenimento contemporâneas, pois pode ajudar a criar uma atmosfera, evocar emoções e reforçar a narrativa de uma história. Em filmes, por exemplo, a trilha sonora pode ajudar a criar tensão, suspense ou emoção, enquanto em jogos eletrônicos ela pode ajudar a imergir o jogador na experiência de jogo. Além disso, a trilha sonora também pode ser usada para identificar a marca de uma série ou filme, criando uma associação imediata para o espectador. A trilha sonora também pode ser usada para ajudar a vender o produto, como é o caso de músicas de filmes que são lançadas como singles e se tornam populares. Com o crescimento do streaming e a facilidade de acesso à música, a trilha sonora tem se tornado cada vez mais importante para a indústria do entretenimento, ajudando a criar uma conexão emocional com os espectadores e ouvintes, e com isso se vê emprestando técnicas já exploradas que datam desde a música clássica. Como humanos, nós estamos constantemente experienciando o som. Som está ao nosso redor, e o nosso cérebro é muito bom em escutar inconscientemente e decidir quando é para nós prestarmos atenção ou não (MOORE, MARISH e DUSABLON, 2019) e é ao se aproveitar desta característica, que sound designers e compositores de trilhas adaptativas se utilizam para manipular as emoções do jogador.

Dos marcos cinematográficos importantes para esta pesquisa, percebe-se que o ano de 1939 é marcado pelo cruzamento do Design com o Cinema. O lançamento do filme que viria a ser um grande sucesso, “E O Vento Levou”, dirigido por Victor Fleming, determina o momento em que se creditou pela primeira vez um production designer[^1], em reconhecimento à imensa contribuição que William Cameron Menzies fez ao filme. O production designer pode ser descrito como "o responsável por interpretar o roteiro e a visão do diretor para o filme (...) metáforas visuais, paleta de cores, locações. Ainda coordena os figurinistas, maquiadores e cabelereiros (...)" (LOBRUTTO, 2002), ou seja, um projetista conceitual das imagens visuais do filme responsável por todo o processo: pré-produção, produção e pós-produção[^2].

O profissional equivalente ao production designer para o som, o sound designer, por sua vez, só veio a ser creditado em uma grande produção de cinema quarenta anos depois em Apocalypse Now (1979), quando o diretor Francis Ford Coppola reconhecendo a imensa contribuição de Walter Murch ao filme descreveu o sound designer como “editor de som é o responsável por todos os aspectos relativos ao áudio de um filme, desde diálogo e gravação de efeitos sonoros até eventuais regravações da faixa final" (BARDINI, 2018). Neil Hillman e Sandra Pauletto se aprofundam no termo criado por Murch e afirmam que "O sound designer possui a habilidade necessária para construir uma ponte na lacuna que existe entre as emoções que o diretor quer suscitar e os modos de escuta utilizados pela audiência para perceber estas emoções através do ouvido." (PAULETTO e HILLMAN, 2014).

Da mesma forma em que produções cinematográficas existem diversos papeis profissionais para a criação de um produto final, o mesmo vale para a indústria de jogos digitais, dentro da área de estudo do som, principalmente ao se tratar de projetos AAA[^3], podem-se existir vários tipos de profissionais, tais como compositores, músicos, dubladores, programadores de áudio, engenheiros de áudio, diretores e sound designers. O foco de estudo desse trabalho será em na criação de manipulação de sons (para produções audiovisuais, incluindo filmes, jogos digitais e televisão), e motivos sonoros musicais, e como tais técnicas podem ser usadas para criar uma narrativa mais envolvente e imersiva na música, seja ela estática ou dinâmica como em jogos digitais.

## 2. DESENVOLVIMENTO

### 2.1 NARRATIVA EM MÚSICA

Ao se tratar de narrativa em música é comum associarmos o tema aos musicais e opera, pois é sabido que a relação entre o teatro e a música provavelmente existe desde a existência do próprio teatro. Comédias e tragédias gregas datadas do quinto ao terceiro século antes de cristo são conhecidas por incorporar movimentos coreografas e música, enquanto na Idade Média[^4] o entretenimento era provido por atores itinerantes e consistia em uma mistura de música e comédia física, enquanto dramas religiosos e peças bíblicas contavam com canto e poesia melódica (DORLING KINDERSLEY LIMITED DK, 2015). Após ser forçado a se exilar-se em 1948, o compositor Richard Wagner começa a escrever uma série de ensaios sobre um plano de reformar a ópera, baseando-se no conceito da Gesamtkunstwerk [^5]. A obra que mais se aproximou desse objetivo foi Der Ring des Nibelungen[^6], baseado numa mescla de mitologia nórdica e germânica. (GLOBO LIVROS, 2019). É nessa tetralogia de óperas em que Wagner desenvolve a técnica do Leitmotiv[^7], apesar de nunca ter especificado tal termo. Posteriormente, o uso do leitmotiv também passou a fazer parte de outras linguagens, como o cinema e telenovelas. (CADERNO DE MÚSICA EBC, 2016). A partir da popularização do leitmotiv, compositores passam a usar a técnica como narrativa em suas obras, um dos notórios exemplos em música clássica é o poema sinfônico[^8] Scheherazade de Nikolai Rimsky-Korsakov[^9], composta no inverno de 1888, 12 anos após a estreia da tetralogia de Der Ring des Nibelungen na casa de ópera que Wagner construiu em Bayreuth. (GLOBO LIVROS, 2019).

Durante o inverno de 1887 enquanto trabalhava na opera O Príncipe Igor[^10] de Alexander Borodin, Rimsky-Korsakov decide compor uma peça orquestral baseado na coletânea de contos “As Mil e uma Noites”[^11]. Inicialmente pensada como uma sinfonia[^12], teria seus 4 movimentos intitulados de maneira diferente: Prelúdio, Balada, Adágio e Finale, porém Rimsky-Korsakov foi posteriormente persuadido pelo também compositor Anatoli Liadov[^13] para discriminar nos títulos as partes do livro em que se inspirara, os 4 movimentos foram intitulados como “O Mar e o Navio de Sinbad”, “A História do Príncipe Kalender”, “O Jovem Príncipe e a Princesa” e “Festa em Bagdá – Naufrágio do barco nas rochas. Finale”, respectivamente, muito embora passados alguns anos tenha preferido retirar essas referências a fim de deixar maior liberdade ao ouvinte. (FOLHA ONLINE). É certo que aqueles títulos continuam hoje a aparecer em praticamente todas as edições, mas Scheherazade não pode ser entendida como uma descrição literal dos textos. Rimsky-Korsakov adaptou livremente as narrativas. Preocupou-se, sobretudo, em manter um ambiente fantasioso em que o exotismo é recurso de sedução, maneira de proporcionar uma viagem sonora num mundo idealizado, fantasia que se estende da bestialidade ao erotismo em paisagens distantes. (METROPOLITANA, 2020). Rimsky-Korsakov escreveu uma breve introdução que ele pretendia para uso com a partitura, bem como o programa para a estreia.

O sultão Shahriar persuadido da falsidade e falta de lealdade das mulheres jurou executar cada uma das suas mulheres após a noite de núpcias, mas Scheherazade salvou a sua vida interessando-o nos contos que narrou durante 1001 noites. Atraído pela curiosidade o Sultão adiou a execução da sua mulher dia após dia até desistir completamente do seu plano sangrento. (VASCONCELOS, 2012).

O leitmotiv grave e sombrio que abre o primeiro movimento é suposto representar o sultão dominador (figura 1, abaixo), este tema enfatiza quatro notas descendentes em uma escala de tons inteiros[^14] geralmente interpretado nos naipes de metal da orquestra. Após a introdução do leitmotiv do Sultão, ouvimos belos acordes em instrumentos de sopro (representando delicadeza) e em seguida ouvimos o leitmotiv que representa Scheherazade, sua esposa, representado por um violino solo[^15] (figura 1, abaixo) acompanhado por uma harpa. (ALMEIDA, 2015).

Figura 1: Temas do Sultão e Scheherazade, respectivamente.
![Fonte 1: ROFFEL (2020)](https://www.bermeo.dev/unibf23/img/fig1.jpg)

Durante a sinfonia, quanto mais histórias Scheherazade conta ao Sultão, mais confiança ela ganha e seus solos ficam mais complexos, enquanto o tema do Sultão fica a cada movimento, mais “fraco” e submisso à protagonista. A segunda aparição de seu leitmotiv durante o segundo movimento é musicalmente mais complexa e leva a uma explosão incrível de paradas duplas[^16] no quarto compasso (figura 2, abaixo), o que é tecnicamente desafiador. (DICTEROW, 2008).
Figura 2: Tema de Scheherazade, segundo movimento compassos de 1 a 4.
![Fonte 2: DICTEROW (2008)](https://www.bermeo.dev/unibf23/img/fig2.jpg)

O terceiro movimento da peça, “O Jovem Príncipe e a Princesa” é o relato de uma grande história de amor, para isso se utiliza de longas melodias se entrelaçando-se em uníssono com uma percussão mais leve, estética que anos depois podem ser reconhecidas em filmes românticos como o tema principal de “...E o Vento Levou” de 1938. (VASCONCELOS, 2012). Durante este movimento o leitmotiv de Scheherazade aparece somente durante os compassos 142 a 157, através de uma entrada muito sutil acompanhado de instrumentos de sopro.

Figura 3: Tema de Scheherazade, quarto movimento compassos de 8 a 9.
![Fonte 3: DICTEROW (2008)](https://www.bermeo.dev/unibf23/img/fig3.jpg)

O quarto movimento conta com um sultão prestes a perder a paciência, mas rapidamente é de novo envolvido nos contos de Scheherazade, que conta com um leitmotiv muito cansado em um ritmo lento, cheio de dissonâncias em paradas triplas[^17] e pausas que simulam uma voz falhada (figura 3, acima). (VASCONCELOS, 2012). Esse movimento conta com uma “cena” em que o barco de Sinbad se choca contra as rochas, como a peça passa pela interpretação de cada grupo orquestral, há um vídeo famoso da Sinfônica de Galícia em que o condutor Leif Segerstam começa a gritar com alguns de seus companheiros de orquestra[^18], simulando o que seria o desespero dos marinheiros tentando (em vão) desviar das rochas, aprimorando muito mais a narrativa da história. (SINFÓNICA DE GALICIA, 2015). Ao final, resolve-se a conflitante relação entre os dois quando o leitmotiv do Sultão é apresentado como subdominante menor em relação ao leitmotiv com cadência tônica maior de Scheherazade encerrando o conflito de forma lírica, fantástica e pacífica, representado por um leitmotiv leve, melódico e com um harmônico final altíssimo (figura 4, abaixo). (GRIFFITHS, 1989).

Figura 4: Tema de Scheherazade, quarto movimento compassos de 659 a 665.
![Fonte 4: DICTEROW (2008)](https://www.bermeo.dev/unibf23/img/fig4.jpg)

Durante a história da música contemporânea, vários grupos e artistas passaram a utilizar-se de técnicas que guiam um álbum em uma ideia ou narrativa linear. Conhecidos como álbuns conceituais, é um álbum em que todas as músicas contribuem para o mesmo efeito final ou para uma história única. (ARAÚJO, 2015). Dos álbuns conceituais mais famosos considera-se o Sgt. Pepper's Lonely Hearts Club Band dos Beatles de 1967 como um dos primeiros, onde era suposto que cada membro da banda adotasse um personagem de ficção e a canção-título apresentasse a banda como “Lonely Hearts Club Band”, no entanto a maior parte das músicas não têm relação com a narrativa proposta além da sonoridade. Em 1969, é lançado o que viria a ser considerado o primeiro álbum de ópera rock da história, Tommy da banda britânica The Who, com um total de 24 faixas o álbum começa com uma abertura[^19] e conta a história do garoto cego, surdo e mudo, Tommy Walker, que passa a ter essa condição depois de ver seu pai sendo morto pelo amante da mãe. Em 1975, o disco foi adaptado para o cinema pelo diretor Ken Russell. Logo na sequência, a banda The Who lançou seu segundo álbum de ópera rock, Quadrophenia, em 1973, cobrindo na perspectiva de primeira pessoa a história de aproximadamente dois dias da vida de um certo Jimmy, um protagonista com personalidade quádrupla, cada uma delas associadas a um integrante da banda. Em 1979, a banda britânica Pink Floyd lança o disco duplo The Wall, com um total de 26 faixas o disco conta a história de Pink, cujo pai é morto durante a Segunda Guerra Mundial e o garoto se vê obrigado a conviver com uma mãe superprotetora e que o oprime, na história, “o muro” é uma metáfora que a banda encontrou para que o personagem fosse construindo barreiras até chegar ao isolamento. O disco usa uma narrativa cheia de interlúdios entre faixas que compõe uma visão da história, enquanto evoca leitmotivs para representar personagens e ideias. (FREIRE, 2020). O disco marca como o segundo trabalho feito em torno de uma narrativa, em 1977 já havia lançado Animals, seu primeiro trabalho no estúdio independente montado pela banda. Animals é inspirado no romance A revolução dos bichos do escritor George Orwell, onde no álbum, a sociedade é dividida em 3 tipos de animais, cada um sendo apresentado em uma música diferente, e sendo reevocado através da sonoridade em outras faixas. O álbum é uma crítica direta ao capitalismo, em razão da preocupação de Roger Waters sobre desigualdade, preconceito e atitudes sociais e políticas alinhadas ao movimento punk britânico, crescente à época. (LAST FM, 2016).

No cenário nacional, a primeira obra considerada como Opera Rock no Brasil é o álbum O Filho de Maria e José, de Odair José, lançado em 1977. Em meados da década de 70, Odair chegou a ser excomungado da igreja católica por se pronunciar a favor do sexo fora do casamento, este fato, entre outros o levou a manter-se recluso. Passou o tempo afastado ouvindo discos e lendo livros, e foi durante a leitura da obra O Profeta, do escritor libanês Khalil Gibran, que teve a ideia de gravar um disco inteiro sobre a história de um profeta contemporâneo, contando como teria sido a vida de Jesus se ele tivesse nascido em tempos modernos. (MEDEIROS, 2015). Musicalmente as músicas transitam bem entre os estilos brega, rock ao funk que a banda dominava, Odair transita entre os personagens da história através de técnicas vocais como o uso do drive[^20] para a representação do padre na faixa O Casamento. (ASCARI, 2020). O lançamento de O Filho de José e Maria foi um desastre comercial, a crítica não entendeu o conceito de ópera rock, ainda inédito no Brasil. Os temas pesados foram mal recebidos pelo público cristão conservador que repudiou a história de um menino-messias fruto de um relacionamento fora do casamento. A igreja o classificou como um disco blasfemo e ajudou a afastar o público cativo de Odair. (MEDEIROS, 2015).

Com o passar dos anos o conceito de se fazer uma obra em torno de um tema foi cada vez mais utilizado nos subgêneros de rock progressivo e metal progressivo, em um caso extremo, a banda americana Coheed and Cambria conta com 8 álbuns de estúdio onde cada álbum conta um capítulo de uma história contínua de ficção científica de um universo concebido pela banda chamado The Amory Wars, desde 2002 com o lançamento do primeiro álbum da banda, intitulado The Second Stage Turbine Blade, além de 32 edições em quadrinhos desenhadas pelo próprio vocalista da banda Claudio Sanchez. (REED, 2015). Além da própria narração direta da história contada pelas músicas, também há a aparição de vários leitmotivs, o mais conhecido sendo o “Keywork leitmotiv”, mais proeminente nas músicas “Second Stage Turbine Blade”, “The Ring in Return”, e “Keeping the Blade”. (MUELBOY, 2014). Até a presente data, Janeiro de 2023, a história completa de The Amory Wars contém 109 músicas totalizando 8 horas e 45 minutos, é possível encontrar playlists com todas as músicas na ordem cronológica nas principais plataformas de streaming.

Em 2016, é lançado o álbum brasileiro “A Sinfonia de Tudo que Há”, da banda Fresno, idealizado por Lucas Silveira com orquestração de cordas por Lucas Lima, o álbum narra a história de um personagem com ouvido absoluto que acorda um dia ouvindo “tudo que há”, percebendo uma desarmonia no universo[^21]. O álbum destaca-se por ser uma obra musical com o enredo baseado no conceito de jornada do herói[^22] de Joseph Campbell e conta com sonoridade e letras influenciadas na recente imersão de Lucas Silveira em assuntos espaciais, com o uso dessa metáfora para falar sobre a insignificância do homem perante a grandiosidade do universo. (SOBRINHO, 2016). O álbum é admitidamente composto com a intenção de soar como uma ópera, musical ou peça com começo, meio e fim, e para isso a banda abriu espaço para as cordas aparecerem mais, apesar de apenas 5 faixas conterem orquestra, porém com uma presença tão forte que acaba permeando todo o álbum. (VON BORELL, 2016). Em entrevista, Lucas Silveira comenta sobre o processo de criação do álbum, em que a ideia realmente seria para soar como um musical:

Eu comecei a escrever músicas em 2013. Tem músicas desse disco que inclusive são de antes. Daí um amigo meu falou em escrever um musical, eu quis escrever um musical, escrevi muitas músicas loucamente e, a partir daí, fiquei com vontade de fazer músicas que contem uma história. Isso não precisa ficar claro, mas eu queria contar uma história, e o disco conta uma história, em ordem. (FOSTER, 2016).

A banda Titãs em 2018 lança o álbum duplo “Doze Flores Amarelas”, a primeiro ópera rock da banda que tem três décadas de carreira. O álbum conta a história em que três Marias resolvem contar com a tecnologia, um aplicativo de match de nome Facilitador, para aproveitarem melhor uma festa. O artifício dá errado e elas acabam sendo violentadas por cinco homens. Recorrem novamente ao mesmo aplicativo para tentar consertar a situação e este sugere a magia das doze flores amarelas, que batiza o álbum. Além do álbum, fora lançado um DVD de mesmo nome, com encenações no palco com a presença de três atrizes e vocalistas (Corina Sabbas, Cyntia Mendes e Yas Werneck), além da narração de Rita Lee. (RAFAEL, 2018).

Das diferentes maneiras de se construir uma narrativa através da estética sonora, destaca-se o pouco conhecido trabalho de The Caretaker, alter-ego[^23] de Leyland Kirby, na hexalogia[^24] “Everywhere at the end of time”, o conceito da hexalogia baseia-se no que uma pessoa com Alzheimer[^25] ou com demência pode sentir durante as fases da doença. O artista dá muito uso de trechos de música de salão dos anos 30 e 40, uma época em que nas palavras do artista, era uma época meio perdida, por estar no intervalo entre duas guerras mundiais e caracterizada por muita incerteza. De uma forma muito sutil e aparentemente aleatória somos confrontados com alguns indícios de que algo ruim está por vir, por exemplo, cortes repentinos na música ou até mesmo de um forte uso da repetição de melodias. Suavemente sem nos darmos conta da progressão, entramos nas fases mais avançadas da doença e as mesmas melodias calmas transformam-se em sons cada vez mais etéreos e distantes com o uso pesado de efeitos de reverberação. Enquanto as três primeiras obras têm cerca de 40 minutos de duração cada, as três últimas faixas são muito mais longas, com durações sempre acima de 1 hora e 25 minutos. Esse simbolismo pode estar associado à rapidez inicial com que a memória de uma pessoa com a doença se desintegra e a sensação posterior de infinitude associada a estas doenças. É a partir da quarta obra em que o limite entre música e barulho se tornam cada mais tênues, porém, no meio de tanto som ainda é possível discernir uma ou outra reminiscência daquilo que foram memórias felizes da música que ouvimos durantes as três primeiras obras. Ainda assim, estas vagas memórias são apenas uma pequena migalha daquilo que é uma sinfonia perfeita de horror e que reitera continuamente a sensação de impotência, confusão e conflito interno. Finalmente, na sexta e última obra, é possível discernir alguma aceitação em relação ao destino enquanto a música caminha para longos ruídos de sintetizadores carregados de efeitos. As melodias que nos acompanharam especialmente nas primeiras três obras, perdem-se e não se ouvem de todo, fazendo aumentar uma sensação muito profunda de vazio e abandono. A faixa final, “Place in the world fades away”, é um crescendo de energia, uma aceitação da inevitabilidade do tempo e do fim de uma vida e a entrega total para o vazio que fica. A um minuto do fim do álbum, a música simplesmente para, numa tentativa de demonstrar o fim definitivo e demorado de uma vida que durante os momentos finais pareceu encontrar a sua paz. (CALDEIRA, 2020).

Figura 5: As seis artes de capa de Everywhere At The End Of Time.
![Fonte 5: CALDEIRA (2020)](https://www.bermeo.dev/unibf23/img/fig5.jpg)

A arte de capa (Figura 5, acima) em cada uma das seis obras, todas pintadas pelo artista Ivan Seal, reflete no estado mental da progressão da doença, na primeira capa, pode-se dizer que é o retrato de um livro, ou simplesmente de papeis, enrolados, facilmente identificável. Na segunda capa, pode-se identificar que é um vaso de flores, abstrato, porém é fato de que é um vaso de flores. Na terceira capa, identifica-se o que seria uma árvore, uma planta ou alga, pintado de forma agressiva e abstrata. Na quarta capa, faz-se lembrar o último autorretrato pintado por William Utermohlen, artista vítima de Alzheimer. Já quinta capa é uma estátua totalmente abstrata, onde não se identifica nada. Enquanto na sexta e última capa, talvez a mais assustadora, pois você reconhece o objeto, mas não faz sentido algum, seria um pedaço de madeira com fitas coladas. (JOSEPH, 2020).

### 2.2 TRILHA SONORA EM CINEMA

Para nós, espectadores contemporâneos, estamos acostumados a ver o acompanhamento musical servindo como forma de melhorar a experiência mostrada na tela, porém nem sempre foi assim. Até os anos 1950, a trilha sonora era apenas um acompanhamento de um piano com a intenção de preencher o silêncio ou cenas em que os atores não estavam falando. Já nos anos 50, orquestras começam a ser convidadas a criar música para filmes. Ennio Morricone foi um dos primeiros a elevar a técnica do leitmotiv em seu trabalho na Trilogia dos Dólares[^26] no período entre 1964 e 1966. Morricone decidiu usar a técnica popularizada por Richard Wagner para criar o acompanhamento perfeito para os personagens principais sem saturar o filme com música, através de inserções musicais com um tema para cada um dos personagens principais. (KEANE, 2021). Uma década depois, John Williams compõe a trilha de Star Wars, um blockbuster[^27] que viria a ter tanto sucesso que acabaria ganhando duas continuações logo na sequência, e consequentemente, mais seis filmes ao longo dos anos até 2019. A influencia estética de Richard Wagner na obra de John Williams é clara, onde o tema principal da trilha é diretamente influenciada pelo leitmotiv do herói Siegfried, da terceira ópera de Der Ring des Nibelungen, de Richard Wagner (Figura 6, abaixo).

Figura 6: Comparação entre o tema de Star Wars e o tema de Siegfried.
![Fonte 6: KREROWICZ (2014)](https://www.bermeo.dev/unibf23/img/fig6.jpg)

Elementos relacionados à Sound Design em cinema podem ser encontrados em trilhas assinadas pelo compositor Hans Zimmer. Em Inception (2010), Non, Je Ne Regrette Rien, a música é utilizada como um sinal para outra realidade. A música não só está presente como trilha de diegética[^28], como também está presente na estrutura genética de toda a trilha sonora. Em entrevista ao New York Times (2011), Hans Zimmer comenta: "toda a música na trilha são subdivisões e multiplicações do tempo da música de Edith Piaf." O exemplo mais claro é o tema de Inception, onde é revelada o tema da música de Piaf tocada pelos trombones ao se acelerar a trilha. "Eu fiquei surpreso com quanto tempo eles levaram para descobrir. [^Isso] não era para ser um segredo." (MICHAELS, 2010). No filme Interstellar (2020), os personagens visitam um planeta onde é mencionado que cada hora é aproximadamente sete anos em tempo terrestre por conta da dilatação do tempo[^29] entre os dois planetas em questão. O compositor utiliza cliques na trilha sonora a cada 1.25 segundos para representar um dia terrestre, com a trilha dando um ar de urgência e tensão à cena. (KOMOI, 2020).

Para a composição da trilha sonora do filme Duna (2021), Hans Zimmer quis se distanciar o máximo possível de trilhas ocidentais (assim como Star Wars se inspirou na fonte de trilhas de filmes dos anos 30 e 40, além de clássicos de Holst e Stravinsky), a ideia do compositor era a de conjurar sons que nunca foram ouvidos antes. (KING, 2021). Em seu processo criativo para essa trilha destacam-se os diversos instrumentos de sopro, inspirados no som do vento do deserto, e instrumentos feitos de metal, incluindo materiais utilizados em tanques de armazenamento criogênico e motores SpaceX. No filme, as texturas tonais complexas e ressonantes acompanham visuais de areia e especiaria sopradas pelo vento, em entrevista ao New York Times, o compositor comenta que nas gravações dos drones[^30] para músicas da trilha, fora utilizado um batalhão de 30 tocadores de gaitas de foles em uma igreja, onde proteção auditiva teve de ser utilizada: o volume no local chegou a 130 decibéis, o equivalente a uma sirene de bombardeio aéreo. A presença mais mística na trilha sonora é um coro de vozes femininas que cantam, sussurram e entoam em uma língua inventada. “A verdadeira força motriz desta obra é sempre os personagens femininos”, afirmou o compositor. “São realmente as mulheres que moldam o destino de todos”. Uma voz chamativa se destaca como um grito de guerra, com sílabas antigas e melismáticas[^31] em ritmos desconjuntados. Esteticamente, a cantora e musicoterapeuta Loire Cotler, afirma que se inspirou em tudo, desde o canto nigun[^32] judaico, percussão vocal sul-indiana, lamento gaélico e canto difônico[^33] gutural tuvano. "Quando você começa a misturar essas influências e técnicas distantes, começam a acontecer sons interessantes", ela disse. "É uma técnica vocal chamada 'Hans Zimmer'.". (KING, 2021).

### 2.3 MÚSICA ADAPTATIVA EM JOGOS DIGITAIS

Paul Booth (1989) propõe em sua obra sobre interação humano-máquina, que a interação humano-máquina seja um diálogo, onde uma troca de símbolos e significados entre as partes é feita para gerar resultados perceptíveis. Essa troca é vista como o pilar dos jogos digitais, onde jogador e sistema reagem ativamente às situações propostas pela outra parte. No entanto, a definição proposta por Booth se aproxima mais da relação do usuário com o jogo digital, que difere de outros tipos de software. Interagir com o jogo digital nos dá o poder da agência, que é a capacidade de realizar ações significativas e ver os resultados das nossas decisões e escolhas. Essa agência é a essência da interação em videogames, que difere de outras formas de entretenimento não-interativas, como livros e filmes. Portanto, é natural que o papel da trilha sonora em jogos reflita essa questão de interação, com música e efeitos sonoros criados para serem sincronizados com as ações do jogador e os estados possíveis do jogo.

O áudio dinâmico em jogos digitais é a técnica que permite que a música e os efeitos sonoros sejam adaptados de acordo com as ações do jogador e as situações que ocorrem dentro do jogo. Isso cria uma experiência de jogo mais imersiva e envolvente, pois a música e os efeitos sonoros se adaptam às ações do jogador e ajudam a criar uma atmosfera mais intensa e emocionante. O áudio dinâmico engloba tanto o áudio interativo[^34] quanto o áudio adaptativo[^35]. Além disso, a música pode ser usada como um elemento narrativo, contribuindo para a história e a jogabilidade do jogo. A técnica de áudio dinâmico hoje é padrão da indústria, pela facilidade de comunicação entre motores gráficos[^36] e middlewares de áudio[^37].

Para Winifred Phillips (2021), a música adaptativa difere da música linear de maneiras fundamentais. A música linear é uma única unidade contígua, como uma linha reta se movendo em uma direção, com um começo, meio e fim. Mas a música adaptativa é mais como um labirinto que pode se mover em muitas direções com muitas possibilidades divergentes. A arte da criação e implementação de música interativa não se trata apenas de entender e implementar sistemas de música interativa (como os listados na imagem), mas também de analisar os componentes desses sistemas e enxergar todas essas possibilidades divergentes. A trilha sonora adaptativa tem sido utilizada desde Monkey Island 2 (1991), quando a LucasArts usou um software chamado iMUSE para fazer transições suaves entre músicas para drama, piadas e exploração. No jogo, isso é mais evidente na área de Woodtick, onde a entrada em diferentes salas faz com que a música transite para diferentes temas. Em uma cena em que você acorda piratas adormecidos, um acordeão é adicionado à música que já estava tocando, de forma natural. (BROWN, 2014).

No livro "A Composer's Guide to Game Music", o tópico sobre re-sequenciamento horizontal é introduzido com o seguinte parágrafo:
"Na música, nós mentalmente imaginamos o conceito efêmero de tempo como um fenômeno horizontal, movendo-se inexoravelmente da esquerda para a direita (como as notas em uma partitura). Da mesma forma, a maioria dos softwares de edição de áudio apresenta o áudio como uma forma de onda movendo-se horizontalmente da esquerda para a direita. A ideia fundamental por trás do re-sequenciamento horizontal é que, quando composto cuidadosamente e de acordo com certas regras, a sequência de uma composição musical pode ser reorganizada. Este processo ocorre enquanto a música continua a se mover para frente no eixo horizontal do tempo, permitindo uma transformação contínua e fluida do conteúdo musical." (PHILLIPS, 2014).

Na técnica de re-sequenciamento horizontal o compositor deve levar em consideração a fragmentação da trilha e como se dará a costura entre os diferentes trechos e estruturas. Com a evolução do software, fora possibilitada não apenas a transição de um trecho de trilha para outro como também é possibilitada a transição em pontos específicos e com fragmentos de pontes específicas, hoje a ferramenta possibilita que seja marcado os tempos e os possíveis sinais de entrada de uma micro composição e outra, permitindo que a transição entre seção A e C, possua uma ponte B, sem se alterar o tempo ou musicalidade de forma brusca, tornando imperceptível ao jogador a transição de um trecho ao outro e passando a impressão de ser uma única trilha linear.

Figura 7: Interface do FMOD onde é possível visualizar 6 trechos musicais que podem tocar em uma sequência definida via parâmetro, de forma dinâmica em tempo real. No trecho em destaque está tocando uma transição 10 entre as seções 4 e 0.
![Fonte 7: (FARLEY, 2018)](https://www.bermeo.dev/unibf23/img/fig7.jpg)

No jogo The Legend of Zelda: A Breath of the Wild (2017), o mundo de Hyrule onde se passa o jogo, está em ruínas após uma guerra, como forma narrativa de representar esse pano de fundo toda a trilha sonora é trabalhada com micro composições (representando a fragmentação do mundo) minimalistas (representando o vazio que restou após a devastação) tocado em piano (se afastando de todas as fanfarras épicas dos jogos anteriores), onde o foco está mais nas ambiências e narrativas contadas com o sound design. (BROWN, 2014). Como exemplo, o tema “Field (Day)” (Figura 8, abaixo) consiste em 6 compassos minimalistas de piano, fragmentados em 12 micro composições que são tocadas em ordem aleatória, com intervalos (silêncio) aleatórios, e podendo até mesmo conter notas com áudio revertido, com o som reproduzido de trás para frente. (SCRUFFY, 2019).

Figura 8: Tema Field (day) original, e parte das fragmentações usadas no jogo como trilha.
![Fonte 8: (SCRUFFY, 2019)](https://www.bermeo.dev/unibf23/img/fig8.jpg)

Em Breath of the Wild, a trilha sonora de combate alterna entre três escalas[^38] possíveis, equidistantes entre si, juntamente com uma versão estendida, elaborada e mais intensa em três escalas possíveis para inimigos mais difíceis. O tema junta muitos sons diferentes em ritmos estranhos, formando uma sopa de textura, quase como uma peça minimalista. Há alguns sons que só tocam quando você acerta um inimigo, não exatamente no momento, graças ao middleware que faz a gestão do áudio, esses sons tocam sincronizadamente na próxima batida[^39] apropriada da música, com camadas de som baseadas na força com que você acerta, com três trechos diferentes de piano nas três escalas possíveis do tema de combate. (SCRUFFY, 2019).

Além do re-sequenciamento horizontal, outra técnica muito importante e inerente à tecnologia sonora em jogos digitais é a re-orquestração vertical, também conhecida como sobreposição vertical ou estratificação. (MENEGUETTE, 2016). A re-orquestração vertical consiste em construir o som através de camadas, adicionando ou subtraindo instrumentos e/ou efeitos sonoros, que podem ser controladas por estados pré-definidos ou parâmetros (agrupados e/ou individuais), oferecendo uma vantagem ao mascarar cortes e permitir a construção de transições não-aparentes sem a necessidade de criação de novas micro composições. (MENEGUETTE, 2016). Em Journey (2012), a construção de camadas na música é notável no segundo cenário do jogo. O jogador precisa ativar mecanismos para construir uma grande ponte de tecido para chegar ao próximo destino. A trilha sonora reage a cada parte construída da ponte. A música começa com uma nota drone tocada por contrabaixos enquanto longos acordes de sintetizador proveem o material harmônico. Fragmentos do tema principal são tocados tanto por instrumentos de madeira quanto de metal. Quando o segundo mecanismo é acionado, um solo de contrabaixo em pizzicato é adicionado, dando uma sensação de pulso mais clara à música anteriormente difusa. Com a ativação do terceiro mecanismo, uma variação da melodia do tema é tocada pela primeira vez por uma flauta baixo, tornando a frase musical discernível. (ROVERAN, 2017).

Figura 9: Gráfico explicativo da sobreposição vertical na música do segundo cenário de Journey.
![Fonte 9: (ROVERAN, 2017)](https://www.bermeo.dev/unibf23/img/fig9.jpg)

A completude dessa seção do jogo leva cerca de sete minutos, tempo suficiente para o compositor explorar as camadas sonoras. A transição para outra música é feita quando o jogador começa a atravessar a ponte recém-construída. Uma nova música, agora mais agitada com amplo uso de percussão e sonoridade maior, indica o sucesso do jogador e o convida a descobrir o próximo estágio. (ROVERAN, 2017).

Segundo Luiz Roveran (2017), a escolha de revelar gradualmente as camadas sonoras estabelece um contraste com a condição do jogador dentro do universo de Journey. Não é apenas uma música que estabelece diálogos com a narrativa e dramática do jogo, mas também uma trilha musical que ajuda a indicar o caminho. Cada adição de instrumento indica que o jogador se aproxima da resolução do quebra-cabeça.

## 3. REVISÃO BIBLIOGRÁFICA

A revisão bibliográfica realizada para este trabalho teve como objetivo analisar criticamente as publicações correntes sobre os temas desenho de som, motivo condutor, re-sequenciamento horizontal e re-orquestração vertical como elementos narrativos na música, bem como a evolução da tecnologia e suas implicações na criação de narrativas mais imersivas ao longo do tempo. Essa metodologia é apropriada para o estudo de temas complexos e multidisciplinares, permitindo a compreensão de diversas perspectivas e abordagens existentes na literatura. As citações utilizadas foram devidamente referenciadas de acordo com as normas técnicas da área de estudo.

## 4. METODOLOGIA

De acordo com GIL (2002, p. 41), a pesquisa exploratória visa uma maior aproximação, uma maior familiaridade com o problema, explicitando-o. Com um planejamento mais flexível, permite-se a consideração de variados aspectos. A metodologia exploratória bibliográfica é uma abordagem de pesquisa que busca compreender um tema específico através da revisão de fontes bibliográficas existentes.

A pesquisa bibliográfica foi realizada a partir da revisão de diversas fontes, tais como livros, artigos científicos, dissertações, teses e artigos de revistas especializadas, além de fontes online, como vídeos do YouTube e artigos em sites especializados.

## 5. ANÁLISE DOS RESULTADOS

A análise dos dados coletados neste trabalho permitiu verificar a relevância dos elementos narrativos na música e como esses elementos influenciaram o desenvolvimento de jogos digitais. A partir da pesquisa realizada, foi possível destacar a importância da música como elemento narrativo em diferentes contextos, desde a música clássica até a música popular contemporânea.

O papel da música na construção de narrativas em jogos digitais também foi evidenciado, destacando a sua importância para a imersão do jogador e para a construção de uma experiência narrativa mais rica e envolvente. Além disso, o estudo apontou a evolução das técnicas de sound design no cinema e sua influência na construção narrativa em jogos digitais, bem como a importância das ferramentas que permitem a re-sequenciamento e re-orquestração em tempo real.

Em resumo, a análise dos dados coletados neste trabalho permite afirmar a importância dos elementos narrativos na música e como esses elementos têm influenciado o desenvolvimento de jogos digitais ao longo do tempo. Através do embasamento teórico apresentado, foi possível sustentar as afirmações realizadas e destacar a relevância da música na construção de uma experiência narrativa mais rica e envolvente em jogos digitais.

## 6. CONSIDERAÇÕES FINAIS

Neste trabalho, foi abordada a importância e evolução dos elementos narrativos na música e como eles afetam a construção de narrativas em jogos digitais. Através de uma ampla pesquisa, que incluiu música clássica, obras contemporâneas, e música popular, cinema e jogos ditais, onde destacou-se o papel fundamental da música como elemento narrativo, bem como a evolução das ferramentas que possibilitaram novas técnicas com o re-sequenciamento horizontal e a re-orquestração em tempo real.

O presente trabalho mostra a importância da música como elemento narrativo em jogos digitais e sua influência no desenvolvimento desta indústria, que hoje fatura mais do que a indústria do cinema. A constante evolução tecnológica e o uso de novas ferramentas, como os controles DualSense da Sony, que possuem feedback tátil com 2 canais de áudio, ainda há muito a ser explorado em termos de narrativa. Em conclusão, o papel do som na construção de narrativas em jogos digitais é fundamental e deve ser continuamente considerado, explorado e melhorado.

## 7. REFERÊNCIAS BIBLIOGRÁFICAS

- MOORE, C.; MARISH, E.; DUSABLON, K. [Design Is Audible - Designing sound for human experiences](https://youtu.be/FVNuVKy90Do). Youtube, 2019. Acesso em: 27 Abril 2021.

- KLEIN, C. [That Time America Outlawed Pinball](https://www.history.com/news/that-time-america-outlawed-pinball). History, 2016. Acesso em: 1 Maio 2021.

- LOBRUTTO, V. The Filmmaker's Guide to Production Design. Nova Iorque: Allworth Press, 2002.

- KREUTZ, K. [Quero ser Diretor de Arte](https://www.aicinema.com.br/quero-ser-diretor-de-arte/). Academia Internacional de Cinema, 2017. Acesso em: 5 Maio 2021.

- BARDINI, J. [Especial Oscar 2018: entendendo melhor as categorias técnicas – Som](https://cinemacomrapadura.com.br/colunas/480946/especial-oscar-2018-entendendo-melhor-as-categorias-tecnicas-som/). Cinema com Rapadura, 2018. Acesso em: 6 Maio 2021.

- PAULETTO, S.; HILLMAN, N. The Craftsman: The use of sound design to elicit emotions. The Soundtrack, Heslington, v. 7, n. 1, p. 5-23, Abril 2014. ISSN 1751-4207.

- DORLING KINDERSLEY LIMITED DK. Musicals: The Definitive Illustrated Story. 1. ed. Nova Iorque: DK Publishing, 2015.

- GLOBO LIVROS. O Livro da Música Clássica. 1. ed. Rio de Janeiro: Editora Globo SA, 2019.
BEZERRA, J. [Idade Média](https://www.todamateria.com.br/idade-media/). Toda Matéria, 2021. Acesso em: 6 Maio 2021.

- NOVAES, A. [O que são jogos AAA na atualidade, você conhece esse termo?](https://universoreverso.com.br/o-que-sao-jogos-aaa-na-atualidade-voce-esse-termo/) Universo Reverso, 2018. Acesso em: 6 Maio 2021.

- FERREIRA DA SILVA, M. A Poética do Teatro Urgente: No Eixo do Teatro Pós-Dramático. Vitória: Tese (Doutorado em Tecnologias da Inteligência e Design Digital) - Pontifica Universidade Católica de São Paulo, 2018.

- CADERNO DE MÚSICA EBC. [Você sabe o que é "Leitmotiv"?](https://radios.ebc.com.br/caderno-de-musica/edicao/2016-02/voce-sabe-o-que-e-leitmotiv) Empresa Brasil de Comunicação, 2016. Acesso em: 11 Maio 2021.

- MARTINELLI, L. [Vida de Nikolai Rimsky-Korsakov](https://www.concerto.com.br/noticias/arquivo/acervo-concerto-vida-de-nikolai-rimsky-korsakov). Acesso em: 12 Maio 2021.

- LEITURIA. [As mil e uma noites – 6 volumes - Tradução de Manuel João Gomes](https://leituria.com/pt/os-livros/prosa/as-mil-e-uma-noites-6-volumes-traducao-de-manuel-joao-gomes). Leituria, 2021. Acesso em: 12 Maio 2021.

- CADERNO DE MÚSICA EBC. [Ópera Completa traz "Príncipe Igor", de Borodin](https://radios.ebc.com.br/opera-completa/2017/11/opera-completa-traz-principe-igor-de-borodin). Empresa Brasil de Comunicação, 2017. Acesso em: 12 Maio 2021.

- METROPOLITANA. [Sinfonia Scheherazade](https://www.metropolitana.pt/musicalia/sinfonia-scheherazade/). Metropolitana, 2020. Acesso em: 12 Maio 2021.

- CONCERTOS ASTRA-FINAMAX. [Música erudita: diferentes gêneros dentro de um mesmo estilo](http://www.concertosastra-finamax.com.br/index.php/musica-erudita-diferentes-generos-dentro-de-um-mesmo-estilo/). Concertos Astra-Finamax, 2020. Acesso em: 12 Maio 2021.

- FOLHA ONLINE. [Ícone russo nacionaliza estilo de óperas](https://musicaclassica.folha.com.br/cds/12/). Coleção Folha de Música Clássica. Acesso em: 12 Maio 2021.

- RÁDIO E TELEVISÃO DE PORTUGAL. [Anatoly Lyadov](https://www.rtp.pt/antena2/destaques/anatoly-lyadov_2919). RTP Antena 2, 2014. Acesso em: 13 Maio 2021.

- JAMES, J. [Rimsky-Korsakov's Scheherazade - Inside The Music with Jonathan James](https://youtu.be/v7U8gGl5IIk). Youtube, 2017. Acesso em: 13 Maio 2021.

- GUAÍRA. [O que é um Solista?](http://guairamusica.com.br/2019/04/08/solista/) Guaíra Academia de Música e Artes, 2020. Acesso em: 13 Maio 2021.

- ALMEIDA, D. [Ballet de Repertório - Scherazade](http://www.mundobailarinistico.com.br/2015/03/ballet-de-repertorio-scherazade.html). Mundo Bailarinístico, 2015. Acesso em: 13 Maio 2021.

- DICTEROW, G. [Rimsky-Korsakov' Sheherazade: Solo Violin Part](http://www.violinexcerpts.com/wp-content/uploads/2012/07/DicterowMasterclass.pdf). Violin Excerpts, 2008. Acesso em: 13 Maio 2021.

- GRIFFITHS, S. A Critical Study of the Music of Rimsky-Korsakov,1844-1890. 2. ed. Nova Iorque: Garland, 1989.

- SINFÓNICA DE GALICIA. [Rimsky-Korsakov: Scheherazade op.35 - Leif Segerstam - Sinfónica de Galicia](https://youtu.be/zY4w4_W30aQ). Youtube, 2015. Acesso em: 14 Maio 2021.

- ARAÚJO, M. [Álbuns Conceituais: blog elege o top 10 do Metal](https://whiplash.net/materias/melhores/222568-avantasia.html). Whiplash, 2015. Acesso em: 14 Maio 2021.

- ORQUESTRA SINFÔNICA BRASILEIRA. [Glossário](https://www.osb.com.br/glossario). Orquestra Sinfônica Brasileira, 2021. Acesso em: 14 Maio 2021.

- BENNET, R. [Música do Século XIX](https://simontonrios.wixsite.com/simontonrios/musica-xix). Simonton Rios, 2020. Acesso em: 14 Maio 2021.

- FREIRE, É. [Álbuns conceituais: 8 clássicos que fizeram história](https://www.letras.mus.br/blog/albuns-conceituais/). Letras, 2020. Acesso em: 14 Maio 2021.

- LAST FM. [Pink Floyd Animals](https://www.last.fm/pt/music/Pink+Floyd/Animals/+wiki). Last.fm, 2016.. Acesso em: 14 Maio 2021.

- REED, R. [Coheed and Cambria Pause Sci-Fi Concept for Personal New Album](https://www.rollingstone.com/music/music-news/coheed-and-cambria-pause-sci-fi-concept-for-personal-new-album-53017/). Rolling Stone, 2015. Acesso em: 14 Maio 2021.

- MUELBOY. [I just decided to track the Keywork leitmotif through the discography. It would be great to create a visual map of recurring themes!](https://www.reddit.com/r/TheFence/comments/1xx8ji/i_just_decided_to_track_the_keywork_leitmotif/) Reddit, 2014. Acesso em: 14 Maio 2021.

- MEDEIROS, E. [Odair José: A saga da primeira ópera-rock brasileira](https://whiplash.net/materias/biografias/233023-odairjose.html). Whiplash, 2015. Disponivel em: <https://whiplash.net/materias/biografias/233023-odairjose.html>. Acesso em: 17 Maio 2021.

- ASCARI, B. A [Ópera Rock de Odair José - O Filho de José e Maria](https://youtu.be/1Vv0MTsSXWY). Youtube, 2020. Acesso em: 17 Maio 2021.

- FANTOM, A. [Drive na Voz](https://www.andrefantom.com.br/p6556.aspx). André Fantom, 2006. Acesso em: 17 Maio 2021.

- SILVEIRA, L. A Sinfonia de Tudo Que Há. São Paulo: Fresno, Dark Matter, Tratore, 2016.

- SOBRINHO, T. [Novo disco de Fresno apresenta montanha-russa sonora](https://www.gazetaonline.com.br/entretenimento/cultura/2016/12/novo-disco-de-fresno-apresenta-montanha-russa-sonora-1014005576.html). Gazeta Online, 2016. Acesso em: 17 Maio 2021.

- VIEIRA, D. [Jornada do Herói: as 12 etapas de Christopher Vogler e Joseph Campbell para contar uma história impecável!](https://comunidade.rockcontent.com/jornada-do-heroi/) Rock Content, 2019. Acesso em: 17 Maio 2021.

- HUGILL, A. [Chords](https://andrewhugill.com/manuals/violin/chords.html). The Orchestra: A User's Manual, 2005. Acesso em: 17 Maio 2021.

- VON BORELL, G. [Fresno incendeia o público do RJ na estreia da turnê “A Sinfonia de Tudo que Há”](https://www.tenhomaisdiscosqueamigos.com/2016/11/25/fresno-incendeia-o-publico-no-rj-na-estreia-da-turne-a-sinfonia-de-tudo-que-ha/). Tenho Mais Discos Que Amigos, 2016. Acesso em: 17 Maio 2021.

- FOSTER, G. [Com participação de Caetano Veloso e sem alarde, Fresno lança novo disco](https://gauchazh.clicrbs.com.br/cultura-e-lazer/musica/noticia/2016/10/com-participacao-de-caetano-veloso-e-sem-alarde-fresno-lanca-novo-disco-ouca-7777474.html). GHZ Música, 2016. Acesso em: 17 Maio 2021.

- RAFAEL, T. [Titãs lança primeira ópera-rock nacional](https://web.portalsucesso.com.br/home/titas-lanca-primeira-opera-rock-nacional). Sucesso, 2018. Acesso em: 17 Maio 2021.

- FAUSTINO, J. [Trilogia e outras designações de grupos de obras com temática comum](https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/trilogia-e-outras-designacoes-de-grupos-de-obras-com-tematica-comum/29181). Ciberdúvidas da Língua Portuguesa, 2010. Acesso em: 17 Maio 2021.

- DICIO. [alter ego.](https://www.dicio.com.br/alter-ego/) Dicio, 2021. Acesso em: 17 Maio 2021.

- HOSPITAL ISRAELITA ALBERT EINSTEIN. [Alzheimer](https://www.einstein.br/guia-doencas-sintomas/info/#5). Hospital Israelita Albert Einstein, 2021. Acesso em: 17 Maio 2021.

- CALDEIRA, P. [Uma experiência musical sobre demência: Everywhere at the end of time](https://shifter.sapo.pt/2020/12/everywhere-at-the-end-of-time/). Shifter, 2020. Acesso em: 17 Maio 2021.

- JOSEPH, J. [The Darkest Album I Have Ever Heard - Everywhere at The End of Time - A Bucket of Jake](https://youtu.be/l_x08kbj-Fk). Youtube, 2020. Acesso em: 17 Maio 2021.

- KEANE, P. [Howard Shore in The Lord of The Rings: How to use leitmotif technique to create a masterpiece?](https://taketones.com/blog/howard-shore-in-the-lord-of-the-rings-how-to-use-leitmotif-technique-to-create-a-masterpiece) TakeTones, 2021. Acesso em: 21 Maio 2021.

- AMORA, G. [Trilogia dos Dólares é exibida no Cineteatro São Luiz neste sábado](https://www.opovo.com.br/jornal/vidaearte/2017/09/trilogia-dos-dolares-e-exibida-no-cineteatro-sao-luiz-neste-sabado.html). O Povo Online, 2017. Acesso em: 21 Maio 2021.

- LIRA, E. [Como surgiu o cinema blockbuster?](https://www.legiaodosherois.com.br/2019/como-surgiu-o-cinema-blockbuster.html) Legião dos Heróis, 2019. Acesso em: 21 Maio 2021.

- VASCONCELOS, F. [Schehérezade - Rimsky Korsakov](http://guiadamusicaclassica.blogspot.com/2012/02/scheherezade-rimsky-korsakov.html). Guia da Música Clássica, 2012. Acesso em: 12 Maio 2021.

- GIL, A. C. Como elaborar Projetos de Pesquisa. Quarta edição. ed. São Paulo: Editora Atlas S.A., 2002.

- LUCAS, M. Áudio dinâmico para games: conceitos fundamentais e procedimentos de composição adaptativa. X SBGames. Salvador: SBGames. 2011.

- HUIZINGA, J. Homo Ludens. 4. ed. [S.l.]: Editora Perspectiva, v. Coleção Estudos #4, 2000.

- BOOTH, P. An Introduction to Human-Computer Interaction. 1ª edição. ed. [S.l.]: Psychology Press, 1989.

- PHILLIPS, W. [Horizontal Resquencing and Song Structure for Game Music Composers (From Spyder to Sackboy: GDC 2021)](https://winifredphillips.wpcomstaging.com/2021/08/15/horizontal-resquencing-and-song-structure-for-game-music-composers-from-spyder-to-sackboy-gdc-2021/). Composer Winifred Phillips – Thoughts about music, video games, etc., 2021. Acesso em: 26 Janeiro 2023.

- PHILLIPS, W. A Composer's Guide to Game Music. 1. ed. Londres: The MIT Press, 2014.

- VALENCIA-GARCIA, R. Technologies and Innovation. Guaiaquil: Springer International Publishing, 2016.

- NEFF , F.; PITT, I. [Using Spatial Audio in Game Technology for Expressing Mathematical Problems to Blind Students](https://www.igi-global.com/chapter/using-spatial-audio-game-technology/52507). IGI Global: International Academic Publisher, 2011. Acesso em: 26 Janeiro 2023.

- COLLINS, K. An Introduction to the History, Theory, and Practice of Video Game Music and Sound Design. Massachusetts: Massachusetts Institute of Technology, 2008.

- KING, D. [Conjuring the Sound Of Sand and Spice](https://www.nytimes.com/2021/10/22/movies/hans-zimmer-dune.html). The New York Times, Nova Iorque, v. C, n. 23, p. 1, Outubro 2021.

- JÚNIOR, A. [Som Diegético, Não Diegético e Meta Diegético](https://www.avmakers.com.br/blog/som-diegetico-nao-diegetico-e-meta-diegetico). avmakers, 2020. Acesso em: 27 Janeiro 2023.

- MICHAELS, S. [Inception soundtrack created entirely from Edith Piaf song](https://www.theguardian.com/music/2010/jul/29/inception-soundtrack-edith-piaf). The Guardian, 2010. Acesso em: 27 Janeiro 2023.

- HELERBROCK, R. [Dilatação do tempo](https://brasilescola.uol.com.br/fisica/dilatacao-tempo.htm). Brasil Escola. Acesso em: 27 Janeiro 2023.

- KOMOI. [This Interstellar Fan Theory About ‘Water Planet’ & The Ticking Sound In Background Proves Christopher Nolan’s Sheer Brilliance](https://www.koimoi.com/hollywood-news/this-interstellar-fan-theory-about-water-planet-the-ticking-sound-in-background-proves-christopher-nolans-sheer-brilliance/). Komoi, 2020. Acesso em: 27 Janeiro 2023.

- FONSECA, D. R. [O que é Melismas? Enfeite (ornamento) vocal](https://wimelo.com/vozecanto/tecnicas/o-que-e-melismas-enfeite-ornamento-vocal/). WiMELO, 2018. Acesso em: 27 Janeiro 2023.

- O REBE. [Nigunim](https://pt.chabad.org/library/article_cdo/aid/602997/jewish/Nigunim.htm). O Rebe, 2010. Acesso em: 27 Janeiro 2023.

- ARNOLD, L. [Como som afeta você: Usando Drones em sua música](https://ask.audio/articles/how-sound-affects-you-using-drones-in-your-music/pt). Ask Audio, 2013. Acesso em: 27 Janeiro 2023.

- ESTADÃO. [Gargantas prodigiosas](https://www.estadao.com.br/politica/neumanne/gargantas-prodigiosas/). Estadão, 2016. Acesso em: 27 Janeiro 2023.

- BROWN, M. [Adaptive Soundtracks in Games](https://youtu.be/b0gvM4q2hdI). Youtube, 2014. Acesso em: 27 Janeiro 2023.

- ROVERAN, L. Interatividade e música no videogame: um estudo de caso sobre as técnicas de composição para áudio dinâmio empregadas na trilha musical de Journey (2012). XXVII Congresso da Associação Nacional de Pesquisa e Pós-Gradução em Música. Campinas: [s.n.]. 2017. p. 1-10.

- FARLEY, D. [FMOD Adaptive Music Example](https://youtu.be/xZuLoeF7Xpg). Youtube, 2018. Acesso em: 29 Janeiro 2023.

- MENEGUETTE, L. A afinação do mundo virtual: identidade sonora em jogos digitais. São Paulo: Tese (Doutorado em Tecnologias da Inteligência e Design Digital) - Pontifica Universidade Católica de São Paulo, 2016. 232 p.

- SCRUFFY. ["Invisible" Sound Design in Breath of the Wild](https://youtu.be/Vgev9Gzybk8). Youtube, 2019. Acesso em: 29 Janeiro 2023.

- SOTER, M. [Quais são as escalas musicais?](https://www.musicdot.com.br/artigos/escalas-m) MusicDot, 2021. Acesso em: 29 Janeiro 2023.

- VALENTE, G. [O Que é Ritmo: Como o Tempo, a Batida e a Métrica Funcionam na Música](https://blog.landr.com/pt-br/o-que-e-ritmo-como-o-tempo-a-batida-e-a-metrica-funcionam-na-musica/). Landr Blog, 2020. Acesso em: 29 Janeiro 2023.

[^1]: O termo production designer (ou “designer de produção”) basicamente define o que costumamos chamar de diretor de arte – já que, nos Estados Unidos, art diretor significa cenógrafo. Aqui no Brasil, o primeiro longa em que um profissional assinou essa função foi “O Beijo da Mulher Aranha” em 1985. (KREUTZ, 2017)

[^2]: Uma obra costuma ser construída em três etapas. A pré-produção é onde o roteiro é elaborado e
os projetos e conceitos visuais e sonoros são pensados e definidos. A produção é a fase em que
ocorrem as filmagens. A pós-produção é a fase em que a obra é finalizada, onde ocorrem a
montagem e o tratamento de som e imagem visual para a sincronização final. (LOBRUTTO, 2002)

[^3]: AAA ou Triple A é usado para classificar aqueles jogos feitos por grandes empresas que gastam bastante dinheiro no marketing e criação de seu jogo. Hoje em dia o termo AAA é usado em jogos que nem mesmo foram lançados e virou mais uma frase usada pelas produtoras conquistarem a atenção dos jogadores e não é considerado um selo de qualidade baseado em nenhuma métrica. (NOVAES, 2018)

[^4]: Período da história que se estendeu do século V ao século XV (BEZERRA, 2021).

[^5]: Em português, obra de arte total, é um conceito estético oriundo do romantismo alemão do século XIX. Geralmente associado ao compositor alemão Richard Wagner, o termo refere-se à conjugação de música, teatro, canto, dança e artes plásticas, em uma única obra de arte. Wagner acreditava que, na antiga tragédia grega, esses elementos estavam unidos, mas, em algum momento, separaram-se. O compositor criticava o estado da ópera do seu tempo, em que toda ênfase era dada à música, em detrimento da qualidade do drama. (FERREIRA DA SILVA, 2018).

[^6]: O anel de nibelungo, em português.

[^7]: Motivo condutor, em português, conjunto de notas recorrente que denota um personagem ou suas lembranças. Os motivos foram muito usados, com sofisticação inédita em O anel de Wagner, em que todo o tecido musical – em especial na orquestra- foi criado a partir de fragmentos melódicos associados a diferentes personagens, ideias ou estados de alma. (GLOBO LIVROS, 2019).

[^8]: O poema sinfônico foi criado por Liszt, é uma obra para orquestra em um só movimento e também de sentido descritivo, mas geralmente mais longa e de construção mais livre. Para trazer unidade à música, ele usou o que chamava de transformação temática; essa expressão pomposa significa apenas que um tema básico é recorrente por toda a peça, mas em contínua transformação, de caráter e de espírito, de modo a corresponder a cada situação. (BENNET, 2020).

[^9]: Um dos compositores mais influentes da escola nacionalista romântica, ele foi responsável por recuperar, de maneira inovadora, a cultura tradicional russa e revolucionar a orquestração musical. (MARTINELLI, 2019).

[^10]: Baseada em "O conto da campanha de Igor", a história fala sobre a guerra contra os invasores polovetsianos, em 1185, quando o príncipe Igor Svyatoslavich e seu filho Vladimir ficaram em cativeiro. Borodin não conseguiu terminar a obra, que foi concluída por Nikolai Rimsky-Korsakov e Alexander Glazunov e estreou em 4 de novembro de 1890. Posteriormente, ficou conhecida principalmente devido às “Danças Polovetsianas”, interpretadas isoladamente em concertos. (CADERNO DE MÚSICA EBC, 2017).

[^11]: As Mil e Uma Noites é uma coleção de histórias e contos populares originárias do Médio Oriente e do sul da Ásia e compiladas em língua árabe a partir do século IX. No mundo moderno ocidental, a obra passou a ser amplamente conhecida a partir de uma tradução para o francês realizada em 1704 pelo orientalista Antoine Galland, que traduziu o original árabe do Dr. J. C. Mardruz, transformando-se num clássico da literatura mundial. (LEITURIA, 2021).

[^12]: Um dos mais importantes gêneros musicais. Diferente do concerto, não possui destaque de nenhum instrumento, sendo que cada um possui várias participações ocasionais, e orquestra de cordas carrega a melodia principal. A sinfonia surgiu no Classicismo, tendo sua consolidação com Haydn, considerado o pai da sinfonia. (CONCERTOS ASTRA-FINAMAX, 2020).

[^13]: Estudou piano, violino, contraponto e composição com Nikolai Rimsky-Korsakov no Conservatório de São Petersburgo, até que foi expulso por faltas, em 1878. Readmitido dois anos mais tarde, concluiu os seus estudos e simultaneamente começou a lecionar. Liadov tinha um grande talento como compositor, mas devido à sua insegurança nunca chegou a realizar as suas ambições musicais. As suas obras mais populares são as pequenas peças para piano e os poemas sinfónicos sobre temas tradicionais russos. Como professor, pode destacar-se o seu trabalho no ensino de importantes nomes do cenário musical russo da época como Sergei Prokofiev e Nikolai Miaskovski. (RÁDIO E TELEVISÃO DE PORTUGAL, 2014).

[^14]: Os compositores russos tinham o costume de utilizar escalas de tons inteiros para denotar alguém que é mau ou mágico. (JAMES, 2017).

[^15]: Em cada grupo de instrumentos da orquestra existe uma hierarquia implicitamente aceita, e cada grupo provê um solista (ou principal) que será o protagonista dos solos e da liderança do grupo. (GUAÍRA, 2020)

[^16]: Parada dupla é a técnica de tocar duas notas simultaneamente em um instrumento de cordas, como violino, viola, violoncelo e contrabaixo. (HUGILL, 2005).

[^17]: Parada tripla é a técnica de tocar três notas simultaneamente em um instrumento de cordas, como violino, viola, violoncelo e contrabaixo. (HUGILL, 2005).

[^18]: [Vídeo disponível no Youtube](https://youtu.be/zY4w4_W30aQ), cena em questão na minutagem 44:59.

[^19]: Peça que serve de introdução a uma ópera ou a outro tipo de composição ou espetáculo musical. (ORQUESTRA SINFÔNICA BRASILEIRA, 2021).

[^20]: Estilo de cantar usado por diversos cantores, principalmente do rock e metal. Normalmente enfatiza uma intenção agressiva, ou de força na interpretação das canções. Esse som faz um efeito muito interessante na forma de cantar, mas deve ser usado com muito cuidado e atenção, pois é muito fácil acabar com a voz em poucos minutos ou músicas cantando rasgado sem uso da técnica adequada. (FANTOM, 2006).

[^21]: Acordei ouvindo o pôr do sol; E cada nota guia um passo que eu dou no ar; Eu vivi tantos dias em desarmonia; Com a sinfonia de tudo que há (SILVEIRA, 2016).

[^22]: A Jornada do Herói ou Monomito é uma estrutura para contar histórias que nasceu com Joseph Campbell, na obra O Herói de Mil Faces. Depois foi adaptada por Christopher Vogler, na obra A Jornada do Escritor, para chegar nas 12 etapas hoje conhecidas como a Jornada do Herói.
As 12 etapas da Jornada do Herói são: o mundo comum; o chamado à aventura; recusa do chamado; encontro com o mentor; a travessia do primeiro limiar; provas, aliados e inimigos; aproximação da caverna secreta; a provação; a recompensa; o caminho de volta; a ressurreição; e o retorno com o elixir. (VIEIRA, 2019).

[^23]: Alguém que se considera uma segunda versão de si próprio. (DICIO, 2021).

[^24]: Conjunto de seis obras. (FAUSTINO, 2010).

[^25]: É uma doença degenerativa do cérebro que acomete pessoas com mais idade. Funções cerebrais como memória, linguagem, cálculo, comportamento são comprometidos de forma lentamente progressiva levando o paciente a uma dependência para executar suas atividades de vida diária. (HOSPITAL ISRAELITA ALBERT EINSTEIN, 2021).

[^26]: Conhecida como a Trilogia do Pistoleiro sem Nome, é uma série famosa de filmes do gênero western spaghetti, dirigidos por Sergio Leone e protagonizado por Clint Eastwood. Por um Punhado de Dólares (1964), Por uns Dólares a Mais (1965) e Três Homens em Conflito (1966) garantiram um status para o diretor e o ator, que, com muita eficácia, revolucionaram o cinema de faroeste. (AMORA, 2017).

[^27]: De origem inglesa, a palavra blockbuster pode ser traduzida como “Arrasa-Quarteirão”, e remonta do início dos anos 40, quando o mundo estava em guerra, e bombas eram lançadas de porta-aviões com o intuito de destruir quarteirões inteiros. No âmbito da indústria cinematográfica, a palavra foi usada pela primeira vez para se referir ao filme Tubarão, de 1975, que se tornou um fenômeno cultural e quebrou recordes inimagináveis para a época. (LIRA, 2019).

[^28]: Todos os sons presentes no universo ficcional em que se passa a ação. São aqueles que os personagens e público conseguem escutar. (JÚNIOR, 2020).

[^29]: É a diferença na medida do tempo por dois relógios idênticos e perfeitamente sincronizados que surge quando um desses relógios está se movendo em uma velocidade comparável à velocidade da luz ou ainda quando está sujeito a um campo gravitacional diferente do que se encontra o outro relógio. (HELERBROCK).

[^30]: Drones são tons sustentados essencialmente ou contínua que estabelecem um centro tonal para acompanhar instrumentos melódicos ou vozes. Um zumbido pode ser simplesmente a nota principal de uma chave especial, ou uma raiz e sua oitava. (ARNOLD, 2013)

[^31]: Melisma é um enfeite (ornamento) utilizado para estender as sílabas em uma palavra em um determinado trecho musical. (FONSECA, 2018)

[^32]: Canção da tradição cabalista/chassídica, geralmente sem palavras. (O REBE, 2010)

[^33]: O canto gutural, difônico ou dos harmônicos é executado em dois ou mais sons simultâneos emitidos pela garganta de uma única pessoa, que ao manipular os espaços da cavidade bucal ressalta os harmônicos da própria voz. A técnica é bastante popular na Ásia Central, de onde vem sua origem entre mongóis e tuvanos. (ESTADÃO, 2016)

[^34]: Refere-se àqueles eventos sonoros que reagem à interação direto do jogador. Em Super Mario Bros., por exemplo, um som interativo é o som que o personagem faz ao pular. (COLLINS, 2008).

[^35]: Refere-se ao som que reage aos estados de jogo, respondendo a vários parâmetros do jogo como contagens regressivas, saúde do jogador, saúde do inimigo etc. (COLLINS, 2008).

[^36]: Um motor de jogo ou game engine é um conjunto de software projetado principalmente para o desenvolvimento de jogos eletrônicos. As mais conhecidas são Unity 3D e Unreal Engine. (VALENCIA-GARCIA, 2016).

[^37]: Middleware é um software que permite aos desenvolvedores integrar ativos e implementar vários serviços em um ambiente de software maior. O Middleware de áudio permite aos designers de som anexar facilmente arquivos de som a um ambiente de jogo e determinar facilmente a interação desses arquivos com ativos existentes, como sprites gráficos, modelos, ambientes, entre outros. As mais conhecidas são FMOD e Wwise. (NEFF e PITT, 2011).

[^38]: Escala musical é uma sequência de notas determinadas que, em sua organização originária, parte dos sons mais graves até os mais agudos. Através dessas notas estruturam-se os acordes, campo harmônico (relação entre notas e acordes) e a melodia presentes em uma música. (SOTER, 2021).

[^39]: Dentro de um compasso, batida são os pulsos fortes que conduzem a pulsação. Se considerarmos o 4/4 comum, a batida forte incide na primeira semínima e as batidas fracas caem na segunda e na terceira. (VALENTE, 2020).

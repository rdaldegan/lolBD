insert into campeao values (null, 'Janna', 'A Fúria da Tormenta', 'Zaun', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Janna.png'));
insert into campeao values (null, 'Darius', 'A Mão de Noxus', 'Noxus', '4800', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Darius.png'));
insert into campeao values (null, 'Mordekaiser', 'O Revenã de Ferro', 'Noxus', '3150', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Mordekaiser.png'));
insert into campeao values (null, 'Ornn', 'O Fogo Sob a Montanha', 'Freljord', '6300', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Ornn.png'));
insert into campeao values (null, 'Morgana', 'A caída', 'Demacia', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Morgana.png'));
insert into campeao values (null, 'Fiddlesticks', 'O Terror Ancestral', 'Runeterra', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Fiddlesticks.png'));
insert into campeao values (null, 'AAtrox', 'A Espada Darkin', 'Runeterra', '4800', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Aatrox.png'));
insert into campeao values (null, 'Ahri', 'A Raposa de Nove Caudas', 'Ionia', '4800', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Ahri.png'));
insert into campeao values (null, 'Akali', 'A Assassina Renegada', 'Ionia', '3150', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Akali.png'));
insert into campeao values (null, 'Zed', 'O Mestre das Sombras', 'Ionia', '4800', LOAD_FILE('C:/Users/rafad/Imagens/Campeoes/Zed.png'));

insert into feiticos values (null, 'Flash', 'Teleporta seu campeão por uma curta distânciaem direção ao seu cursor', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Flash.png'));
insert into feiticos values (null, 'Curar', 'Cura 90-345 de Vida (dependendo do nível) do conjurador e o campeão aliado mais próximo do cursor do conjurador, remove efeitos de redução de cura e aumenta a velocidade de movimento dos campeões atingidos em 30% durante 1 segundos', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Curar.png'));
insert into feiticos values (null, 'Barreira', 'Protege seu campeão contra 115-455 de dano (dependendo do nível) por 2 segundos', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Barreira.png'));
insert into feiticos values (null, 'Purificar', 'Remove todos os desarmes (excluindo supressão) e diminui a duração deles em 65% pelos próximos 3 segundos', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Purificar.png'));
insert into feiticos values (null, 'Exaustão', 'Reduz a velocidade de movimento e de ataque do campeão inimigo em 65% e o dano causado em 40% durante 2.5 segundos. (650 de alcance)', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Exaustao.png'));
insert into feiticos values (null, 'Incendiar', 'Causa 70-410 (dependendo do nível) de dano verdadeiro, lhe concede visão do alvo e diminui a cura recebida em 50% ao longo 5 segundos.', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Incendiar.png'));
insert into feiticos values (null, 'Teleporte', 'Após 4 segundos, teleporta o campeão para a tropa, sentinela ou estrutura aliada escolhida', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Teleporte.png'));
insert into feiticos values (null, 'Fantasma', 'Concede um máximo de 28% a 45% de velocidade de movimento (dependendo do nível) após acelerar por 2 segundos e permite negar colisão com unidades durante 10 segundos.', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Fantasma.png'));
insert into feiticos values (null, 'Golpear', 'Causa de 390 a 1000 de dano verdadeiro (dependendo do nível) na unidade alvo, exceto aliados e campeões inimigos. Restaura Vida com base na sua Vida máxima quando usado contra um monstro.', LOAD_FILE('C:/Users/rafad/Imagens/Feiticos/Golpear.png'));

insert into itens values (null, 'Anel de Doran', '+15 de Poder de Habilidade, +70 de Vida. Foco: os Ataques causam 5 de Dano Físico adicional a tropas. Sifão: abater uma tropa restaura 6 de mana. Caso você não possa receber mana, restaura 3 de vida.', '400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/AnelDeDoran.png'));
insert into itens values (null, 'Espada Longa', '+10 de Dano de Ataque', '350', LOAD_FILE('C:/Users/rafad/Imagens/Itens/EspadaLonga.png'));
insert into itens values (null, 'Couraça de Pano', '+15 de Armadura', '300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/CouracaDePano.png'));
insert into itens values (null, 'Botas', '+25 de Velocidade de Movimento', '300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Botas.png'));
insert into itens values (null, 'Adaga', '+12% de Velocidade de Ataque', '300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Adaga.png'));
insert into itens values (null, 'Força do Vendaval', '+ 55 de dano de ataque. + 20% de velocidade de ataque. + 20% de chance de acerto crítico. Ativo - Erupção das Brumas: Avança na direção-alvo, disparando três projéteis no inimigo com a Vida mais baixa que estiver próximo ao destino do avanço (priorizando Campeões). Causa um total de 180 - 315 (nos níveis ≤10 - 18) (+45% de DdA adicional) de Dano Mágico, aumentado em até 50% contra alvos com a Vida baixa (90s de Tempo de Recarga). Passivo Mítico: Concede a todos os itens Lendários 3% de Velocidade de Movimento.', '3400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/ForcaDoVendaval.png'));
insert into itens values (null, 'Mata-Cráquens', '+60 de dano de ataque. + 25% da velocidade de ataque. + 20% de chance de acerto crítico. Derrubar: Cada terceiro Ataque básico causa 60 (+30% de DdA adicional) de Dano Verdadeiro adicional. Passivo Mítico: Concede a todos os itens Lendários 10% de Velocidade de Ataque.', '3400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/MataCraquens.png'));
insert into itens values (null, 'Arco-Escudo Imortal', '+50 de dano de ataque. + 15% de velocidade de ataque. + 20% de chance de acerto crítico. + 12% de roubo de vida. Salva-vidas: Ao sofrer dano que reduziria sua Vida a menos de 30%, você recebe 250 - 700 (nos níveis ≤10 - 18) de Escudo por 3s. Além disso, concede 15% de Roubo de Vida por 8s (90s de Tempo de Recarga). Passivo Mítico: Concede a todos os itens Lendários 5 de Dano de Ataque e 50 de Vida.', '3400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/ArcoEscudo.png'));
insert into itens values (null, 'Égide de Fogo Solar', '+450 Vida. +30 armadura. +30 resistência mágica. +15 de aceleração de habilidade. Imolar: Causa 20 - 40 (nos níveis 1 - 18) (+1% de Vida adicional) de Dano Mágico por segundo aos inimigos próximos (aumentado em 50% contra tropas e 200% contra monstros). Causar dano a Campeões inimigos ou monstros épicos com esse efeito adiciona um acúmulo, aumentando em 12% o dano subsequente de Imolar por 5s (máximo de 6 acúmulos). Toque Flamejante: Com o máximo de acúmulos de Imolar, seus Ataques queimam inimigos próximos com o dano de Imolar a cada segundo por 3s. Passivo Mítico: Concede a todos os itens Lendários 5 de Aceleração de Habilidade.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/EgideDeFogo.png'));
insert into itens values (null, 'Manopla do Raio de Gelo', '+350 Vida. +50 armadura. +25 resistência mágica. +15 de aceleração de habilidade. Imolar: Causa 20 - 40 (nos níveis 1 - 18) (+1% de Vida adicional) de Dano Mágico por segundo aos inimigos próximos (aumentado em 50% contra tropas e 200% contra monstros). Prisão Nevada: Ataques básicos criam uma zona que causa Lentidão por 1,5s (4s de Tempo de Recarga). Inimigos que se moverem pela zona sofrem 30% de Lentidão (+4% a cada 1000 de Vida máxima). Passivo Mítico: Concede a todos os itens Lendários 100 de Vida e aumenta o tamanho do Campeão em 7,5%.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/ManoplaDoRaio.png'));
insert into itens values (null, 'Quimiotanque Turbo', '+350 Vida. +25 armadura. +50 resistência mágica. +15 de aceleração de habilidade. Imolar: Causa 20 - 40 (nos níveis 1 - 18) (+1% de Vida adicional) de Dano Mágico por segundo aos inimigos próximos (aumentado em 50% contra tropas e 200% contra monstros). Sobrecarregado (Ativo): Concede 75% de Velocidade de Movimento ao se mover em direção a torres e Campeões inimigos por 4s. Ao aproximar-se de um inimigo (ou depois de 4s), uma onda é emitida, causando 40% de Lentidão a Campeões próximos por 2s (90s de Tempo de Recarga). Passivo Mítico: Concede a todos os itens Lendários 5% de Tenacidade e Resistência a Lentidão.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Quimiotanque.png'));
insert into itens values (null, 'Crepúsculo de Draktharr', '+55 de dano de ataque. +18 letalidade. +20 aceleração de habilidade. Predador Noturno: Atacar um Campeão causa 100 (+30% de DdA adicional) de Dano Físico adicional e 99% de Lentidão por 0,25s (15s de Tempo de Recarga). Se um Campeão a quem você tenha causado dano nos últimos 3s for abatido, esse Tempo de Recarga será redefinido e você ficará Invisível por 1,5s. Mítico: Concede a todos os itens Lendários 5 de Aceleração de Habilidade.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/CrepusculoDeDraktharr.png'));
insert into itens values (null, 'Eclipse', '+55 de dano de ataque. +18 letalidade. + 10% vampirismo universal. Lua Sempre Crescente: Atingir um Campeão com 2 Ataques ou Habilidades separados dentro de 1,5s causa 8% da Vida máxima do alvo como Dano Físico adicional, concedendo a você 30% de Velocidade de Movimento e 150 [(+40% de DdA adicional) para Campeões de ataque corpo a corpo] ou 100 [(+30% de DdA adicional) para Campeões de ataque à distância] de Escudo por 2s (6s de Tempo de Recarga para Campeões de ataque corpo a corpo, 12s de Tempo de Recarga para Campeões de ataque à distância). Mítico: Concede a todos os itens Lendários 4% de Penetração de Armadura.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Eclipse.png'));
insert into itens values (null, 'Garra do Espreitador', '+55 de dano de ataque. +21 letalidade. +10 aceleração de habilidade. Passos de Areia (Ativo): Avança e atravessa o inimigo-alvo, causando 100 (+30% de DdA adicional) de Dano Físico. Pelos próximos 3s, você causa 15% a mais de dano ao alvo (60s de Tempo de Recarga).Mítico: Concede a todos os itens Lendários 5 de Letalidade.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/GarraDoEspreitador.png'));
insert into itens values (null, 'Angústia de Liandry', '+80 poder de habilidade. +600 Mana. +20 de aceleração de habilidade. Tormento: Causar dano com Habilidades faz com que os inimigos sofram queimaduras equivalentes a 15 (+2,5% de PdH) +1% da Vida máxima como Dano Mágico por segundo durante 4s. Recebe 5% de Penetração Mágica por segundo contra alvos que estiverem sofrendo queimaduras (até 25%). Mítico: Concede a todos os itens Lendários 5 de Aceleração de Habilidade.', '3400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/AngustiaDeLiandy.png'));
insert into itens values (null, 'Tormenta de Luden', '+80 poder de habilidade. +10 penetração mágica. +600 mana. +10 de aceleração de habilidade. Eco: Causar dano com Habilidades a um inimigo causa 100 (+15% de PdH) de Dano Mágico adicional ao alvo e a 3 inimigos próximos, além de conceder a você 30% de Velocidade de Movimento por 2s (10s de Tempo de Recarga). Mítico: Concede a todos os itens Lendários 5 de Penetração Mágica.', '3400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/TormentaDeLuden.png'));
insert into itens values (null, 'Glacieterno', '+80 poder de habilidade. +200 Vida. +600 Mana. +10 de aceleração de habilidade. Geleira: Causa 100 (+30% de PdH) de Dano Mágico em cone e 65% de Lentidão aos inimigos por 1,5s. Inimigos no centro do cone são Enraizados (20s de Tempo de Recarga). Mítico: Concede a todos os itens Lendários 15 de Poder de Habilidade.', '3400', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Glacieterno.png'));
insert into itens values (null, 'Explocinturão Hextec', '+80 poder de habilidade. +250 Vida. +15 de aceleração de habilidade. Supersônico (Ativo): Avança na direção-alvo, disparando um arco de mísseis mágicos que causa 200 - 300 (níveis 1 - 18) (+15% de PdH) de Dano Mágico. Depois, concede 75% de Velocidade de Movimento ao mover-se em direção a Campeões inimigos por 2s (40s de Tempo de Recarga). Mítico: Concede a todos os itens Lendários 5 de Penetração Mágica.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/EsplocinturaoHextec.png'));
insert into itens values (null, 'Criafendas', '+80 poder de habilidade. +15 de aceleração de habilidade. +150 Vida. + 15% vampirismo universal. Corrupção do Vazio: Para cada segundo de combate contra Campeões, causa 3% de dano adicional (máximo de 15%). Com força máxima, o dano adicional é causado como Dano Verdadeiro. Mítico: Concede a todos os itens Lendários 5% de Penetração Mágica.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Criafendas.png'));
insert into itens values (null, 'Colhedor Noturno', '+80 poder de habilidade. +250 Vida. +15 de aceleração de habilidade. Laceração Espiritual: Causar dano a um Campeão causa 175 - 250 (nos níveis 1 - 18) (+15% de PdH) de Dano Mágico adicional e concede a você 25% de Velocidade de Movimento por 1,5s (60s de Tempo de Recarga por inimigo). Mítico: Concede a todos os itens Lendários 5 de Aceleração de Habilidade.', '3200', LOAD_FILE('C:/Users/rafad/Imagens/Itens/ColhedorNoturno.png'));
insert into itens values (null, 'Força da Trindade', '+35 de dano de ataque. + 35% de velocidade de ataque. +200 Vida. +10 aceleração de habilidade. Golpe Tríplice: Ataques básicos concedem 25 de Velocidade de Movimento por 3s. Caso o alvo seja um Campeão, aumenta seu Dano de Ataque base em 6%, acumulando até 5 vezes (aumento máximo de 30%). Lâmina Arcana: Depois de usar uma Habilidade, seu próximo Ataque básico é fortalecido e causa 200% do Dano de Ataque base (1,5s de Tempo de Recarga). Passivo Mítico: Concede a todos os itens Lendários 10% de Velocidade de Ataque.', '3300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/ForcaDaTrindade.png'));
insert into itens values (null, 'Hemodrenário', '+45 dano de ataque. +400 Vida. +20 aceleração de habilidade. + 150% regeneração de vida. Corte Sedento (Ativo): Causa 110% do seu Dano de Ataque a inimigos próximos. Restaura Vida equivalente a 20% do seu Dano de Ataque, além de 12% da sua Vida perdida para cada Campeão atingido (15s de Tempo de Recarga, afetado por Aceleração de Habilidade). Agressão: Concede 1% de Dano de Ataque para cada 5% de Vida perdida (máximo de 15% de DdA). Mítico: Concede a todos os itens Lendários 5 de Aceleração de Habilidade.', '3300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Hemodrenario.png'));
insert into itens values (null, 'Quebrapassos', '+50 de dano de ataque. + 20% de velocidade de ataque. +300 Vida. +10 aceleração de habilidade. Corte Obstante (Ativo): Desfere um golpe a uma curta distância e causa 110% de seu Dano de Ataque a inimigos próximos, causando a eles 60% de Lentidão que decai ao longo de 2s (20s de Tempo de Recarga, afetado por Aceleração de Habilidade). Marcha Heroica: Causar Dano Físico concede 30 de Velocidade de Movimento por 2s. Mítico: Concede a todos os itens Lendários 3% de Velocidade de Movimento.', '3300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Quebrapassos.png'));
insert into itens values (null, 'Ruptor Divino', '+40 de dano de ataque. +400 Vida. +20 aceleração de habilidade. Lâmina Arcana: Depois de usar uma Habilidade, seu próximo Ataque é fortalecido e causa 10% da Vida máxima do alvo como Dano Físico adicional (1,5s de Tempo de Recarga). Se o alvo for um Campeão, restaura 50% do dano causado (30% para Campeões de ataque à distância). Mítico: Concede a todos os itens Lendários 5% de Penetração de Armadura e 5% de Penetração Mágica.', '3300', LOAD_FILE('C:/Users/rafad/Imagens/Itens/RuptorDivino.png'));
insert into itens values (null, 'Hino Bélico de Shurelya', '+350 Vida. +20 aceleração de habilidade. + 5% de velocidade de movimento. + 50% de regeneração de mana. Inspiração (Ativo): Concede a você e aos aliados próximos 40% de Velocidade de Movimento, que decai ao longo de 4s, e 40 - 60 (nos níveis 1 - 18) de Dano Mágico adicional nos próximos 3 Ataques básicos ou Habilidades que atingirem Campeões inimigos (90s de Tempo de Recarga). Mítico: Concede a todos os itens Lendários 2,5% de Velocidade de Movimento.', '2700', LOAD_FILE('C:/Users/rafad/Imagens/Itens/Shurelya.png'));
insert into itens values (null, 'Medalhão dos Solari de Ferro', '+200 Vida. +20 aceleração de habilidade. +30 resistência mágica. +30 armadura. Devoção (Ativo):Concede aos aliados próximos 250 - 420 (nos níveis 1 - 18 do aliado) de Escudo que decai ao longo de 2,5s (90s de Tempo de Recarga). Consagração: Concede 5 de Armadura e Resistência Mágica a Campeões aliados próximos. Mítico: Concede a todos os itens Lendários 2 de Armadura e Resistência Mágica com Consagração.', '2700', LOAD_FILE('C:/Users/rafad/Imagens/Itens/MedalhaoSolari.png'));
insert into itens values (null, 'Regenerador de Pedra Lunar', '+200 Vida. +40 poder de habilidade. +20 aceleração de habilidade. + 100% de regeneração de mana. Graça Estrelada: Ao afetar Campeões com Ataques ou Habilidades em combate, restaura 30 - 60 (nos níveis do aliado 1 - 18) de Vida ao aliado próximo mais ferido (2s de Tempo de Recarga). Cada segundo em combate com Campeões aumenta o efeito de cura em 37,5% (máximo de +150%). Mítico: Concede a todos os itens Lendários 5 de Aceleração de Habilidade.', '2700', LOAD_FILE('C:/Users/rafad/Imagens/Itens/PedraLunar.png'));
insert into itens values (null, 'Mandato Imperial', '+200 Vida. +40 poder de habilidade. +20 aceleração de habilidade. + 100% de regeneração de mana. Marca da Desavença: Habilidades que causam Lentidão ou imobilizam um Campeão causam 60 - 100 (nos níveis 1 - 18) de Dano Mágico adicional e o marcam por 4s. O dano causado pelo Campeão aliado detona a marca, causando 60 - 100 (nos níveis do aliado 1 - 18) de Dano Mágico adicional e concedendo a vocês dois 20% de Velocidade de Movimento por 2s (6s de Tempo de Recarga por inimigo). Mítico: Concede a todos os itens Lendários 15 de Poder de Habilidade.', '2700', LOAD_FILE('C:/Users/rafad/Imagens/Itens/MandatoImperial.png'));



insert into skins values (null, 'Ornn Sabugueiro', '4', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Skins/OrnnSabugueiro.png'));
insert into skins values (null, 'Deus-Rei Darius', '2', '1820', LOAD_FILE('C:/Users/rafad/Imagens/Skins/DariusDeusRei.png'));
insert into skins values (null, 'Darius Velho Oeste', '2', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Skins/DariusVelhoOeste.png'));
insert into skins values (null, 'Mordekaiser Infernal', '3', '520', LOAD_FILE('C:/Users/rafad/Imagens/Skins/MordekaiserInfernal.png'));
insert into skins values (null, 'Janna Rainha de Batalha', '1', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Skins/JannaRainha.png'));
insert into skins values (null, 'Morgana Noiva Fantasma', '5', '975', LOAD_FILE('C:/Users/rafad/Imagens/Skins/MorganaNoivaFantasma.png'));
insert into skins values (null, 'Fiddlesticks Festa Surpresa', '6', '975', LOAD_FILE('C:/Users/rafad/Imagens/Skins/FiddlesticksFestaSurpresa.png'));
insert into skins values (null, 'AAtrox Justiceiro', '7', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Skins/AatroxJusticeiro.png'));
insert into skins values (null, 'Ahri Sabugueiro', '8', '975', LOAD_FILE('C:/Users/rafad/Imagens/Skins/AhriSabugueiro.png'));
insert into skins values (null, 'Akali K/DA ALL OUT', '9', '1820', LOAD_FILE('C:/Users/rafad/Imagens/Skins/AkaliKDA.png'));
insert into skins values (null, 'Zed PsyOps', '10', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Skins/ZedPsyOps.png'));
insert into skins values (null, 'Akali True Damage', '9', '1350', LOAD_FILE('C:/Users/rafad/Imagens/Skins/AkaliTrueDamage.png'));
insert into skins values (null, 'PROJETO: Akali', '9', '975', LOAD_FILE('C:/Users/rafad/Imagens/Skins/AkaliProjeto.png'));



insert into habilidades values (null, 'P', 'Ornn recebe Armadura e Resistência Mágica adicionais de todas as origens. Ele pode gastar ouro para forjar itens não consumíveis em qualquer lugar. Além disso, ele pode criar itens magistrais para si mesmo e para seus aliados.', 'Forja Viva', '4');
insert into habilidades values (null, 'Q', 'Ornn bate no chão, dispersando uma fissura que causa dano e reduz a velocidade dos inimigos atingidos. Após um breve intervalo, um pilar de magma se forma no ponto final.', 'Ruptura Vulcânica', '4');
insert into habilidades values (null, 'W', 'Ornn avança cuspindo fogo. Inimigos atingidos pelo último sopro de fogo tornam-se Frágeis.', 'Fôlego do Fole', '4');
insert into habilidades values (null, 'E', 'Ornn se lança em investida, causando dano aos inimigos sobre os quais passar. Se Ornn colidir com o terreno enquanto estiver em investida, o impacto criará uma onda de choque que causará dano e arremessará os inimigos ao ar.', 'Investida Calcinante', '4');
insert into habilidades values (null, 'R', 'Ornn invoca um elemental gigante em um ponto, que viaja até ele cada vez mais rápido. Inimigos atropelados pelo elemental sofrem dano, têm a velocidade reduzida e ficam Frágeis. Ornn pode reconjurar a habilidade para dar uma investida no elemental para redirecioná-lo na direção em que ele o acertar, fazendo com que o elemental arremesse ao ar todos os inimigos que ele atingir, causando o mesmo dano e reaplicando Frágil.', 'Chamado do Deus da Forja', '4');



insert into jogador values (null, 'luckss98', 'M', 'emaildoLucas@gmail.com', '123456789', '22', '5200', '1000', '1', '0', '17');
insert into jogador values (null, 'Linkler', 'M', 'emaildoRafael@gmail.com', 'senha123', '23', '10320', '1800', '10', '2', '1');
insert into jogador values (null, 'Peedrinho Boy', 'M', 'emaildoPedro@gmail.com', 'senhaABC', '22', '10000', '800', '5', '2', '3');
insert into jogador values (null, 'redz 00', 'M', 'emailgenerico@gmail.com', 'vamosjogar', '18', '3000', '0', '0', '3', '5');
insert into jogador values (null, 'matanerd', 'F', 'emailfulana@gmail.com', 'senhakkk', '20', '12000', '1200', '2', '3', '1');
insert into jogador values (null, 'claimstaker', 'M', 'cleitinhomatador@gmail.com', 'marmota', '12', '0', '0', '0', '1', '1');
insert into jogador values (null, 'Juice Hasselmann', 'M', 'joao@gmail.com', 'qwerty', '22', '50000', '10', '0', '6', '3');
insert into jogador values (null, 'napoleao', 'M', 'napoleao@gmail.com', 'monoyasuo', '16', '20000', '1000', '1', '5', '0');
insert into jogador values (null, 'Princess She Ra', 'F', 'amigadojoao@gmail.com', 'oitchaufeliznatal', '19', '536', '20', '12', '3', '9');
insert into jogador values (null, 'chaperto', 'M', 'felipechaperto@gmail.com', 'chaperto123', '22', '9960', '850', '1', '1', '1');



insert into maestria values ('158.540', '7', '1', '1');
insert into maestria values ('304.592', '7', '1', '2');
insert into maestria values ('94.158', '7', '1', '3');
insert into maestria values ('60.412', '5', '2', '1');
insert into maestria values ('160.532', '7', '2', '6');
insert into maestria values ('77.086', '7', '2', '5');
insert into maestria values ('76.855', '6', '1', '5');
insert into maestria values ('50.123', '5', '2', '4');
insert into maestria values ('99.861', '7', '3', '6');
insert into maestria values ('25.904', '5', '4', '1');
insert into maestria values ('1.023', '1', '5', '2');
insert into maestria values ('30.215', '5', '6', '5');
insert into maestria values ('2.014', '2', '7', '7');
insert into maestria values ('6.541', '3', '8', '10');
insert into maestria values ('13.985', '4', '9', '8');
insert into maestria values ('312.021', '7', '10', '9');
insert into maestria values ('1.536', '1', '3', '2');
insert into maestria values ('0.245', '0', '7', '3');
insert into maestria values ('60.245', '6', '8', '4');
insert into maestria values ('51.375', '6', '4', '5');
insert into maestria values ('30.999', '5', '5', '7');
insert into maestria values ('6.045', '3', '6', '8');
insert into maestria values ('658.896', '7', '9', '9');
insert into maestria values ('654.231', '7', '10', '10');



insert into skins_jogador values ('1', '2');
insert into skins_jogador values ('1', '5');
insert into skins_jogador values ('1', '4');
insert into skins_jogador values ('2', '5');
insert into skins_jogador values ('2', '6');
insert into skins_jogador values ('1', '6');
insert into skins_jogador values ('2', '1');
insert into skins_jogador values ('4', '5');
insert into skins_jogador values ('5', '2');
insert into skins_jogador values ('6', '6');
insert into skins_jogador values ('7', '8');
insert into skins_jogador values ('8', '11');
insert into skins_jogador values ('9', '9');
insert into skins_jogador values ('2', '7');
insert into skins_jogador values ('3', '3');
insert into skins_jogador values ('7', '4');
insert into skins_jogador values ('8', '1');
insert into skins_jogador values ('4', '6');
insert into skins_jogador values ('6', '9');
insert into skins_jogador values ('9', '10');
insert into skins_jogador values ('10', '11');
insert into skins_jogador values ('1', '3');
insert into skins_jogador values ('9', '12');
insert into skins_jogador values ('9', '13');



insert into partida values (null, '00:39:06');
insert into partida values (null, '00:26:32');
insert into partida values (null, '00:31:45');
insert into partida values (null, '00:32:10');
insert into partida values (null, '00:29:09');



insert into jogador_partida values (null, '15390', '27687', '41291', '134', '49', '1', '1', '4', '3', 'A', 'D');
insert into jogador_partida values (null, '4222', '4218', '8476', '10', '29', '1', '2', null, '1', 'A', 'D'); 
insert into jogador_partida values (null, '9592', '12356', '29414', '155', '20', '1', '3', '6', '5', 'V', 'V');
insert into jogador_partida values (null, '15337', '24055', '35710', '170', '17', '3', '1', null, '6', 'A', 'D');
insert into jogador_partida values (null, '15553', '31031', '36948', '118', '17', '2', '1', '1', '4', 'V', 'V');
insert into jogador_partida values (null, '16349', '31689', '56090', '200', '20', '4', '1', '5', '1', 'A', 'D');
insert into jogador_partida values (null, '17156', '24080', '39057', '250', '8', '5', '1', '2', '2', 'A', 'D');
insert into jogador_partida values (null, '13752', '23437', '43746', '59', '43', '6', '1', '6', '5', 'A', 'D');
insert into jogador_partida values (null, '15811', '25223', '41046', '249', '20', '7', '1', '8', '7', 'V', 'V');
insert into jogador_partida values (null, '14582', '32299', '30126', '180', '29', '8', '1', '11', '10', 'V', 'V');
insert into jogador_partida values (null, '24396', '68440', '32988', '275', '19', '9', '1', '9', '8', 'V', 'V');
insert into jogador_partida values (null, '11621', '16453', '34963', '29', '43', '10', '1', null, '9', 'V', 'V');
insert into jogador_partida values (null, '5591', '8230', '16371', '111', '13', '2', '2', '7', '6', 'A', 'D');
insert into jogador_partida values (null, '6583', '8226', '10893', '156', '16', '3', '2', '3', '2', 'A', 'D');
insert into jogador_partida values (null, '6607', '5715', '20400', '101', '15', '7', '2', '4', '3', 'A', 'D');
insert into jogador_partida values (null, '6299', '8332', '11561', '111', '8', '8', '2', '1', '4', 'A', 'D');
insert into jogador_partida values (null, '5944', '4226', '8261', '28', '24', '4', '2', '6', '5', 'V', 'V');
insert into jogador_partida values (null, '9677', '14504', '11648', '178', '19', '5', '2', null, '7', 'V', 'V');
insert into jogador_partida values (null, '9057', '9454', '12900', '169', '7', '6', '2', '9', '8', 'V', 'V');
insert into jogador_partida values (null, '6339', '6778', '16472', '88', '16', '9', '2', '10', '9', 'V', 'V');
insert into jogador_partida values (null, '8963', '13385', '9111', '176', '10', '10', '2', '11', '10', 'V', 'V');



insert into feiticos_partida values (null, '1', '1', '1');
insert into feiticos_partida values (null, '1', '7', '1');
insert into feiticos_partida values (null, '4', '1', '1');
insert into feiticos_partida values (null, '4', '2', '1');
insert into feiticos_partida values (null, '6', '1', '1');
insert into feiticos_partida values (null, '6', '5', '1');
insert into feiticos_partida values (null, '7', '1', '1');
insert into feiticos_partida values (null, '7', '7', '1');
insert into feiticos_partida values (null, '8', '6', '1');
insert into feiticos_partida values (null, '8', '9', '1');
insert into feiticos_partida values (null, '5', '1', '1');
insert into feiticos_partida values (null, '5', '7', '1');
insert into feiticos_partida values (null, '10', '1', '1');
insert into feiticos_partida values (null, '10', '2', '1');
insert into feiticos_partida values (null, '11', '1', '1');
insert into feiticos_partida values (null, '11', '3', '1');
insert into feiticos_partida values (null, '12', '4', '1');
insert into feiticos_partida values (null, '12', '8', '1');
insert into feiticos_partida values (null, '14', '1', '1');
insert into feiticos_partida values (null, '14', '9', '1');
insert into feiticos_partida values (null, '2', '1', '2');
insert into feiticos_partida values (null, '2', '5', '2');
insert into feiticos_partida values (null, '13', '1', '2');
insert into feiticos_partida values (null, '13', '9', '2');
insert into feiticos_partida values (null, '14', '1', '2');
insert into feiticos_partida values (null, '14', '8', '2');
insert into feiticos_partida values (null, '15', '1', '2');
insert into feiticos_partida values (null, '15', '7', '2');
insert into feiticos_partida values (null, '16', '1', '2');
insert into feiticos_partida values (null, '16', '4', '2');
insert into feiticos_partida values (null, '17', '1', '2');
insert into feiticos_partida values (null, '17', '7', '2');
insert into feiticos_partida values (null, '18', '1', '2');
insert into feiticos_partida values (null, '18', '2', '2');
insert into feiticos_partida values (null, '19', '1', '2');
insert into feiticos_partida values (null, '19', '3', '2');
insert into feiticos_partida values (null, '20', '5', '2');
insert into feiticos_partida values (null, '20', '9', '2');
insert into feiticos_partida values (null, '21', '1', '2');
insert into feiticos_partida values (null, '21', '2', '2');



insert into itens_partida values (null, '1', '1', '1');
insert into itens_partida values (null, '1', '1', '19');
insert into itens_partida values (null, '4', '1', '20');
insert into itens_partida values (null, '6', '1', '28');
insert into itens_partida values (null, '7', '1', '23');
insert into itens_partida values (null, '8', '1', '15');
insert into itens_partida values (null, '5', '1', '9');
insert into itens_partida values (null, '10', '1', '23');
insert into itens_partida values (null, '11', '1', '20');
insert into itens_partida values (null, '12', '1', '16');
insert into itens_partida values (null, '12', '1', '4');
insert into itens_partida values (null, '14', '1', '2');
insert into itens_partida values (null, '14', '1', '4');
insert into itens_partida values (null, '14', '1', '19');
insert into itens_partida values (null, '2', '2', '28');
insert into itens_partida values (null, '2', '2', '4');
insert into itens_partida values (null, '13', '2', '14');
insert into itens_partida values (null, '14', '2', '23');
insert into itens_partida values (null, '15', '2', '19');
insert into itens_partida values (null, '15', '2', '4');
insert into itens_partida values (null, '16', '2', '5');
insert into itens_partida values (null, '16', '2', '4');
insert into itens_partida values (null, '16', '2', '11');
insert into itens_partida values (null, '17', '2', '15');
insert into itens_partida values (null, '17', '2', '4');
insert into itens_partida values (null, '18', '2', '24');
insert into itens_partida values (null, '18', '2', '3');
insert into itens_partida values (null, '19', '2', '16');
insert into itens_partida values (null, '20', '2', '6');
insert into itens_partida values (null, '21', '2', '8');
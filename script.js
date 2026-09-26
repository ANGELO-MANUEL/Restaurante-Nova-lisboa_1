const categoriasBebidas = [
  'Refrigerantes',
  'Sumos Naturais',
  'Cervejas',
  'Gins e Vodkas',
  'Vinhos',
  'Espumantes',
  'Champanhes',
  'Aguardente',
  'Licores',
  'Whiskies'
];

const pratos = [
  // --- SOPAS E CALDOS ---
  { nome: 'Sopa de Feijão', categoria: 'Sopas & Caldos', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500' },
  { nome: 'Sopa de Legumes', categoria: 'Sopas & Caldos', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500' },

  // --- PRATOS PRINCIPAIS ---
  { nome: 'Arroz com Peixe Carapau Grelhado', categoria: 'Pratos principais', preco: '5.000 KZ', imagem: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500' },
  { nome: 'Arroz com Carne', categoria: 'Pratos principais', preco: '5.000 KZ', imagem: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500' },
  { nome: 'Arroz com Grelhada', categoria: 'Pratos principais', preco: '5.000 KZ', imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500' },
  { nome: 'Peixe Assado / Grelhado', categoria: 'Pratos principais', preco: '6.500 KZ', imagem: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500' },
  { nome: 'Funge com Muteta', categoria: 'Pratos principais', preco: '6.500 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { nome: 'Funge com Carne de Porco Grelhada e Molhos', categoria: 'Pratos principais', preco: '6.500 KZ', imagem: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500' },
  { nome: 'Funge com Carne de Vaca Grelhada e Molhos', categoria: 'Pratos principais', preco: '6.500 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { nome: 'Funge com Diversos Molhos', categoria: 'Pratos principais', preco: '7.500 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { nome: 'Caldeirada de Cabrito', categoria: 'Pratos principais', preco: '6.000 KZ', imagem: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500' },
  { nome: 'Cozido', categoria: 'Pratos principais', preco: '5.000 KZ', imagem: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500' },
  { nome: 'Bitoque Simples', categoria: 'Pratos principais', preco: '5.500 KZ', imagem: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500' },
  { nome: 'Bitoque Composto', categoria: 'Pratos principais', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500' },
  { nome: 'Bifana no Prato', categoria: 'Pratos principais', preco: '10.000 KZ', imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { nome: 'Bifana no Pão', categoria: 'Pratos principais', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },

  // --- GRELHADOS E CARNES ---
  { nome: 'Churrasco de Galinha Nacional Completo', categoria: 'Grelhados', preco: '20.000 KZ', imagem: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500' },
  { nome: 'Churrasco de Galinha Nacional Meio', categoria: 'Grelhados', preco: '14.000 KZ', imagem: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500' },
  { nome: 'Barco de Frutos do Mar', categoria: 'Grelhados', preco: '27.000 KZ', imagem: 'https://images.unsplash.com/photo-1565680314477-7669d5a2d61d?w=500' },
  { nome: 'Tábua Mista Mini', categoria: 'Grelhados', preco: '18.000 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { nome: 'Churrasco de Frango', categoria: 'Grelhados', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500' },
  { nome: 'Churrasco de Frango Completo', categoria: 'Grelhados', preco: '14.000 KZ', imagem: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500' },
  { nome: 'Cabrito no Forno', categoria: 'Grelhados', preco: '18.000 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },

  // --- PETISCOS ---
  { nome: 'Picapau', categoria: 'Petiscos', preco: '5.000 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { nome: 'Espeto', categoria: 'Petiscos', preco: '5.500 KZ', imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500' },
  { nome: 'Frango ao Molho', categoria: 'Petiscos', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500' },
  { nome: 'Chouriço Caseiro', categoria: 'Petiscos', preco: '4.500 KZ', imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500' },
  { nome: 'Frango à Passarinho', categoria: 'Petiscos', preco: '5.000 KZ', imagem: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500' },
  { nome: 'Porco Acebolado', categoria: 'Petiscos', preco: '2.500 KZ', imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { nome: 'Pão ao Alho', categoria: 'Petiscos', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1573140247632-f8fd44990499?w=500' },
  { nome: 'Azeitona ao Alho', categoria: 'Petiscos', preco: '6.000 KZ', imagem: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500' },
  { nome: 'Camarão ao Alho', categoria: 'Petiscos', preco: '4.500 KZ', imagem: 'https://images.unsplash.com/photo-1565680314477-7669d5a2d61d?w=500' },
  { nome: 'Peito de Frango ao Alho', categoria: 'Petiscos', preco: '4.500 KZ', imagem: 'https://images.unsplash.com/photo-1604908176997-125f2596f37c?w=500' },

  // --- COMIDAS RÁPIDAS (FAST FOOD) ---
  { nome: 'Hambúrguer Simples', categoria: 'Fast food', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { nome: 'Hambúrguer Especial', categoria: 'Fast food', preco: '4.500 KZ', imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500' },
  { nome: 'Hambúrguer Duplo', categoria: 'Fast food', preco: '6.000 KZ', imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500' },
  { nome: 'Cachorro Normal', categoria: 'Fast food', preco: '1.700 KZ', imagem: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500' },
  { nome: 'Cachorro Especial', categoria: 'Fast food', preco: '2.500 KZ', imagem: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=500' },
  { nome: 'Bifana no Prato (Rápida)', categoria: 'Fast food', preco: '4.000 KZ', imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { nome: 'Bifana no Pão (Rápida)', categoria: 'Fast food', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { nome: 'Fajita de Carne', categoria: 'Fast food', preco: '3.500 KZ', imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500' },
  { nome: 'Fajita de Frango', categoria: 'Fast food', preco: '3.500 KZ', imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500' },
  { nome: 'Fajita Mista', categoria: 'Fast food', preco: '4.000 KZ', imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500' },
  { nome: 'Fajita Vegetariana', categoria: 'Fast food', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500' },

  // --- PIZZAS ---
  { nome: 'Pizza Normal - Carne', categoria: 'Pizzas', preco: '10.000 KZ', imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
  { nome: 'Pizza Normal - Frango', categoria: 'Pizzas', preco: '9.500 KZ', imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500' },
  { nome: 'Pizza Normal - 4 Estações', categoria: 'Pizzas', preco: '10.500 KZ', imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500' },
  { nome: 'Pizza Normal - Vegetariana', categoria: 'Pizzas', preco: '7.500 KZ', imagem: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500' },
  { nome: 'Pizza Familiar - Carne', categoria: 'Pizzas', preco: '13.500 KZ', imagem: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
  { nome: 'Pizza Familiar - Frango', categoria: 'Pizzas', preco: '11.500 KZ', imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500' },
  { nome: 'Pizza Familiar - 4 Estações', categoria: 'Pizzas', preco: '12.500 KZ', imagem: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500' },
  { nome: 'Pizza Familiar - Vegetariana', categoria: 'Pizzas', preco: '9.000 KZ', imagem: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500' },
  { nome: 'Pizza Familiar - Camarão', categoria: 'Pizzas', preco: '14.500 KZ', imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500' },

  // --- PASTELARIA ---
  { nome: 'Rissóis de Camarão', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500' },
  { nome: 'Chamuças', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500' },
  { nome: 'Croquetes', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500' },
  { nome: 'Tosta Simples', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { nome: 'Tosta Mista', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500' },
  { nome: 'Pastéis de Bacalhau', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500' },
  { nome: 'Croissant Misto / Simples', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500' },
  { nome: 'Merenda Simples / Mista', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500' },
  { nome: 'Bolo de Chocolate e Coco', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500' },
  { nome: 'Bolo Simples (Fatia)', categoria: 'Pastelaria', preco: 'Sob Consulta', imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500' },

  // --- CAFETARIA ---
  { nome: 'Café', categoria: 'Cafetaria', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500' },
  { nome: 'Galão', categoria: 'Cafetaria', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500' },
  { nome: 'Capuchino', categoria: 'Cafetaria', preco: '2.500 KZ', imagem: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500' },
  { nome: 'Chá em Saquetas', categoria: 'Cafetaria', preco: '800 KZ', imagem: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500' },

  // --- REFRIGERANTES E ÁGUAS ---
  { nome: 'Fanta Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Sprite Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Coca-Cola Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Coca-Cola Garrafa', categoria: 'Refrigerantes', preco: '600 KZ', imagem: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500' },
  { nome: 'Sprite Garrafa', categoria: 'Refrigerantes', preco: '600 KZ', imagem: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500' },
  { nome: 'Fanta Garrafa', categoria: 'Refrigerantes', preco: '600 KZ', imagem: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500' },
  { nome: 'Groovy 7Up Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Groovy Sumol Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Groovy Pepsi Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Groovy Mirinda Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Compal em Lata', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Nutri Manga 1L', categoria: 'Refrigerantes', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Gardenia Palhinha', categoria: 'Refrigerantes', preco: '300 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Valência 1L', categoria: 'Refrigerantes', preco: '2.500 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Água Chela Pequena', categoria: 'Refrigerantes', preco: '300 KZ', imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500' },
  { nome: 'Água Pura Pequena', categoria: 'Refrigerantes', preco: '300 KZ', imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500' },
  { nome: 'Água Tónica Trimbote', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500' },
  { nome: 'Água das Pedras Vila Auro', categoria: 'Refrigerantes', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500' },
  { nome: 'Água das Pedras Castelo', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500' },
  { nome: 'Bebida Energética 3x', categoria: 'Refrigerantes', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },
  { nome: 'Red Bull', categoria: 'Refrigerantes', preco: '700 KZ', imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500' },

  // --- SUMOS NATURAIS ---
  { nome: 'Sumo Natural de Ananás', categoria: 'Sumos Naturais', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Natural de Melancia', categoria: 'Sumos Naturais', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500' },
  { nome: 'Sumo Natural de Laranja', categoria: 'Sumos Naturais', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Natural de Maracujá', categoria: 'Sumos Naturais', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Natural de Limão', categoria: 'Sumos Naturais', preco: '1.500 KZ', imagem: 'https://images.unsplash.com/photo-1590518368369-05249fc4f8a1?w=500' },
  { nome: 'Sumo Natural de Abacate', categoria: 'Sumos Naturais', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
  { nome: 'Sumo Natural de Batido', categoria: 'Sumos Naturais', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=500' },
  { nome: 'Salada de Fruta', categoria: 'Sumos Naturais', preco: '3.500 KZ', imagem: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500' },

  // --- CERVEJAS ---
  { nome: 'Fino Copo Grande', categoria: 'Cervejas', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500' },
  { nome: 'Fino Copo Pequeno', categoria: 'Cervejas', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=500' },
  { nome: 'Cerveja Heineken Garrafa', categoria: 'Cervejas', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1608270106041-3f45a73e34b9?w=500' },
  { nome: 'Super Bock Lata', categoria: 'Cervejas', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=500' },
  { nome: 'Super Bock Garrafa', categoria: 'Cervejas', preco: '700 KZ', imagem: 'https://images.unsplash.com/photo-1608270106041-3f45a73e34b9?w=500' },
  { nome: 'Cuca Normal Garrafa', categoria: 'Cervejas', preco: '700 KZ', imagem: 'https://images.unsplash.com/photo-1608270106041-3f45a73e34b9?w=500' },
  { nome: 'Cuca Preta Garrafa', categoria: 'Cervejas', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1608270106041-3f45a73e34b9?w=500' },
  { nome: 'Cerveja Eka', categoria: 'Cervejas', preco: '700 KZ', imagem: 'https://images.unsplash.com/photo-1608270106041-3f45a73e34b9?w=500' },

  // --- GINS E VODKAS ---
  { nome: 'Smirnoff Ice Original Lata', categoria: 'Gins e Vodkas', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500' },
  { nome: 'Smirnoff Ice Fruta Lata', categoria: 'Gins e Vodkas', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500' },
  { nome: 'Smirnoff Garrafa', categoria: 'Gins e Vodkas', preco: '2.500 KZ', imagem: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500' },
  { nome: 'Booster Mango Garrafa', categoria: 'Gins e Vodkas', descricao: 'Vários sabores', preco: '700 KZ', imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500' },
  { nome: 'Booster Lata', categoria: 'Gins e Vodkas', descricao: 'Vários sabores', preco: '2.000 KZ', imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500' },
  { nome: 'Vody (Vodka) Lata', categoria: 'Gins e Vodkas', preco: '2.500 KZ', imagem: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500' },
  { nome: 'Círoc', categoria: 'Gins e Vodkas', preco: '43.500 KZ', imagem: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500' },
  { nome: 'Gin Gordon\'s 750ml', categoria: 'Gins e Vodkas', preco: '7.500 KZ', imagem: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500' },
  { nome: 'Gin Gordon\'s Lata', categoria: 'Gins e Vodkas', preco: '700 KZ', imagem: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500' },

  // --- VINHOS ---
  { nome: 'Copo de Vinho Barril', categoria: 'Vinhos', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500' },
  { nome: 'Taça de Vinho', categoria: 'Vinhos', preco: '1.000 KZ', imagem: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500' },
  { nome: 'Vinho Papa Figo 750ml', categoria: 'Vinhos', preco: '20.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Papa Figo', categoria: 'Vinhos', preco: '18.500 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Marquês de Borba 750ml', categoria: 'Vinhos', preco: '14.000 KZ', imagem: 'https://images.pin.it/32dHoMEeF?w=500' },
  { nome: 'Vinho Alandra', categoria: 'Vinhos', preco: '12.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho EA', categoria: 'Vinhos', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho CARM Douro', categoria: 'Vinhos', preco: '23.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Relvas Azueiras', categoria: 'Vinhos', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Castro Douro', categoria: 'Vinhos', preco: '22.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Encosta do Guardiano', categoria: 'Vinhos', preco: '99.100 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Loios', categoria: 'Vinhos', preco: '12.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Verde Coto Mamoelas', categoria: 'Vinhos', preco: '30.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Tintu Relvas', categoria: 'Vinhos', preco: '8.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Conde de Anadia', categoria: 'Vinhos', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho JP Chenet', categoria: 'Vinhos', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Casa Jose Pedro', categoria: 'Vinhos', preco: '22.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Paulo Laureano', categoria: 'Vinhos', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Bispado', categoria: 'Vinhos', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Paulo Laureano Classico', categoria: 'Vinhos', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho de Porcas', categoria: 'Vinhos', preco: '31.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Dona Maria 2019', categoria: 'Vinhos', preco: '23.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },
  { nome: 'Vinho Monte das Cegonhas', categoria: 'Vinhos', preco: '14.000 KZ', imagem: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500' },

  // --- ESPUMANTES ---
  { nome: 'Espumante Borgad', categoria: 'Espumantes', preco: '20.000 KZ', imagem: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500' },
  { nome: 'Espumante Bojador', categoria: 'Espumantes', preco: '24.000 KZ', imagem: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500' },

  // --- CHAMPANHES ---
  { nome: 'Chandon Rich Demi', categoria: 'Champanhes', preco: '44.200 KZ', imagem: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500' },
  { nome: 'Champanha Don Luciano', categoria: 'Champanhes', preco: '10.000 KZ', imagem: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500' },
  { nome: 'Champanha Laço Vermelho', categoria: 'Champanhes', preco: '15.000 KZ', imagem: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500' },

  // --- AGUARDENTE ---
  { nome: 'W. Constantino', categoria: 'Aguardente', preco: '11.000 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },

  // --- LICORES ---
  { nome: 'Licor Ginga Mariquinha', categoria: 'Licores', preco: '35.000 KZ', imagem: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=500' },

  // --- WHISKIES ---
  { nome: 'Whisky Jameson Black', categoria: 'Whiskies', preco: '39.200 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'W. Jameson Black Simples', categoria: 'Whiskies', preco: '3.500 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'W. Jameson Black Duplo', categoria: 'Whiskies', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'Whisky Jameson', categoria: 'Whiskies', preco: '22.100 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'W. Jameson Simples', categoria: 'Whiskies', preco: '3.500 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'W. Jameson Duplo', categoria: 'Whiskies', preco: '7.000 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'Johnnie Walker Blue', categoria: 'Whiskies', preco: '342.000 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'W. Blue Label Simples', categoria: 'Whiskies', preco: '32.000 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'W. Blue Label Duplo', categoria: 'Whiskies', preco: '64.000 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'Johnnie Walker Double Black', categoria: 'Whiskies', preco: '71.250 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' },
  { nome: 'Whisky Black Label', categoria: 'Whiskies', preco: '38.500 KZ', imagem: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=500' }
];

const lista = document.querySelector('#lista-menu');
const categoriasEl = document.querySelector('#categorias');
const pesquisa = document.querySelector('#pesquisa');
const semResultados = document.querySelector('#sem-resultados');
const subcategoriasEl = document.querySelector('#subcategorias');

let categoriaPrincipalAtual = 'Todos';
let subcategoriaAtual = 'Todas';

function renderizarCategorias() {
  const categoriasPrincipais = [
    'Todos',
    'Sopas & Caldos',
    'Pratos principais',
    'Grelhados',
    'Petiscos',
    'Fast food',
    'Pizzas',
    'Pastelaria',
    'Cafetaria',
    'Bebidas'
  ];

  categoriasEl.innerHTML = categoriasPrincipais.map(cat => `
    <button class="categoria ${cat === categoriaPrincipalAtual ? 'ativa' : ''}" data-categoria="${cat}" role="tab">${cat}</button>
  `).join('');

  if (categoriaPrincipalAtual === 'Bebidas') {
    const subcategoriasList = ['Todas', ...categoriasBebidas];
    subcategoriasEl.style.display = 'flex';
    subcategoriasEl.innerHTML = subcategoriasList.map(sub => `
      <button class="subcategoria ${sub === subcategoriaAtual ? 'ativa' : ''}" data-subcategoria="${sub}" role="tab">
        ${sub === 'Todas' ? 'Todas as Bebidas' : sub}
      </button>
    `).join('');
  } else {
    subcategoriasEl.style.display = 'none';
    subcategoriasEl.innerHTML = '';
  }
}

function mostrarMenu() {
  const termo = pesquisa.value.toLowerCase().trim();

  const filtrados = pratos.filter(prato => {
    let correspondeCategoria = false;

    if (categoriaPrincipalAtual === 'Todos') {
      correspondeCategoria = true;
    } else if (categoriaPrincipalAtual === 'Bebidas') {
      if (subcategoriaAtual === 'Todas') {
        correspondeCategoria = categoriasBebidas.includes(prato.categoria);
      } else {
        correspondeCategoria = prato.categoria === subcategoriaAtual;
      }
    } else {
      correspondeCategoria = prato.categoria === categoriaPrincipalAtual;
    }

    const correspondePesquisa = `${prato.nome} ${prato.descricao || ''}`.toLowerCase().includes(termo);
    return correspondeCategoria && correspondePesquisa;
  });

  lista.innerHTML = filtrados.map(prato => `
    <article class="item-menu animar-fade-up ativo">
      ${prato.imagem ? `<img src="${prato.imagem}" alt="${prato.nome}" class="item-imagem" loading="lazy">` : ''}
      <div class="item-conteudo">
        <div class="item-cabecalho">
          <h3>${prato.nome}</h3>
          <strong class="preco">${prato.preco}</strong>
        </div>
        ${prato.descricao ? `<p>${prato.descricao}</p>` : ''}
        ${prato.etiqueta ? `<span class="tag">${prato.etiqueta}</span>` : ''}
      </div>
    </article>
  `).join('');

  semResultados.hidden = filtrados.length > 0;
}

// Eventos de clique nas categorias
categoriasEl.addEventListener('click', event => {
  const botao = event.target.closest('[data-categoria]');
  if (!botao) return;
  categoriaPrincipalAtual = botao.dataset.categoria;
  subcategoriaAtual = 'Todas';
  renderizarCategorias();
  mostrarMenu();
});

// Eventos de clique nas subcategorias
subcategoriasEl.addEventListener('click', event => {
  const botao = event.target.closest('[data-subcategoria]');
  if (!botao) return;
  subcategoriaAtual = botao.dataset.subcategoria;
  renderizarCategorias();
  mostrarMenu();
});

pesquisa.addEventListener('input', mostrarMenu);

renderizarCategorias();
mostrarMenu();

// Atualiza o ano no rodapé
document.querySelector('#ano').textContent = new Date().getFullYear();

// Restringe a data mínima de reserva para hoje
const hoje = new Date().toISOString().split('T')[0];
const campoData = document.querySelector('#reserva-data');
if (campoData) campoData.min = hoje;

// Submissão da reserva via WhatsApp
document.querySelector('#form-reserva').addEventListener('submit', event => {
  event.preventDefault();
  const telefoneRestaurante = '244923000000'; // Substituir pelo número real com código do país (sem +)
  const dados = {
    nome: document.querySelector('#reserva-nome').value,
    telefone: document.querySelector('#reserva-telefone').value,
    data: document.querySelector('#reserva-data').value,
    hora: document.querySelector('#reserva-hora').value,
    pessoas: document.querySelector('#reserva-pessoas').value,
    zona: document.querySelector('#reserva-zona').value,
    observacoes: document.querySelector('#reserva-observacoes').value || 'Sem observações'
  };
  const texto = `Olá! Quero reservar uma mesa.%0A%0ANome: ${dados.nome}%0ATelefone: ${dados.telefone}%0AData: ${dados.data}%0AHora: ${dados.hora}%0APessoas: ${dados.pessoas}%0AZona: ${dados.zona}%0AObservações: ${dados.observacoes}`;
  window.open(`https://wa.me/${telefoneRestaurante}?text=${texto}`, '_blank');
});

// Submissão da mensagem de opinião
document.querySelector('#form-opiniao').addEventListener('submit', event => {
  event.preventDefault();
  const msg = document.querySelector('#mensagem-opiniao');
  msg.textContent = 'Obrigado! A sua mensagem foi registada com sucesso.';
  msg.className = 'mensagem-form sucesso';
  event.target.reset();
});

// Animações de Scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animar-fade-up').forEach(el => {
  observer.observe(el);
});
/* ---------- LOGO ORIGINAL DEL NEGOCIO ---------- */
const LOGO_SRC = 'fotos/logo.png';
document.getElementById('navLogo').src = LOGO_SRC;
document.getElementById('heroLogo').src = LOGO_SRC;
document.getElementById('footerLogo').src = LOGO_SRC;

/* ---------- DATOS DE LA CARTA (letrero real del local) ---------- */
/* Cada item admite opcionalmente 'img': URL de una foto del producto (ej: img:'fotos/espresso.jpg'). Si no se define, el ítem se muestra solo con texto. */
const MENU = {
  caliente: {
    label:'Café caliente',
    groups:[{title:'Café caliente', items:[
      {n:'Espresso (simple)', p:1900}, {n:'Espresso (doble)', p:2500},
      {n:'Americano (simple)', p:2000}, {n:'Americano (doble)', p:2600},
      {n:'Latte o cortado (simple)', p:2500}, {n:'Latte o cortado (doble)', p:3300},
      {n:'Cappuccino (simple)', p:2500, img:'fotos/cappuccino.jpg'}, {n:'Cappuccino (doble)', p:3300, img:'fotos/cappuccino.jpg'},
      {n:'Cappuccino Vainilla (simple)', p:3000}, {n:'Cappuccino Vainilla (doble)', p:3900},
      {n:'Cappuccino Caramelo (simple)', p:3000}, {n:'Cappuccino Caramelo (doble)', p:3900},
      {n:'Cappuccino Viena (simple)', p:3000, d:'Cappuccino tradicional con crema'}, {n:'Cappuccino Viena (doble)', p:3900, d:'Cappuccino tradicional con crema'},
      {n:'Mocaccino (simple)', p:2600}, {n:'Mocaccino (doble)', p:3400},
      {n:'Affogato', p:2700, d:'Carga de espresso con bola de helado de vainilla'},
      {n:'Affogato Premium', p:3500, d:'Carga de espresso con bola de helado de vainilla, esencia y crema'},
      {n:'Café Bombón', p:2800, d:'Carga de espresso, leche condensada y leche'},
      {n:'Agregado esencias', p:500},
      {n:'Agregados de crema', p:500},
    ]}]
  },
  chocolateTe: {
    label:'Chocolate y Tetería',
    groups:[
      { title:'Chocolate caliente', items:[
        {n:'Chocolate caliente normal', p:2500},
        {n:'Chocolate caliente con crema o marshmallow', p:3000},
      ]},
      { title:'Tetería', items:[
        {n:'Té', p:2000, d:'Té de canela, té de cedrón o té negro'},
        {n:'Té Chai', p:2400},
        {n:'Té con leche', p:2400},
        {n:'Infusión', p:2000},
        {n:'Chai Latte', p:3200},
      ]}
    ]
  },
  frias: {
    label:'Bebidas frías',
    groups:[
      { title:'Bebestibles fríos', items:[
        {n:'Leche con plátano', p:3200},
        {n:'Leche con frutilla', p:3200},
        {n:'Jugo Natural', p:3000},
        {n:'Limonada natural', p:3100},
        {n:'Limonada menta', p:3200},
        {n:'Granizado fruta natural', p:3200},
        {n:'Smoothie fruta natural', p:3500},
        {n:'Smoothie fruta natural con crema', p:4000},
        {n:'Té helado', p:2600, d:'Canela, cedrón o negro'},
        {n:'Té helado chai', p:3000},
        {n:'Lata bebida', p:1600},
        {n:'Agua mineral', p:1000},
        {n:'Jugo en cajita', p:800},
      ]},
      { title:'Café y chocolate frío', items:[
        {n:'Americano helado', p:2990, d:'Americano doble con hielo y azúcar'},
        {n:'Latte helado', p:3600, d:'Carga de espresso, leche, hielo y azúcar'},
        {n:'Café helado', p:3900, d:'Helado de vainilla, leche con café y crema'},
        {n:'Chocolate helado', p:3900, d:'Helado de vainilla, leche con chocolate y crema'},
        {n:'Batido de café con crema', p:3990},
        {n:'Batido de chocolate con crema', p:3990, img:'fotos/batidos.jpg'},
        {n:'Batido de vainilla con crema', p:3990, img:'fotos/batidos.jpg'},
        {n:'Batido de Oreo con crema', p:4100},
        {n:'Batido Mocca', p:4100},
      ]}
    ]
  },
  pasteleria: {
    label:'Pastelería y dulces',
    groups:[
      { title:'Pastelería', items:[
        {n:'Trozo de torta', p:2800},
        {n:'Trozo de torta helada', p:3000},
        {n:'Trozo de cheesecake', p:2800},
        {n:'Trozo de kuchen, pie de limón o tartaleta', p:2800, img:'fotos/pie-limon.jpg'},
        {n:'Muffins', p:2000},
        {n:'Donuts clásica', p:1300, v:1},
        {n:'Donuts rellena', p:1800, v:1},
        {n:'4 mini donuts surtidas', p:2400, v:1},
        {n:'Berlines', p:1300},
        {n:'Brownie', p:1490},
        {n:'Brazo de Reina', p:1800},
      ]},
      { title:'Galletas y dulces', items:[
        {n:'Mendocino', p:690},
        {n:'Delicia', p:690},
        {n:'Alfajor de maicena', p:690},
        {n:'Empolvados', p:690},
        {n:'Mini Cachito', p:550},
        {n:'Mini tartaleta', p:990},
        {n:'Mini pie de limón', p:990},
        {n:'Alfajor', p:990},
      ]}
    ]
  },
  salados: {
    label:'Salados',
    groups:[
      { title:'Panini (pan ciabatta)', items:[
        {n:'Jamón queso', p:4100, d:'Jamón, queso fundido'},
        {n:'Napolitano', p:5600, d:'Tomate, jamón, queso, aceitunas'},
        {n:'Pollo o jamón', p:5700, d:'Lechuga, tomate, palta, pollo o jamón'},
        {n:'Pollo italiano', p:5700, d:'Tomate, palta, mayo, pollo'},
        {n:'Vegetariano Quesillo', p:5700, v:1, d:'Lechuga, tomate, palta, quesillo'},
        {n:'Vegetariano Champiñón', p:5600, v:1, d:'Lechuga, tomate, palta, champiñón'},
        {n:'Fugazza', p:5600, d:'Queso, cebolla caramelizada, aceitunas y orégano'},
        {n:'Mechada', p:6700, d:'Queso y carne mechada'},
        {n:'Mechada Italiana', p:6700, d:'Palta, tomate y carne mechada'},
        {n:'Pollo Bbq', p:6900, d:'Queso, cebolla caramelizada, pollo y salsa bbq'},
        {n:'Mechada o pollo MM', p:7700, d:'Queso, cebolla caramelizada, aceitunas y champiñones'},
      ]},
      { title:'Fajita', items:[
        {n:'Jamón queso', p:3700, d:'Jamón, queso'},
        {n:'Napolitana', p:4900, d:'Tomate, jamón, queso, aceitunas'},
        {n:'Mechada', p:6000, d:'Carne mechada, queso'},
        {n:'Pollo o jamón', p:4900, d:'Lechuga, tomate, palta, pollo o jamón'},
        {n:'Vegetariana', p:4900, v:1, d:'Lechuga, tomate, palta, quesillo o champiñón'},
      ]},
      { title:'Croissant', items:[
        {n:'Jamón queso', p:3800},
        {n:'Ave pimentón con lechuga', p:4300},
        {n:'Ave mayo con lechuga', p:4300},
        {n:'Ave palta con lechuga', p:4300},
      ]},
      { title:'Sándwich (pan de molde)', items:[
        {n:'Jamón queso', p:3000},
        {n:'Ave mayo', p:3990},
        {n:'Ave palta', p:3990},
        {n:'Ave queso', p:3990},
        {n:'Ave pimentón', p:3990},
        {n:'Tostadas', p:3200, v:1, d:'Con mantequilla y mermelada'},
      ]},
      { title:'Agregados', items:[
        {n:'Aceituna', p:600}, {n:'Lechuga', p:600}, {n:'Tomate', p:900},
        {n:'Champiñón', p:1300}, {n:'Cebolla caramelizada', p:1300},
        {n:'Jamón', p:1600}, {n:'Queso', p:1600}, {n:'Palta', p:1400},
      ]}
    ]
  },
  heladeria: {
    label:'Heladería',
    groups:[
      { title:'Helados', items:[
        {n:'Cono simple', p:1800, d:'1 bola de helado'},
        {n:'Cono doble', p:2500, d:'2 bolas de helado'},
        {n:'Cono grande', p:3200, d:'3 bolas de helado'},
      ]},
      { title:'Postres helados (solo para servir en el local)', items:[
        {n:'Brownie con helado', p:4200, d:'2 bolas de helado a elección, con crema y salsa de chocolate'},
        {n:'Banana Split', p:4900, d:'3 bolas de helado a elección, con crema y salsa de chocolate'},
        {n:'Volcán de chocolate', p:4690, d:'1 bola de helado sabor vainilla y toque de frutos rojos'},
      ]},
      { title:'Copa de helado (solo para servir en el local)', items:[
        {n:'Copa de Helado', p:4290, d:'3 bolas de helado a elección, con salsa manjar y mini chubi, salsa de frambuesa con merenguitos, o salsa de chocolate con galletas oreo'},
      ]},
      { title:'Agregado', items:[
        {n:'Topping', p:400},
      ]}
    ]
  },
  promos: {
    label:'Promociones',
    groups:[{title:'Promociones (para servir en el local salvo que se indique)', items:[
      {n:'Promo #1', p:8200, d:'Chocolate o café caliente a elección + jugo + sándwich miga o jamón queso'},
      {n:'Promo #2', p:4700, d:'Chocolate o café caliente a elección + trozo de torta o cheesecake'},
      {n:'Promo #3', p:9900, d:'Chocolate o café caliente a elección + sándwich miga o jamón queso + trozo de torta o cheesecake'},
      {n:'Promo #5', p:5200, d:'Bandeja dulce surtido — para servir o llevar'},
      {n:'Promo #6', p:4000, d:'Chocolate caliente con crema o marshmallow + donuts clásica'},
      {n:'Promo Duo', p:9900, d:'2 chocolate o café caliente a elección + bandeja mix dulce'},
      {n:'Arma tu Torta', p:19990, d:'Torta o cheesecake a elección, 8 trozos a elección — solo para llevar'},
    ]}]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');
const catKeys = Object.keys(MENU);

catKeys.forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i===0 ? ' active':'');
  tab.textContent = MENU[key].label;
  tab.addEventListener('click', () => showTab(key));
  tab.dataset.key = key;
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i===0 ? ' active':'');
  panel.id = 'panel-' + key;

  MENU[key].groups.forEach(group => {
    if(group.title && MENU[key].groups.length > 1){
      const h = document.createElement('div');
      h.style.cssText = 'font-family:Space Mono,monospace;font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--pink);margin:28px 0 12px;font-weight:700;';
      h.textContent = group.title;
      panel.appendChild(h);
    }
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    group.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.addEventListener('click', () => openModal(item));

      if(item.img){
        const photo = document.createElement('div');
        photo.className = 'menu-item-photo';
        const photoImg = document.createElement('img');
        photoImg.src = item.img;
        photoImg.alt = item.n;
        photo.appendChild(photoImg);
        row.appendChild(photo);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'menu-item-text';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.n;
      textWrap.appendChild(nameSpan);

      if(item.v){
        const vegTag = document.createElement('span');
        vegTag.className = 'veg-tag';
        vegTag.textContent = 'VEG';
        textWrap.appendChild(vegTag);
      }

      if(item.d){
        const descDiv = document.createElement('div');
        descDiv.className = 'desc';
        descDiv.textContent = item.d;
        textWrap.appendChild(descDiv);
      }

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price mono';
      priceDiv.textContent = money(item.p);

      row.appendChild(textWrap);
      row.appendChild(priceDiv);
      grid.appendChild(row);
    });
    panel.appendChild(grid);
  });
  panelsEl.appendChild(panel);
});

function showTab(key){
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + key));
}

/* ---------- MODAL PRODUCTO ---------- */
let currentItem = null;
function openModal(item){
  currentItem = item;
  document.getElementById('modalName').textContent = item.n;
  document.getElementById('modalPrice').textContent = money(item.p);
  document.getElementById('modalDesc').textContent = item.d || 'Preparado del día en MM Cafetería y Pastelería.';
  const photoWrap = document.getElementById('modalPhoto');
  if(item.img){
    photoWrap.innerHTML = '';
    const photoImg = document.createElement('img');
    photoImg.src = item.img;
    photoImg.alt = item.n;
    photoWrap.appendChild(photoImg);
    photoWrap.style.display = 'block';
  } else {
    photoWrap.style.display = 'none';
  }
  toggleModal(true);
}
document.getElementById('modalAddBtn').addEventListener('click', () => {
  addToCart(currentItem);
  toggleModal(false);
  toggleCart(true);
});
function toggleModal(open){ document.getElementById('modalOverlay').classList.toggle('open', open); }

/* ---------- CARRITO ---------- */
let cart = [];
function addToCart(item){
  const existing = cart.find(c => c.n === item.n);
  if(existing){ existing.qty++; } else { cart.push({...item, qty:1}); }
  renderCart();
}
function changeQty(name, delta){
  const line = cart.find(c => c.n === name);
  if(!line) return;
  line.qty += delta;
  if(line.qty <= 0) cart = cart.filter(c => c.n !== name);
  renderCart();
}
function renderCart(){
  const linesEl = document.getElementById('cartLines');
  const count = cart.reduce((a,c) => a + c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  linesEl.innerHTML = '';
  if(cart.length === 0){
    const empty = document.createElement('p');
    empty.className = 'cart-empty';
    empty.textContent = 'Todavía no agregaste nada.';
    linesEl.appendChild(empty);
  } else {
    cart.forEach(c => {
      const line = document.createElement('div');
      line.className = 'cart-line';

      const left = document.createElement('div');
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = c.n;

      const qtyCtrl = document.createElement('div');
      qtyCtrl.className = 'qty-ctrl';

      const minusBtn = document.createElement('button');
      minusBtn.className = 'qty-btn';
      minusBtn.type = 'button';
      minusBtn.textContent = '–';
      minusBtn.addEventListener('click', () => changeQty(c.n, -1));

      const qtySpan = document.createElement('span');
      qtySpan.className = 'mono';
      qtySpan.textContent = c.qty;

      const plusBtn = document.createElement('button');
      plusBtn.className = 'qty-btn';
      plusBtn.type = 'button';
      plusBtn.textContent = '+';
      plusBtn.addEventListener('click', () => changeQty(c.n, 1));

      qtyCtrl.appendChild(minusBtn);
      qtyCtrl.appendChild(qtySpan);
      qtyCtrl.appendChild(plusBtn);
      left.appendChild(name);
      left.appendChild(qtyCtrl);

      const lineTotal = document.createElement('div');
      lineTotal.className = 'mono';
      lineTotal.textContent = money(c.p * c.qty);

      line.appendChild(left);
      line.appendChild(lineTotal);
      linesEl.appendChild(line);
    });
  }
  const total = cart.reduce((a,c) => a + c.p*c.qty, 0);
  document.getElementById('cartTotal').textContent = money(total);
  updateCheckoutLink(total);
}
function updateCheckoutLink(total){
  let msg = 'Hola! Quiero hacer este pedido en MM Cafetería y Pastelería:%0A%0A';
  cart.forEach(c => { msg += '• ' + c.n + ' x' + c.qty + ' — ' + money(c.p*c.qty) + '%0A'; });
  msg += '%0ATotal: ' + money(total);
  document.getElementById('checkoutBtn').href = 'https://wa.me/56953324233?text=' + msg;
}
function toggleCart(open){ document.getElementById('cartOverlay').classList.toggle('open', open); }
document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
document.getElementById('cartCloseBtn').addEventListener('click', () => toggleCart(false));
document.getElementById('modalCloseBtn').addEventListener('click', () => toggleModal(false));
renderCart();

/* ---------- NAV MÓVIL ---------- */
document.getElementById('navToggle').addEventListener('click', function(){
  document.getElementById('navLinks').classList.toggle('open');
});

/* ---------- NAVEGACIÓN SPA POR PESTAÑAS ---------- */
const panels = document.querySelectorAll('.tab-panel');

function goToTab(tabId){
  panels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === tabId));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

/* ---------- INDICADOR ABIERTO/CERRADO EN VIVO (Dom-Jue 16:30-21:00, Vie-Sáb 16:30-21:30) ---------- */
function updateOpenStatus(dotId, textId){
  const dot = document.getElementById(dotId);
  const text = document.getElementById(textId);
  if(!dot || !text) return;
  const now = new Date();
  const day = now.getDay(); // 0 dom ... 6 sáb
  const minutes = now.getHours()*60 + now.getMinutes();
  let closeMin = (day === 5 || day === 6) ? (21*60+30) : (21*60);
  const isOpen = minutes >= (16*60+30) && minutes < closeMin;
  text.textContent = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !isOpen);
}
updateOpenStatus('statusDot', 'statusText');
updateOpenStatus('statusDot2', 'statusText2');

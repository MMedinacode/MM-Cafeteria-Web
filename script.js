/* ---------- LOGO ORIGINAL DEL NEGOCIO ---------- */
const LOGO_SRC = 'data:image/png;base64,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';
document.getElementById('navLogo').src = LOGO_SRC;
document.getElementById('heroLogo').src = LOGO_SRC;
document.getElementById('footerLogo').src = LOGO_SRC;

/* ---------- DATOS DE LA CARTA (letrero real del local) ---------- */
const MENU = {
  caliente: {
    label:'Café caliente',
    groups:[{title:'Café caliente', items:[
      {n:'Espresso (simple)', p:1900}, {n:'Espresso (doble)', p:2500},
      {n:'Americano (simple)', p:2000}, {n:'Americano (doble)', p:2600},
      {n:'Latte o cortado (simple)', p:2500}, {n:'Latte o cortado (doble)', p:3300},
      {n:'Cappuccino (simple)', p:2500}, {n:'Cappuccino (doble)', p:3300},
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
        {n:'Batido de chocolate con crema', p:3990},
        {n:'Batido de vainilla con crema', p:3990},
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
        {n:'Trozo de kuchen, pie de limón o tartaleta', p:2800},
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
(function(){
  const dot = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  const now = new Date();
  const day = now.getDay(); // 0 dom ... 6 sáb
  const minutes = now.getHours()*60 + now.getMinutes();
  let closeMin = (day === 5 || day === 6) ? (21*60+30) : (21*60);
  const isOpen = minutes >= (16*60+30) && minutes < closeMin;
  text.textContent = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  dot.classList.toggle('closed', !isOpen);
})();

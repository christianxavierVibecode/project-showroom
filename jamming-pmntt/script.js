var CFG={regular:{label:"Regular",price:50000,quota:400,sold:0},vip:{label:"VIP",price:75000,quota:100,sold:0}};
var sel="regular",qty=1,MAXQ=10;
var rp=function(n){return "Rp"+n.toLocaleString("id-ID")};
var left=function(k){return CFG[k].quota-CFG[k].sold};
var T=document.getElementById("tiers");
Object.keys(CFG).forEach(function(k,i){
  var c=CFG[k],l=document.createElement("label");
  l.className="tier"+(k==="vip"?" vip":"");
  l.innerHTML='<input type="radio" name="tier" value="'+k+'"'+(i===0?" checked":"")+'><h3>'+c.label.toUpperCase()+'</h3><div class="price">'+rp(c.price)+'</div><div class="left">Tersisa '+left(k)+' dari '+c.quota+'</div><div class="bar"><i style="width:'+(left(k)/c.quota*100)+'%"></i></div>';
  T.appendChild(l);
});
T.addEventListener("change",function(e){sel=e.target.value;qty=Math.max(1,Math.min(qty,MAXQ,left(sel)));render()});
function render(){
  document.getElementById("q").textContent=qty;
  document.getElementById("sc").textContent=CFG[sel].label;
  document.getElementById("sp").textContent=rp(CFG[sel].price);
  document.getElementById("sq").textContent=qty;
  document.getElementById("st").textContent=rp(CFG[sel].price*qty);
}
document.getElementById("mn").onclick=function(){qty=Math.max(1,qty-1);document.getElementById("qe").textContent="";render()};
document.getElementById("pl").onclick=function(){
  var lim=Math.min(MAXQ,left(sel));
  if(qty>=lim){document.getElementById("qe").textContent="Maksimal "+lim+" voucher per pesanan sesuai kuota tersedia."}else{qty++}
  render()};
var f=document.getElementById("f");
function setErr(el,msg){var s=el.type==="checkbox"?document.getElementById("se"):el.parentNode.querySelector(".err");s.textContent=msg||"";if(el.type!=="checkbox")el.setAttribute("aria-invalid",msg?"true":"false")}
f.addEventListener("submit",function(e){
  e.preventDefault();
  var v=function(n){return f.elements[n].value.trim()},bad=null,chk=function(n,ok,m){setErr(f.elements[n],ok?"":m);if(!ok&&!bad)bad=f.elements[n]};
  chk("nama",v("nama").length>=3,"Isi nama lengkap, minimal 3 huruf.");
  chk("panggilan",v("panggilan").length>=2,"Isi nama panggilan.");
  chk("hp",/^(\+62|62|0)8[0-9]{8,12}$/.test(v("hp").replace(/[\s-]/g,"")),"Isi nomor HP/WhatsApp Indonesia yang valid, contoh 081234567890.");
  chk("alamat",v("alamat").length>=10,"Isi alamat lengkap, minimal 10 karakter.");
  chk("email",/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email")),"Isi alamat email yang valid, contoh nama@gmail.com.");
  chk("setuju",f.elements.setuju.checked,"Centang persetujuan untuk melanjutkan.");
  if(bad){bad.focus();return}
  var d=document.getElementById("done"),dl=document.getElementById("dl"),rows=[["Pembeli",v("nama")],["Kategori",CFG[sel].label],["Jumlah",qty+" voucher"],["Total bayar",rp(CFG[sel].price*qty)],["Email",v("email")],["WhatsApp",v("hp")]];
  dl.innerHTML="";
  rows.forEach(function(r){var a=document.createElement("dt"),b=document.createElement("dd");a.textContent=r[0];b.textContent=r[1];dl.appendChild(a);dl.appendChild(b)});
  d.style.display="block";d.focus();d.scrollIntoView({behavior:"smooth",block:"center"});
});
var target=Date.UTC(2026,10,13,16,0,0);
var roll=document.getElementById("roll"),items=[];
for(var i=0;i<60;i++){var e=document.createElement("i");e.textContent=String(i).padStart(2,"0");roll.appendChild(e);items.push(e)}
function layout(sec){
  for(var i=0;i<60;i++){
    var k=((i-sec+30)%60+60)%60-30,a=Math.abs(k),kk=Math.max(-7,Math.min(7,k)),e=items[i];
    e.style.transform="translate(-50%,-50%) translate("+(-kk*kk*3)+"px,"+(-kk*46)+"px) rotate("+(kk*5)+"deg)";
    e.style.opacity=(a===0||a>5)?0:(1-a/6)*0.9;
    e.style.fontSize=(28-a*1.5)+"px";
  }
}
function tick(){var t=Math.max(0,target-Date.now()),p=function(n){return String(n).padStart(2,"0")},sc=Math.floor(t/1e3)%60;
  document.getElementById("d").textContent=p(Math.floor(t/864e5));
  document.getElementById("h").textContent=p(Math.floor(t/36e5)%24);
  document.getElementById("m").textContent=p(Math.floor(t/6e4)%60);
  document.getElementById("s").textContent=p(sc);
  layout(sc)}
tick();setInterval(tick,1000);render();

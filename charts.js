

new Chart(
document.getElementById('categoriaChart'),
{
type:'pie',
data:{
labels:['Mercado','Transporte'],
datasets:[{
data:[500,200]
}]
}
});
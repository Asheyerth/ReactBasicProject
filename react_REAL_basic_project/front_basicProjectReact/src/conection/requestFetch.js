export async function enviarDatos(datasend) {
  const respuesta = await fetch('http://localhost:3001/addList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mensaje: datasend })
  });
  
  const datos = await respuesta.json();
  console.log(datos);
}
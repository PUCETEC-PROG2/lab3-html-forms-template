const { execSync } = require('child_process');

try {
  // Ejecutar Jest y capturar salida
  const output = execSync('jest --verbose', { 
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  console.log(output);
  
  // Extraer resultados
  const passedMatch = output.match(/(\d+) passed/);
  const totalMatch = output.match(/Tests:\s+.*?(\d+) total/);
  
  if (passedMatch && totalMatch) {
    const passed = parseInt(passedMatch[1]);
    const total = parseInt(totalMatch[1]);
    const score = ((passed / total) * 10).toFixed(2);
    
    console.log('\n' + '═'.repeat(60));
    console.log(`📊 CALIFICACIÓN: ${score}/10 puntos`);
    console.log(`✅ Pruebas aprobadas: ${passed}/${total}`);
    console.log('═'.repeat(60) + '\n');
  }
  
  process.exit(0);
} catch (error) {
  // Jest falló, mostrar salida y calcular nota
  const output = error.stdout || error.message;
  console.log(output);
  
  const passedMatch = output.match(/(\d+) passed/);
  const totalMatch = output.match(/Tests:\s+.*?(\d+) total/);
  
  if (passedMatch && totalMatch) {
    const passed = parseInt(passedMatch[1]);
    const total = parseInt(totalMatch[1]);
    const score = ((passed / total) * 10).toFixed(2);
    
    console.log('\n' + '═'.repeat(60));
    console.log(`📊 CALIFICACIÓN: ${score}/10 puntos`);
    console.log(`✅ Pruebas aprobadas: ${passed}/${total}`);
    console.log('═'.repeat(60) + '\n');
  }
  
  process.exit(1);
}

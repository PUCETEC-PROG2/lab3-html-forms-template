const fs = require('fs');
const path = require('path');

// Leer los resultados del test
const resultsPath = path.join(__dirname, 'test-results.json');

if (!fs.existsSync(resultsPath)) {
  console.error('❌ No se encontraron resultados de pruebas.');
  process.exit(1);
}

const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

// Mapeo de puntos por suite de pruebas
const pointsMap = {
  '1. Estructura HTML básica (1 punto)': 1,
  '2. Título y encabezado (0.5 puntos)': 0.5,
  '3. Formulario existe (0.5 puntos)': 0.5,
  '4. Campo Nombre (1 punto)': 1,
  '5. Campos Apellidos (1 punto)': 1,
  '6. Campo Cédula (1 punto)': 1,
  '7. Campo Motivo de apertura (1 punto)': 1,
  '8. Campo Tipo de cuenta (1 punto)': 1,
  '9. Campos de Dirección de domicilio (1 punto)': 1,
  '10. Campo Foto (1 punto)': 1,
  '11. Botón Confirmar (1 punto)': 1
};

let totalScore = 0;
let maxScore = 10;

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log('║         AUTOCALIFICACIÓN - LABORATORIO 3                   ║');
console.log('║         Formulario de registro a PUCE Banco                ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

// Procesar resultados
results.testResults.forEach(testFile => {
  testFile.assertionResults.forEach(assertion => {
    const suiteName = assertion.ancestorTitles[1]; // Nombre de la suite describe
    const points = pointsMap[suiteName] || 0;
    
    if (assertion.status === 'passed') {
      const testPoints = points / assertion.ancestorTitles.length;
      totalScore += testPoints;
    }
  });
});

// Calcular calificación proporcional
const finalScore = Math.min(totalScore, maxScore).toFixed(2);
const percentage = ((finalScore / maxScore) * 100).toFixed(2);

// Mostrar resumen
console.log('📊 RESUMEN DE PRUEBAS:\n');
console.log(`   Total de pruebas ejecutadas: ${results.numTotalTests}`);
console.log(`   ✅ Pruebas aprobadas: ${results.numPassedTests}`);
console.log(`   ❌ Pruebas fallidas: ${results.numFailedTests}`);
console.log('\n' + '─'.repeat(60) + '\n');

// Mostrar desglose por sección
console.log('📋 DESGLOSE POR SECCIÓN:\n');

const suiteResults = {};
results.testResults.forEach(testFile => {
  testFile.assertionResults.forEach(assertion => {
    const suiteName = assertion.ancestorTitles[1];
    if (!suiteResults[suiteName]) {
      suiteResults[suiteName] = { passed: 0, total: 0 };
    }
    suiteResults[suiteName].total++;
    if (assertion.status === 'passed') {
      suiteResults[suiteName].passed++;
    }
  });
});

Object.entries(suiteResults).forEach(([suite, data]) => {
  const points = pointsMap[suite] || 0;
  const earnedPoints = (data.passed / data.total) * points;
  const status = data.passed === data.total ? '✅' : '❌';
  console.log(`   ${status} ${suite}`);
  console.log(`      ${data.passed}/${data.total} pruebas | ${earnedPoints.toFixed(2)}/${points} puntos`);
});

console.log('\n' + '═'.repeat(60) + '\n');

// Calificación final
console.log('🎯 CALIFICACIÓN FINAL:\n');
console.log(`   📝 Puntaje obtenido: ${finalScore} / ${maxScore}`);
console.log(`   📊 Porcentaje: ${percentage}%`);

// Mensaje según calificación
let message = '';
let emoji = '';

if (finalScore >= 9) {
  emoji = '🌟';
  message = '¡EXCELENTE! Has dominado el laboratorio.';
} else if (finalScore >= 7) {
  emoji = '👍';
  message = '¡MUY BIEN! Buen trabajo.';
} else if (finalScore >= 5) {
  emoji = '📚';
  message = 'APROBADO. Revisa los puntos fallidos.';
} else {
  emoji = '💪';
  message = 'Necesitas repasar. ¡Sigue intentando!';
}

console.log(`\n   ${emoji} ${message}\n`);
console.log('═'.repeat(60) + '\n');

// Guardar calificación en archivo
const gradeReport = {
  timestamp: new Date().toISOString(),
  score: parseFloat(finalScore),
  maxScore: maxScore,
  percentage: parseFloat(percentage),
  testsPassed: results.numPassedTests,
  testsTotal: results.numTotalTests,
  details: suiteResults
};

fs.writeFileSync(
  path.join(__dirname, 'calificacion.json'),
  JSON.stringify(gradeReport, null, 2)
);

console.log('💾 Reporte guardado en: calificacion.json\n');

// Exit code basado en si se aprobó o no
process.exit(finalScore >= 5 ? 0 : 1);

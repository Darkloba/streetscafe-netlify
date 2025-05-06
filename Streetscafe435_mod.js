(function () {
  function modificarValores() {
    try {
      // Buscar objeto global con addCash()
      for (const key in window) {
        const obj = window[key];
        if (obj && typeof obj === 'object' && typeof obj.addCash === 'function') {
          const originalAddCash = obj.addCash;
          obj.addCash = function (amount, showEffect) {
            console.log("💰 Monedas modificadas:", amount, "→ 10");
            return originalAddCash.call(this, 10, showEffect);
          };
          console.log("✔️ addCash modificado en:", key);
        }
      }

      // Modificar experiencia
      if (typeof window.addGourmetPoints === 'function') {
        const originalAddXP = window.addGourmetPoints;
        window.addGourmetPoints = function (points) {
          console.log("✨ XP modificada:", points, "→ 5");
          return originalAddXP.call(this, 5);
        };
        console.log("✔️ addGourmetPoints modificado");
      }
    } catch (err) {
      console.error("❌ Error al modificar valores:", err);
    }
  }

  // Ejecutar después de cargar
  window.addEventListener("load", () => {
    console.log("✅ Script modificado cargado desde Netlify.");
    setTimeout(modificarValores, 2000);
  });
})();

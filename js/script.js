document.addEventListener("DOMContentLoaded", () => {
    const niveles = document.querySelectorAll(".nivel1, .nivel2, .nivel3, .nivel4, .nivel5, .nivel6, .nivel7");
    
    niveles.forEach((nivel, index) => {
        setTimeout(() => {
            nivel.style.opacity = "1";
            nivel.style.transform = "scale(1)";
        }, index * 500); // Retraso progresivo en la animación
    });
});
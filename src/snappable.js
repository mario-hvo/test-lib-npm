// src/snappable.js
// Das ist ein ES Module → deshalb export default am Ende

export default class Snappable {
  constructor(canvas) {                    // Konstruktor bekommt das Canvas-Element
    this.canvas = canvas;                  // Speichert das Canvas
    this.ctx = canvas.getContext('2d');    // 2D-Zeichenkontext
    this.snapGridSize = 20;                // Rastergröße (20 Pixel)
    this.draggingElement = null;           // Welches Objekt wird gerade gezogen?
  }

  // Methode: Ein Objekt „snappt“ an das Raster
  snapToGrid(x, y) {
    const snappedX = Math.round(x / this.snapGridSize) * this.snapGridSize;
    const snappedY = Math.round(y / this.snapGridSize) * this.snapGridSize;
    return { x: snappedX, y: snappedY };
  }

  // Beispiel: Du kannst später hier mehr Logik hinzufügen (z. B. für Particles)
  enableSnapping() {
    console.log('%c✅ Snappable Lib geladen – Snapping ist bereit!', 'color: lime; font-weight: bold');
    // Hier kommt später die echte Logik für dein Galaxy-Projekt
  }
}

// Damit du die Lib auch direkt im Browser mit <script type="module"> einbinden kannst:
if (typeof window !== 'undefined') {
  window.Snappable = Snappable;
}

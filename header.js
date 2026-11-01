
document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.className = "gc-header";

  header.innerHTML = `
    <div class="gc-header-inner">
      <a class="gc-brand" href="./">
        <span class="gc-logo">GC</span>
        <span>GC Calculators</span>
      </a>

      <nav class="gc-nav" aria-label="Main navigation">
        <a href="./">Home</a>
        <a href="concrete.html">Concrete</a>
        <a href="drywall.html">Drywall</a>
        <a href="roofing.html">Roofing</a>
      </nav>
    </div>
  `;

  document.body.prepend(header);
});

# 🛠 Coding Challenge – Support Simulation (Polpo)

Este repositorio contiene la solución al challenge de simulación de soporte técnico en producción.

El objetivo fue diagnosticar y resolver incidencias reales dentro de una aplicación existente, priorizando según impacto en negocio y aplicando fixes mínimos sin refactorizaciones innecesarias.

---

## 🚀 Stack

- Next.js 16 (App Router)
- TypeScript
- Prisma ORM
- SQLite (local)
- Tailwind CSS

---

## ⚙️ Setup

```bash
npm install
```

Crear archivo `.env`:

```env
DATABASE_URL="file:./dev.db"
```

Inicializar base de datos:

```bash
npm run db:setup
```

Ejecutar proyecto:

```bash
npm run dev
```

---

## 🧠 Enfoque

El challenge fue abordado como un escenario real de soporte en producción:

- Diagnóstico de causa raíz (no solo síntomas)
- Priorización por impacto (seguridad → bloqueo → UX → UI)
- Cambios mínimos (sin refactor innecesario)
- Aislamiento por ticket (branches `fix/*`)

---

## 🐛 Issues Resueltos

### 🔴 1. Data Leak entre compañías (CRÍTICO)

**Problema:**  
El endpoint de tickets devolvía información de todas las compañías.

**Impacto:**  
Fuga de datos entre tenants (riesgo de seguridad alto).

**Solución:**  
Se filtró la consulta por `companyId` del usuario actual.

---

### 🔴 2. Tickets urgentes se quedan cargando

**Problema:**  
Al resolver tickets urgentes, la request nunca terminaba.

**Causa raíz:**  
Promesa async sin `resolve()`.

**Solución:**  
Se corrigió la función async para que finalice correctamente.

---

### 🟡 3. UI no actualiza estado de tickets

**Problema:**  
Los cambios solo se veían recargando la página.

**Causa raíz:**  
Mutación directa del estado en React.

**Solución:**  
Se implementó actualización inmutable usando `map()`.

---

### 🟢 4. Botón “Resolver” no funciona en mobile

**Problema:**  
El footer fijo tapaba el botón en mobile.

**Solución:**  
Se agregó padding inferior al contenedor principal.

---

## 🌿 Estrategia de ramas

```
main        → base de desarrollo
production  → versión estable
fix/*       → una rama por incidente
```

Ejemplos:

- fix/data-leak-company-scope  
- fix/urgent-ticket-hanging  
- fix/react-state-mutation  
- fix/mobile-footer-overlap  

---

## 🔀 Flujo de trabajo

```
fix/* → main → production
```

Cada fix fue:

- aislado  
- con commit claro  
- enfocado en un solo problema  

---

## 🧪 Consideraciones

- No se realizaron refactorizaciones globales  
- Se mantuvo el comportamiento existente fuera de los bugs  
- Se priorizó estabilidad sobre cambios estructurales  

---

## 📌 Conclusión

Este ejercicio se abordó con mentalidad de soporte en producción, enfocándose en:

- resolución eficiente de incidentes  
- impacto en usuario final  
- estabilidad del sistema  

---

## 👤 Autor

Gustavo

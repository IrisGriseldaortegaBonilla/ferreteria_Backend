import { Router } from 'express';
import { totalVentasPorDia, totalVentasPorMes, totalVentasPorAnio, totalVentasPorEmpleado,
          cantidadVentasPorEmpleado, ventasEmpleadoPorMes, totalVentasPorClientes, 
          totalComprasPorClientes, totalComprasPorClientesMes, productosMasVendidosPorCantidad,
          productosMasVendidosPorTotal, productosVendidosPorMes, totalVentasPorCategorias,
          totalVentasPorCategoriasMes, productosBajoStock, stockPorCategoria, totalVentasPorClienteEmpleadoMes,
          totalVentasPorCategoriaEmpleadoMes, totalVentasPorCategoriaClienteMes, promedioVentasPorEmpleado,
          promedioVentasPorEmpleadoMes, clientesFrecuentes, clientesFrecuentesPorMes, productosMasCompradosPorClientes,
          categoriasMasCompradasPorClientes, totalVentasPorDiaSemana, totalVentasPorCategoriaDiaSemana,
          productosMayorRotacion, categoriasMayorRotacion } from '../controllers/estadisticas.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/totalventaspordia', totalVentasPorDia);

// Ruta para obtener total de ventas por mes
router.get('/totalventaspormes', totalVentasPorMes);

// Ruta para obtener total de ventas por año
router.get('/totalventasporanio', totalVentasPorAnio);

// Ruta para obtener total de ventas por empleado
router.get('/totalventasporempleado', totalVentasPorEmpleado);

// Ruta para obtener cantidad de ventas por empleado
router.get('/cantidadventasporempleado', cantidadVentasPorEmpleado);

// Ruta para obtener ventas por empleado y mes
router.get('/ventasempleadopormes', ventasEmpleadoPorMes);

// Ruta para obtener el total de ventas por clientes 
router.get('/totalventasporclientes', totalVentasPorClientes);

// Ruta para obtener el total de compras por clientes y mes
router.get('/totalcomprasporclientes', totalComprasPorClientes);

// Ruta para obtener el total de compras por cliente y mes
router.get('/totalcomprasporclientesmes', totalComprasPorClientesMes);

// Ruta para obtener el total de productos más vendidos por cantidad
router.get('/productosmasvendidosporcantidad', productosMasVendidosPorCantidad);

// Ruta para obtener el total de productos más vendidos por valor total
router.get('/productosmasvendidosportotal', productosMasVendidosPorTotal);

// Ruta para obtener el total de productos por mes
router.get('/productosvendidospormes', productosVendidosPorMes);

// Ruta para obtener el total de ventas por categria
router.get('/totalventasporcategorias', totalVentasPorCategorias);

// Ruta para obtener el total de ventas por categria y mes
router.get('/totalventasporcategoriasmes', totalVentasPorCategoriasMes);

// Ruta para obtener los Productos con bajo stock menor a 50
router.get('/productosbajostock', productosBajoStock);

// Ruta para obtener el Stock por categoria
router.get('/stockporcategoria', stockPorCategoria);

// Ruta para obtener las Ventas por cliente, empleado y mes
router.get('/totalventasporclienteempleadomes', totalVentasPorClienteEmpleadoMes);

// Ruta para obtener las Ventas por categoria, empleado y mes
router.get('/totalventasporcategoriaempleadomes', totalVentasPorCategoriaEmpleadoMes);

// Ruta para obtener las Ventas por cliente, categoría y mes
router.get('/totalventasporcategoriaclientemes', totalVentasPorCategoriaClienteMes);

// Ruta para obtener el Promedio de ventas por empleado
router.get('/promedioventasporempleado', promedioVentasPorEmpleado);

// Ruta para obtener el Promedio de ventas por empleado y mes
router.get('/promedioventasporempleadomes', promedioVentasPorEmpleadoMes);

// Ruta para obtener los Clientes que compran más frecuentemente
router.get('/clientesfrecuentes', clientesFrecuentes);

// Ruta para obtener los Clientes frecuentes por mes
router.get('/clientesfrecuentespormes', clientesFrecuentesPorMes);

// Ruta para obtener los Productos mas comprados por clientes
router.get('/productosmascompradosporclientes', productosMasCompradosPorClientes);

// Ruta para obtener los Cantegorias mas compradas por clientes
router.get('/categoriasmascompradasporclientes', categoriasMasCompradasPorClientes);

// Ruta para obtener el Total de ventas por dia de la semana
router.get('/totalventaspordiasemana', totalVentasPorDiaSemana);

// Ruta para obtener el Total de ventas por categoria y dia de la semana
router.get('/totalventasporcategoriadiasemana', totalVentasPorCategoriaDiaSemana);

// Ruta para obtener los Productos con mayor rotación (Ventas/Stock inicial)
router.get('/productosmayorrotacion', productosMayorRotacion);

// Ruta para obtener las Categorías con mayor rotación
router.get('/categoriasmayorrotacion', categoriasMayorRotacion);

export default router;
var numero = prompt("Ingrese un número entero para obtener su tabla de multiplicar", "");
document.write("<table class= 'table table-borderd'>\n\t");
document.write("<caption class='the_cap' >Tabla de multiplicar del " + numero + "</caption>\n");
document.write("<thead class='table-dark'>\n\t");
document.write("<tr>\n\t\t<th >Operación</th>\n\t\t<th>Producto</th>\n\t</tr>\n");
document.write("</thead>\n\t");
document.write("<tbody >\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 1 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 1) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 2 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 2) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 3 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 3) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 4 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 4) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 5 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 5) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 6 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 6) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 7 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 7) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 8 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 8) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 9 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 9) + "</td>\n\t</tr>\n\t");
document.write("<tr>\n\t\t<td class='table-secondary'>" + numero + " x 10 = </td>\n\t\t");
document.write("<td class='table-secondary'>" + (numero * 10) + "</td>\n\t</tr>\n\t");
document.write("</tbody>\n\t");
document.write("</table>\n\t");
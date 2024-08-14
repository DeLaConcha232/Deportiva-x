namespace UserRegistrationApi.Models
{
    public class OrderItem
    {
        public int Id { get; set; }  // Corresponde a 'idDetalle'
        public int OrderId { get; set; }  // Corresponde a 'idPedidos'
        public string ProductId { get; set; }  // Cambiado a 'string' para que coincida con 'idProductos'
        public int Quantity { get; set; }  // Corresponde a 'Cantidad'
        public decimal Price { get; set; }  // Corresponde a 'PrecioUnitario'

        public string Talla { get; set; }  // Nueva propiedad para almacenar la talla

        public Order Order { get; set; }  // Relación con la orden
        public Product Product { get; set; }  // Relación con el producto
    }
}

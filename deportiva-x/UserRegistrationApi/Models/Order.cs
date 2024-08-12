namespace UserRegistrationApi.Models
{
    public class Order
    {
        public int Id { get; set; }  // Corresponde a 'idPedidos' en la base de datos
        public int UserId { get; set; }  // Corresponde a 'idUsuario'
        public DateTime OrderDate { get; set; }  // Corresponde a 'fechaPedido'
        public string Estado { get; set; }  // Corresponde a 'Estado'
        public decimal TotalAmount { get; set; }  // Corresponde a 'Total'

        public List<OrderItem> OrderItems { get; set; }  // Relación con los elementos de la orden
    }
}
